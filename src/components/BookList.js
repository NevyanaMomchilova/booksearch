import "./BookList.css";
import BookCard from "./BookCard";

const BookList = ({ books, searchTerm, wishlist, setWishlist }) => {

    
    const toggleWishlist = (book) => {
        if (!wishlist.includes(book)) {
            setWishlist([...wishlist, book ]);
        } else {
            setWishlist(wishlist.filter(wishBook => wishBook !== book))
        }
        
    };
    
    return ( 
        <div className="book-list">
            <h1 className="book-list-title">You have searched for <em>{searchTerm}</em></h1>
            <div className="book-list-books">
                {books.map(book => {  
                return <BookCard 
                            book={book}
                            key={book.id} 
                            imageSrc={book.volumeInfo.imageLinks.thumbnail} 
                            title={book.volumeInfo.title} 
                            author={book.volumeInfo.authors[0]} 
                            wishlist={wishlist}
                            toggleWishlist={() => toggleWishlist(book)} 
                        />
                })}
            </div>
        </div>
        
     );
}
 
export default BookList;