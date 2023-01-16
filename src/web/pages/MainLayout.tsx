import { atom, useAtom } from 'jotai';
import React from 'react';
import { Outlet } from 'react-router-dom';

const countAtom = atom(0);
const MainLayout: React.FC = (): JSX.Element => {
  const [num] = useAtom(countAtom);
  return (
    <div className="app">
      <section className="px-16">
        <h1 className="my-6 font-mono text-2xl"> React for Webpack--{num} </h1>
        <Outlet />
      </section>
    </div>
  );
};
MainLayout.whyDidYouRender = true;
export default React.memo(MainLayout);
