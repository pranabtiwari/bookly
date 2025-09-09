// Home.js
import BookList from "../components/BookList";

export default function Home({ books, loading, searchPerformed }) {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-500 text-lg animate-pulse">Loading books...</p>
        </div>
      ) : books && books.length > 0 ? (
        <BookList books={books} />
      ) : searchPerformed ? (
        <div className="flex justify-center items-center h-[60vh] text-center">
          <p className="text-gray-700 text-lg">
            Sorry, no books found 😔<br />
            Try searching for another title or author.
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[60vh] text-center">
          <p className="text-gray-700 text-lg">
            Welcome to <span className="font-bold text-blue-600">Bookly</span>! 📚<br />
            Search for any book you want, e.g., <span className="italic font-semibold">"Harry Potter"</span>.
          </p>
        </div>
      )}
    </div>
  );
}
