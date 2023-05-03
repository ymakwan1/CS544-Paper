import axios from 'axios';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
