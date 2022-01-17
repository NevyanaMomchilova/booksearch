import "./BookCard.css";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import Button from "./Button";

const BookCard = ({ book, imageSrc, title, author, wishlist, toggleWishlist }) => {

    return ( 
        <div className="book-card" >
            <img className="book-card-img" src={imageSrc} alt={title} />
            <div className="book-card-info">
                <h2 className="book-card-title">{title}</h2>
                <p className="book-card-author"><em>AUTHOR: {author}</em></p>
            </div>
            <Button 
                className={wishlist.includes(book) ? "wishlist-btn remove-from-wishlist-btn" : "wishlist-btn add-to-wishlist-btn"} 
                toggleWishlist={toggleWishlist} 
            >
                {wishlist.includes(book) ?
                <RiHeartFill className="btn-icon" />
                :
                <RiHeartLine className="btn-icon" />}
                Wishlist
            </Button>
        </div>
     );
}
 
export default BookCard;