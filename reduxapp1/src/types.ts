export interface Book {
    id: number;
    title: string;
    author: string;
    read: boolean;
  }
  
  export interface AppState {
    books: Book[];
  }
  
  export type AppAction = { type: 'TOGGLE_READ'; payload: number };
  