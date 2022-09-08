import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>cookie-stand-admin</title>
      </Head>
      <Header />
      <main>
          <CookieForm />

        <h1 className = 'text-1xl text-center pb-10 pt-4'>Report Table Coming Soon...</h1>
      </main>
      <Footer copyright="2022"/>
    </div>
  )
}

function Header() {
  return <header className = 'bg-orange-100 text-black text-4xl font-serif font-semibold p-4'>
    <h1>Cookie Stand Admin</h1>
  </header>;
}

function Footer(props) {
  return <footer className = 'bg-orange-100 text-slate-800 p-4'>
       <p>&copy;{props.copyright}</p>
  </footer>
}

function CookieForm() {
  return  (

      <form className = 'rounded-lg w-4/5 p-8 bg-stone-400 ml-52 mt-5 shadow-2xl'>
        <h1 className = 'text-center text-3xl mb-5'>Create Cookie Stand</h1>
        <label className = 'flex'>
          Location:
        <input className ='flex-auto ml-1' type = "text" placeholder = 'Type in Location' required/>
        </label>

        <label>
          Min Customer per Hour
        <input className ='flex-row ml-2' type = "number" required/>
        </label>

        <label className ='ml-2'>
          Max Customer per Hour
        <input className ='flex-row ml-2' type = "number" required/>
        </label>

        <label className ='ml-2'>
          Average Cookies per Sale
        <input className ='flex-row ml-2'type = "number" required/>
        </label>
        <button className = 'flex-auto ml-4 mt-4 pr-56 px-10 py-5 bg-red-300 rounded-full shadow-lg shadow-red-500/50'>
          <h2 className = 'pl-5'></h2>
          </button>
      </form>
    );
}