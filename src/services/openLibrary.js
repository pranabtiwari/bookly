import axios from "axios";


const BASE_URL = "https://openlibrary.org";

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json`, {
      params: { title: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw new Error("Failed to fetch books");
  }
};



export const searchAuthors = async (author) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/authors.json`, {
            params: { author },
        });
        return response.data;
    }catch (error) {
        console.error("Error fetching authors:", error);
        throw new Error("Failed to fetch authors");
    }
};


export const getBookDetails = async (olid) => {
  try {
    const response = await axios.get(`${BASE_URL}/works/${olid}.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw new Error("Failed to fetch book details");
  }
};