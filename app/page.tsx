"use client";

import { Provider, atom, useAtom, createStore } from "jotai";

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

function CounterProvider({
  children,
  initialValues,
}: {
  children: React.ReactNode;
  initialValues?: number;
}) {
  const store = createStore();
  store.set(countAtom, initialValues || 0);

  return <Provider store={store}>{children}</Provider>;
}

export default function Home() {
  return (
    <main>
      <CounterProvider initialValues={10}>
        <Counter />
      </CounterProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </main>
  );
}
