import "./BookCard.css";
import Button from "./Button";

const BookCard = ({ bookId, imageSrc, title, author }) => {
    return ( 
        <div className="book-card">
            <img className="book-card-img" key={bookId} src={imageSrc} alt={title} />
            <div className="book-card-info">
                <h2 className="book-card-title">{title}</h2>
                <p className="book-card-author"><em>AUTHOR: {author}</em></p>
            </div>
            <Button className="add-to-wishlist-btn" >Add to Wishlist</Button>
        </div>
     );
}
 
export default BookCard;