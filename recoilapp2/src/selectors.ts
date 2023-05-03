import { selectorFamily, GetRecoilValue } from 'recoil';
import { fetchPosts, Post } from './api';

export const postsState = selectorFamily<Post[], number>({
  key: 'postsState',
  get: (id: number) => async ({ get }: { get: GetRecoilValue }) => {
    const posts = await get(postsQuery(id));
    return posts;
  },
});

export const postsQuery = selectorFamily<Post[], number>({
  key: 'postsQuery',
  get: (id: number) => async () => {
    const posts = await fetchPosts();
    return posts.filter((post) => post.userId === id);
  },
});
