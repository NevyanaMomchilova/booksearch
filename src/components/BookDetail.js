import "./BookDetail.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const BookDetail = ({ book, wishlist, toggleWishlist }) => {
    const imageSrc = book.volumeInfo.imageLinks.thumbnail;
	const title = book.volumeInfo.title;
	const author = book.volumeInfo.authors[0];

    return ( 
        <div className="book-detail" >
            <img className="book-card-img" src={imageSrc} alt={title} />
            <div className="book-card-info">
                <h2 className="book-card-title">{title}</h2>
                <p className="book-card-author"><em>AUTHOR: {author}</em></p>
            </div>
            <div className="book-card-btn-container">
                <Button 
                    className={wishlist.includes(book) ? "wishlist-btn remove-from-wishlist-btn" : "wishlist-btn add-to-wishlist-btn"} 
                    handleFunction={() => toggleWishlist(book)} 
                >
                    {wishlist.includes(book) ?
                    <RiHeartFill className="btn-icon" />
                    :
                    <RiHeartLine className="btn-icon" />}
                    Wishlist
                </Button>
                <Link to="/booklist">
                    <Button className={"round-btn "}>Go Back</Button>
                </Link>
            </div>
        </div>
     );
}
 
export default BookDetail;