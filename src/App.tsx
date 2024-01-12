import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { cn } from '@service';
import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from '@components';

function App() {
  const [count, setCount] = useState(0);

  const [toggle, setToggle] = useState(false);
  const [toggleHeight, setToggleHeight] = useState('0px');
  useEffect(() => {
    if (toggle) {
      setToggleHeight('100px');
    }
  }, [toggle]);

  return (
    <>
      <Accordion type={'single'}>
        <AccordionItem value={'test1'}>
          <AccordionTrigger>test title trigger</AccordionTrigger>
          <AccordionContent>
            <p>test content</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'test2'}>
          <AccordionTrigger>test title trigger 2</AccordionTrigger>
          <AccordionContent>
            <p>test content 2</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className='flex flex-col'>
        <div>
          <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
        </div>
        <div
          className={cn(
            ' bg-primary3 w-full',
            toggle ? 'animate-collapsed-down' : 'animate-collapsed-up'
          )}
          style={{
            ['--content-height' as never]: '100px',
            height: toggleHeight,
            overflow: 'hidden',
          }}
        >
          <div>content toggle</div>
        </div>
      </div>
      <div className='p-xl px-x-xs  bg-primary1'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
