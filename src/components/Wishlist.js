import "./Wishlist.css";
import BookCard from "./BookCard";

const Wishlist = ({
	children,
	wishlist,
	toggleWishlist,
	wishlistCounter,
	handleBookDetailBtn,
}) => {
	return (
		<div className="wishlist">
			<h1 className="wishlist-title">
				You have <em>{wishlistCounter}</em>
				{wishlistCounter === 1 ? " book" : " books"} in your wishlist
			</h1>
			<div className="wishlist-books">
				{wishlist.map((book) => {
					return (
						<BookCard
							book={book}
							key={book.id}
							imageSrc={book.volumeInfo.imageLinks.thumbnail}
							title={book.volumeInfo.title}
							author={book.volumeInfo.authors[0]}
							wishlist={wishlist}
							toggleWishlist={() => toggleWishlist(book)}
							handleBookDetailBtn={handleBookDetailBtn}
						/>
					);
				})}
			</div>
			{children}
		</div>
	);
};

export default Wishlist;
