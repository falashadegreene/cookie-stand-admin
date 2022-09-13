// import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [str, setStr] = useState('{}');

  function createCookieFormHandler(event) {
    event.preventDefault();
    stringifyContent(event.target.location.value, parseInt(event.target.min.value), parseInt(event.target.max.value), parseInt(event.target.avg.value));
    event.target.reset();
  }

  function stringifyContent(location, min, max, avg) {
    setStr(JSON.stringify({location, min, max, avg}))
  }


  return (
    <div>
      <Head>
        <title>cookie-stand-admin</title>
      </Head>
      <Header />
      <Main  onSubmit={createCookieFormHandler} stringified = {str}/>
      <Footer />
    </div>
  );
}

function Header() {
  return (
  <header className='bg-orange-100 text-black text-4xl font-serif font-semibold p-4'>
    <h1>Cookie Stand Admin</h1>
  </header>
  );
}

function Main(props) {
  return (
  <main className='text-1xl text-center pb-10 pt-4'>
    <CookieForm onSubmit={props.onSubmit} />
    <ReportTable />
    <TableDataJSON stringified={props.stringified} />
  </main>
  );
}

function Footer() {
  return (
  <footer className='bg-orange-100 text-slate-800 p-4'>
    <p>&copy;2022</p>
  </footer>
  );
}

function CookieForm(props) {
  return (

    <form onSubmit={props.onSubmit} className='rounded-lg  w-4/5 p-8 bg-stone-400 ml-52 mt-5 shadow-2xl'>
      <h1 className='text-center text-3xl mb-5'>Create Cookie Stand</h1>
      <label className='flex'>
        Location:
        <input name='location' className='flex-auto ml-1' type="text" placeholder='Type in Location' required />
      </label>

      <label>
        Min Customer per Hour
        <input name='min' className='flex-row ml-2 mt-3' type="text" required />
      </label>

      <label className='ml-2'>
        Max Customer per Hour
        <input name='max' className='flex-row ml-2 mt-3' type="text" required />
      </label>

      <label className='ml-2'>
        Average Cookies per Sale
        <input name='avg' className=' ml-2 mt-3' type="text" required />
      </label>
      <button type='submit' className='ml-4 mt-4  px-10 py-5 bg-red-300 rounded-full shadow-lg shadow-red-500/50'>Create
      </button>
    </form>
  );
}

function ReportTable() {
  return <p className='mt-5'>Report Table Coming Soon...</p>

}

function TableDataJSON(props) {
  return <p>{props.stringified}</p>
}