export default function CookieForm(props) {
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