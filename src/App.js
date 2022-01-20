import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BookList from "./components/BookList";
import Home from "./components/Home";
import HomeBackground from "./components/HomeBackground";
import Wishlist from "./components/Wishlist";
import Quotes from "./components/Quotes";
import BookDetail from "./components/BookDetail";
import BookCard from "./components/BookCard";

const App = () => {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [wishlist, setWishlist] = useState([]);
	const [wishlistCounter, setWishlistCounter] = useState(0);
	const [bookDetail, setBookDetail] = useState({});

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

	// Fill missing information in book data from Google Book Api request
	const addMissingBookInfo = (bookData) => {
		const updatedBookData = bookData.map((book) => {
			if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
				book.volumeInfo["imageLinks"] = {
					thumbnail:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/602px-No_picture_available.png",
				};
			}
			if (book.volumeInfo.hasOwnProperty("title") === false) {
				book.volumeInfo["title"] = "Unknown Title";
			}
			if (book.volumeInfo.hasOwnProperty("authors") === false) {
				book.volumeInfo["authors"] = "Unknown Author";
			}
			if (book.volumeInfo.hasOwnProperty("pageCount") === false) {
				book.volumeInfo["pageCount"] = "Unknown";
			}
			if (book.volumeInfo.hasOwnProperty("publisher") === false) {
				book.volumeInfo["publisher"] = "Unknown";
			}
			if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
				book.volumeInfo["publishedDate"] = "Unknown";
			}
			if (book.volumeInfo.hasOwnProperty("categories") === false) {
				book.volumeInfo["categories"] = "Unknown";
			}
			if (book.volumeInfo.hasOwnProperty("subtitle") === false) {
				book.volumeInfo["subtitle"] = "Unknown Subtitle";
			}
			if (book.volumeInfo.hasOwnProperty("description") === false) {
				book.volumeInfo["description"] =
					"This book's description is missing";
			}
			return book;
		});
		return updatedBookData;
	};

	// API call with SearchTerm
	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`
			)
			.then((res) => {
				setBooks(addMissingBookInfo(res.data.items));
			})
			.catch((err) => console.log(err));
	}, [searchTerm]);

	// Toggle Wishlist Button - add or remove book from wishlist
	const toggleWishlist = (book) => {
		if (!wishlist.includes(book)) {
			setWishlist([...wishlist, book]);
		} else {
			setWishlist(wishlist.filter((wishBook) => wishBook !== book));
		}
	};

	// Set Wishlist Counter
	useEffect(() => {
		setWishlistCounter(wishlist.length);
	}, [wishlist]);

	// Handle Book Detail Button
	const handleBookDetailBtn = (book) => {
		setBookDetail(book);
	};

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
							<HomeBackground />
						</Home>
					</Route>
					<Route exact path="/wishlist">
						<Wishlist
							books={books}
							searchTerm={searchTerm}
							wishlist={wishlist}
							toggleWishlist={toggleWishlist}
							wishlistCounter={wishlistCounter}
							handleBookDetailBtn={handleBookDetailBtn}
						/>
					</Route>
					<Route exact path="/quotes">
						<Quotes />
					</Route>
					<Route exact path="/booklist">
						<Home>
							{books.length === 0 ? (
								<HomeBackground />
							) : (
								<BookList
									books={books}
									searchTerm={searchTerm}
									wishlist={wishlist}
									toggleWishlist={toggleWishlist}
									handleBookDetailBtn={handleBookDetailBtn}
								/>
							)}
						</Home>
					</Route>
					<Route path="/booklist/:title">
						<BookDetail
							book={bookDetail}
							wishlist={wishlist}
							toggleWishlist={toggleWishlist}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
