import Link from 'next/link'

export default function Overview() {
    return (
        <div className='flex items-center justify-center mx-auto my-8 bg-emerald-500 w-72 h-72'>
            <Link href='/'>
                <a className='text-2xl text-gray-100'>Return Home</a>
            </Link>
        </div>
    )
}