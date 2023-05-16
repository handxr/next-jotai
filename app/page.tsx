"use client";

import { Provider, atom, useAtom } from "jotai";

const countAtom = atom(0);

function IncrementButton() {
  const [, setCount] = useAtom(countAtom);
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
  );
}

function DecrementButton() {
  const [, setCount] = useAtom(countAtom);
  return (
    <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
  );
}

function Counter() {
  const [count] = useAtom(countAtom);
  return (
    <>
      <div>count: {count}</div>
      <IncrementButton />
      <DecrementButton />
    </>
  );
}

function CounterProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}

export default function Home() {
  return (
    <main>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </main>
  );
}
