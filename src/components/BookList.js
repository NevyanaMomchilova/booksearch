import "./BookList.css";
import BookCard from "./BookCard";

const BookList = ({ books, searchTerm }) => {
    console.log(books);
    return ( 
        <div className="book-list">
            <h1 className="book-list-title">You have searched for <em>{searchTerm}</em></h1>
            <div className="book-list-books">

                {books.map(book => {
                console.log(book)
                return <BookCard bookId={book.id} imageSrc={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} author={book.volumeInfo.authors[0]} />
                })}
            </div>
        </div>
        
     );
}
 
export default BookList;