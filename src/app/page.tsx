import Link from 'next/link';
// import styles from '../styles/Home.module.css';
import Navbar from './components/navbar';
import { link } from 'fs';
 
 

 function home ()  {
  return (
       <div>
        <h1  className='text-cyan-200 text-2xl '><b>Home</b></h1>
        <ul>
<li className='text-cyan-200 py-3 m-30 text-2xl hover:underline' ><Link href="/about">About</Link></li>
<li className='text-cyan-200 py-3  text-2xl  hover:underline'><Link href="/contact">Contact</Link></li>
<li className='text-cyan-200 py-3 text-2xl  hover:underline '><Link href="/services">Services</Link></li>
        </ul>
       </div>
        
  )
 } 
 
 
 export default home;


 
  
 
 
