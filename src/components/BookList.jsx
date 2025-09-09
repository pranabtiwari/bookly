import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (!books.length) return <p className="text-gray-500">No books found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
