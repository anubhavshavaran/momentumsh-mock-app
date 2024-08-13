import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className='w-full grid grid-cols-home grid-rows-home'>
      <Sidebar />
    </div>
  );
}
