import { ReactElement } from 'react';
import { NextPage } from 'next';
import TestPage from '@/pages/TestPage';

const App: NextPage<ReactElement> = () => (
  <div>
    <TestPage />
  </div>
);

export default App;
