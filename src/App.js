import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Wishlist from "./components/Wishlist";
import Quotes from "./components/Quotes";

const App = () => {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

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

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar>
					<Search
						handleSearchClick={handleSearchClick}
						handleSearchEnter={handleSearchEnter}
					/>
				</Navbar>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/">
						<Home />
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
