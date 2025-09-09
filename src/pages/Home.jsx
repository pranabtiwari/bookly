import BookList from "../components/BookList";

export default function Home({ books, loading }) {
  return (
    <div>
      {loading ? (
        // Loading state
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-500 text-lg animate-pulse">Loading books...</p>
        </div>
      ) : books.length > 0 ? (
        // Show books when loaded
        <BookList books={books} />
      ) : (
        // Welcome message when no books
        <div className="flex justify-center items-center h-[60vh] text-center">
          <p className="text-gray-700 text-lg">
            Welcome to <span className="font-bold text-blue-600">Pranab Tiwari Bookify</span>! 📚<br />
            Search for any book you want, e.g., <span className="italic font-semibold">"Harry Potter"</span> or <span className="italic font-semibold">"The Lord of the Rings"</span>.
          </p>
        </div>
      )}
    </div>
  );
}
