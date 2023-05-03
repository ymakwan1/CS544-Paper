import React from 'react';
import { Provider } from 'react-redux';
import BookList from './BookList';
import store  from './store';

function App() {
  return (
    <Provider store={store}>
      <BookList />
    </Provider>
  );
}

export default App;
