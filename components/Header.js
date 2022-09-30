import Link from 'next/link'

export default function Header({ logout }) {
    return (
        <header className='bg-orange-100 text-black text-4xl font-serif font-semibold p-4'>
            <h1>Cookie Stand</h1>
            <div>
                <button onClick={logout} className='bg-orange-100 text-black px-2.5 py-1.5  mx-2 rounded-md'>Log Out</button>
                <Link href='/overview'>
                    <a className='bg-stone-400 px-2.5 py-0.5 rounded-sm'>Overview</a>
                </Link>
            </div>
        </header>
    );
}