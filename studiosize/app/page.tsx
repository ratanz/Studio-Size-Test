import Navbar from '@/components/Navbar';
import React from 'react'
import Page1 from '@/components/Page1';
import Part2 from '@/components/Part2';
import Page3 from '@/components/Page3';
import Page4 from '@/components/Page4';
import Page5 from '@/components/Page5';
import Page6 from '@/components/Page6';



export default function Home() {
  return (
   <>
   <main className="main w-full h-screen bg-black ">
    <Navbar />
    <Page1 />
    <Part2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
   </main>
   </>
  );
}
