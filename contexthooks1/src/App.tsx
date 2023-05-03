import React, { useState, createContext, useContext } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  read: boolean;
}

interface BookContextType {
  books: Book[];
  toggleRead: (id: number) => void;
}

const BookContext = createContext<BookContextType>({
  books: [],
  toggleRead: () => {}
});

function BookProvider(props: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', read: false },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', read: true },
    { id: 3, title: '1984', author: 'George Orwell', read: false }
  ]);

  const toggleRead = (id: number) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  return (
    <BookContext.Provider value={{ books, toggleRead }}>
      {props.children}
    </BookContext.Provider>
  );
}

function BookList() {
  const { books, toggleRead } = useContext(BookContext);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>{book.title}</span>
          <button onClick={() => toggleRead(book.id)}>
            {book.read ? 'Mark unread' : 'Mark read'}
          </button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <BookProvider>
      <BookList />
    </BookProvider>
  );
}

export default App;
