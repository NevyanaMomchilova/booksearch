import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BookList from "./components/BookList";
import Home from "./components/Home";
import HomeBackground from "./components/HomeBackground";
import Categories from "./components/Categories";
import Wishlist from "./components/Wishlist";
import Quotes from "./components/Quotes";

const App = () => {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [wishlist, setWishlist] = useState([]);
	const [wishlistCounter, setWishlistCounter] = useState(0);

	// Handle Click Event in Search Component after click on the search icon
	const handleSearchClick = (searchInputRef) => {
		if (searchInputRef.current.value !== "") {
			setSearchTerm(searchInputRef.current.value);
			searchInputRef.current.value = "";
		}
	};

	// Handle KeyPress Event in Search Component after hitting "enter" in the search field
	const handleSearchEnter = (e) => {
		if (e.key === "Enter" && e.target.value !== "") {
			setSearchTerm(e.target.value);
			e.target.value = "";
		}
	};

	// API call with SearchTerm
	useEffect(() => {
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`).then((res) => {
			setBooks(res.data.items);
		  });
	}, [searchTerm]);

	// Set Wishlist Counter
	useEffect(() => {
		setWishlistCounter(wishlist.length);
	}, [wishlist]);


	return (
		<div className="App">
			<BrowserRouter>
				<Navbar wishlistCounter={wishlistCounter}>
					<Search
						handleSearchClick={handleSearchClick}
						handleSearchEnter={handleSearchEnter}
					/>
				</Navbar>
				<Switch>
					<Route exact path="/">
						<Home>
							{books.length === 0 ? 
								<HomeBackground /> 
							: 
								<BookList 
									books={books} 
									searchTerm={searchTerm}
									wishlist={wishlist}
									setWishlist={setWishlist} />
							}
						</Home>
					</Route>
					<Route exact path="/categories">
						<Categories />
					</Route>
					<Route exact path="/wishlist">
						<Wishlist />
					</Route>
					<Route exact path="/quotes">
						<Quotes />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
