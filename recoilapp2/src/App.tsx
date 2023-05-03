import { useRecoilValueLoadable, RecoilRoot } from 'recoil';
import { postsQuery } from './selectors';

function App() {
  const userId = 2;
  const postsLoadable = useRecoilValueLoadable(postsQuery(userId));

  if (postsLoadable.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (postsLoadable.state === 'hasError') {
    return <div>Error: {postsLoadable.contents.message}</div>;
  }

  return (
    <div>
      <h1>Posts for User {userId}</h1>
      {postsLoadable.contents.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function () {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
