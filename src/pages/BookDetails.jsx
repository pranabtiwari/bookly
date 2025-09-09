import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookDetails } from "../services/openLibrary";

export default function BookDetails() {
  const { id } = useParams(); // Work ID from route
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookDetails(id);
        setBook(data);
      } catch (err) {
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading)
    return (
      <p className="p-4 text-center text-gray-500 animate-pulse">
        Loading book details...
      </p>
    );
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  // Cover image (if available)
  const coverUrl = book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : "https://via.placeholder.com/300x450?text=No+Cover";

  return (
    <div className=" mx-auto p-6 bg-white shadow rounded flex flex-col md:flex-row gap-6">
      {/* Book Cover */}
      <div className="flex-shrink-0 w-full md:w-64">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-auto rounded-md object-cover shadow"
        />
      </div>

      {/* Book Info */}
      <div className="flex-1">
        <Link to="/" className="text-blue-600 underline mb-4 inline-block">
          ← Back to search
        </Link>

        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
        {book.subtitle && (
          <h2 className="text-xl text-gray-600 mb-2">{book.subtitle}</h2>
        )}
        
        

        {book.subjects && (
          <p className="text-gray-700 mb-2">
            <strong>Subjects:</strong> {book.subjects.slice(0, 10).join(", ")}
          </p>
        )}

        {book.description && (
          <p className="text-gray-700 mt-4">
            {typeof book.description === "string"
              ? book.description
              : book.description.value}
          </p>
        )}
      </div>
    </div>
  );
}
