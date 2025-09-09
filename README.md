# 📚 Pranab Tiwari Bookify (CodeSandbox)

A simple book search app built with **React/Next.js** and **Tailwind CSS**.  
You can search for books, view results in a responsive grid, and see messages if no books are found.

---

## **How to Run in CodeSandbox**

1. Open the sandbox in your browser.  
   Example: https://codesandbox.io/p/github/pranabtiwari/bookly/main

2. The app should start automatically. If not, click **“Server Control” → “Start Sandbox”**.

3. Use the **search box** on the page:
   - Type a book title or author.
   - Click **Search**.
   - Results will display as cards.
   - If no books are found, it shows:  
     *“Sorry, no books found 😔”*.
   - Before searching, it shows a **welcome message**.

---

## **App Features**

- Search books by title or author.
- Responsive card layout using Tailwind CSS.
- Hover effects on cards (scale + shadow).
- Loading animation while fetching results.
- Friendly messages for no results or initial visit.

---

## **Project Structure in CodeSandbox**

sandbox/
│
├─ components/
│ ├─ BookList.js # Grid of BookCard
│ └─ BookCard.js # Individual book card with hover effects
│
├─ pages/
│ └─ index.js # Main page with search, loading, and messages
├─ public/ # Static assets
├─ styles/ # Tailwind CSS
└─ package.json



---

## **Tips for Using the Sandbox**

- Make sure **Tailwind CSS** is included in your project dependencies.
- Changes are live: edit the code and see updates immediately.
- You can **share the sandbox** by copying the URL and sending it to others.
- To reset the app: click **“Server Control” → “Restart Sandbox”**.

---

## **Notes**

- The app uses a **fake search function** by default. You can replace it with a real API if needed.
- Hover effects and responsive design are fully functional in the sandbox preview.

