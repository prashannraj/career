'use client'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';
//import ProgressBar from "@badrap/bar-of-progress";
import Table from "../component/Table/home"
import NavBar from '../component/NavBar/page';



export default function Home() {
  //const progress = new ProgressBar();
  const [vacancyList, setVacancyList] = useState([])
  const fetchVacancies = async()=> {
    const res = await fetch('http://localhost:4000/vacancies')
    const data = await res.json()
    setVacancyList(data.vacancyList)
  }


  useEffect(()=>{
  fetchVacancies()
  },[])
  // progress.start();
  // setTimeout(() => {
  //   progress.finish();
  // }, 200);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <NavBar/>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Prashann Raj{' '}
            <Image
              src=""
              alt=""
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Apply Online"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <h1>The Following vacancies has been published .</h1>
    <br></br>
    
    <Table data={vacancyList}/>
     
    {/* <Table list={vacancyList} title={['postName','level', 'service', 'minPublishDate', 'sinPublishDate', 'douPublishDate', 'examFeeSingle', 'examFeeDouble']} endpoint="/vacancies" /> */}
    
      </div>
       
     
    </main>
  )
}