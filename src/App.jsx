import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import SearchBar from "./components/SearchBar";
import { searchBooks } from "./services/openLibrary";
import "./index.css";
import { Link } from "react-router-dom";

export default function App() {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const data = await searchBooks(query);
      setBooks(data.docs.slice(0, 100));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Router>
      <div className="bg-[#fff] min-h-screen flex flex-col">
        <header className="bg-[#fff] text-dark p-5 shadow flex justify-between items-center">
          <Link>
            <h1 className="text-3xl font-bold ">📚 Bookly</h1>
          </Link>
          <SearchBar onSearch={handleSearch} />
        </header>

        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home books={books} loading={loading} />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>


        <footer className="bg-gray-800 text-white text-center p-3">
          <p>Made with ❤️ by PRANAB TIWARI !</p>
        </footer>
      </div>
    </Router>
  );
}
