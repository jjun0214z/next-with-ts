import Counter from './Counter';
import { ReactElement } from 'react';
import { NextPage } from 'next';

const App: NextPage<ReactElement> = () => (
  <div>
    <Counter />
  </div>
);

export default App;
