import React from 'react';
import { atom, useAtom } from 'jotai';
import { Input } from 'antd';

const textAtom = atom('Hello');
const uppercaseAtom = atom(get => get(textAtom).toUpperCase());

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);

  return <div>Uppercase: {uppercase}</div>;
};

const Jotai: React.FC = (): JSX.Element => {
  const [text, setText] = useAtom(textAtom);

  return (
    <>
      <h1>Jotai</h1>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Uppercase />
    </>
  );
};

Jotai.whyDidYouRender = true;
export default Jotai;
