import Link from 'next/link';

const navbar = () => {
  return (
<div className='h-16   bg-gradient-to-r from-violet-500 to-fuchsia-500  text-slate-900 flex justify-between items-center' >
<h1 className='text-2xl m-4 cursor-pointer    '>MY-web</h1> 
<ul className='flex gap-3 m-4 cursor-pointer'>
<li className='hover:text-orange-300'><Link href="/home">Home</Link></li>
 <li className=' hover:text-orange-300' ><Link href="/about ">About</Link></li>
 <li className=' hover:text-orange-300'>  <Link href="/contact">Contact</Link></li>
<li className=' hover:text-orange-300'>  <Link href="/services">Services</Link></li>
        </ul>
    </div>
  )
}
export default navbar;
