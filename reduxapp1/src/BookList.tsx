import { useSelector, useDispatch } from 'react-redux';
import { toggleRead } from './actions';

interface Book {
  id: number;
  title: string;
  author: string;
  read: boolean;
}

interface AppState {
  books: Book[];
}

function BookList() {
  const books = useSelector((state: AppState) => state.books);
  const dispatch = useDispatch();

  const handleToggleRead = (id: number) => {
    dispatch(toggleRead(id));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>{book.title}</span>
          <button onClick={() => handleToggleRead(book.id)}>
            {book.read ? 'Mark unread' : 'Mark read'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
