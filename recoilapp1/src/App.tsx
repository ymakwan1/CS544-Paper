import React from 'react';
import { atom, useRecoilState, useRecoilValueLoadable, selectorFamily, RecoilRoot } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

const oddCountMessage = selectorFamily<string, number>({
  key: 'oddCountMessage',
  get: (count: number) => async () => {
    const isOdd = count % 2 === 1;
    return isOdd ? 'The count is odd!' : '';
  },
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  const oddMessageLoadable = useRecoilValueLoadable(oddCountMessage(count));

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      {oddMessageLoadable.state === 'hasValue' && (
        <p>{oddMessageLoadable.contents as string}</p>
      )}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}
