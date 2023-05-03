import { AppState, AppAction } from './types';

const initialState: AppState = {
  books: [
    { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', read: false },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', read: true },
    { id: 3, title: '1984', author: 'George Orwell', read: false }
  ]
};

function reducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_READ':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, read: !book.read }
            : book
        )
      };
    default:
      return state;
  }
}

export default reducer;
