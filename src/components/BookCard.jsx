import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  
  const workId = book.key.split("/").pop();

  return (
    <Link to={`/book/${workId}`} className="block">
      <div className="border rounded p-3 shadow transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="font-bold mt-2">{book.title}</h3>
        <p className="text-sm text-gray-600">
          Author: {book.author_name?.join(", ")}
        </p>
        <p className="text-sm">
          First published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </Link>
  );
}
