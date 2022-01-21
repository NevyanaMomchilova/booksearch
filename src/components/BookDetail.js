import "./BookDetail.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const BookDetail = ({ book, wishlist, toggleWishlist }) => {
	const imageSrc = book.volumeInfo.imageLinks.thumbnail;
	const title = book.volumeInfo.title;
	const authors = book.volumeInfo.authors;
	const pageCount = book.volumeInfo.pageCount;
	const categories = book.volumeInfo.categories;
	const publishedDate = book.volumeInfo.publishedDate;
	const publisher = book.volumeInfo.publisher;
	const subtitle = book.volumeInfo.subtitle;
	const description = book.volumeInfo.description;

	return (
		<div className="book-detail" key={book.id}>
			<div className="book-detail-wrapper">
				<img className="book-detail-img" src={imageSrc} alt={title} />
				<div className="book-detail-main-info">
					<div className="book-detail-btn-container">
						<Button
							className={
								wishlist.includes(book)
									? "wishlist-btn remove-from-wishlist-btn"
									: "wishlist-btn add-to-wishlist-btn"
							}
							handleFunction={() => toggleWishlist(book)}
						>
							{wishlist.includes(book) ? (
								<RiHeartFill className="btn-icon" />
							) : (
								<RiHeartLine className="btn-icon" />
							)}
							Wishlist
						</Button>
						<Link to="/booklist">
							<Button className={"round-btn "}>Go Back</Button>
						</Link>
					</div>
					<h1 className="book-detail-main-title">{title}</h1>
					<p className="book-detail-authors">AUTHORS:</p>
					{authors.map((author) => {
						return (
							<p className="book-detail-author">
								<em>{author}</em>
							</p>
						);
					})}
				</div>
				<div className="book-detail-additional-info">
					<p className="book-detail-pages">
						Published Date: <em>{publishedDate}</em>
					</p>
					<p className="book-detail-publisher">
						Publisher: <em>{publisher}</em>
					</p>
					<p className="book-detail-pageCount">
						Page Count: <em>{pageCount}</em>
					</p>
					<p className="book-detail-categories">Categories:</p>
					{categories.map((category) => {
						return (
							<p className="book-detail-category">
								<em>{category}</em>
							</p>
						);
					})}
				</div>
			</div>
			<div className="book-detail-about-info">
				<h2 className="book-detail-subtitle">{subtitle}</h2>
				<p className="book-detail-description">{description}</p>
			</div>
		</div>
	);
};

export default BookDetail;
