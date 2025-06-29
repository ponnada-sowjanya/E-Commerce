import React from 'react'
import logo from "../img/logo.png"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import {Link} from 'react-router-dom'

function Footer(){
  return (
    <footer className='bg-slate-900 shadow-md'>
        <div className='container mx-auto px-4'>
        <div className='min-h-16'>
            <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                <h2 className="text-4xl font-bold text-white">Subscribe Our Newsletter</h2>
             <form className="md:w-1/3 w-full mt-8 md:mt-8 relative">
                <input 
                type="text" placeholder="Enter Your Email " className='py-4 px-4 rounded shadow-md w-full bg-white'/>
                <button className='bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1'>Submit</button>
                </form>   
            </div>
        </div>
      </div>
      <div className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            <div>
              <img src={logo}  className='my-4'/>
              <p>No matter how you feel, get up, dress up and show up.The way you dress is an expression of your personality.</p>
              <div className='flex item-center gap-8 mt-5'>
                <Facebook size={40} 
                className='bg-white text-black rounded-md p-2'/>
                <Twitter
                 size={40} 
                className='bg-white text-black rounded-md p-2'/>
                <Youtube size={40} 
                className='bg-white text-black rounded-md p-2'/>
                <Instagram size={40} 
                className='bg-white text-black rounded-md p-2'/>
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold my-4'> Pages</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQS</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
              </div>
            <div>
              <h2 className='text-2xl font-semibold my-4'>Categories </h2>
              <ul>
                <li>
                  <Link to="/">Men Wear</Link>
                </li>
                <li>
                  <Link to="/">Women Wear</Link>
                </li>
                <li>
                  <Link to="/">Men Shirts</Link>
                </li>
                <li>
                  <Link to="/">Women Shirts</Link>
                </li>
              </ul>
            </div>
            <div>
             <h2 className='text-2xl font-semibold my-4'>Categories </h2> 
             <p>40 Vishakapatnam,Andhra Pradesh, India </p>
             <p>+91 123 456 7890 </p>
             <p>+91 123 456 7990 </p>
            </div>
          </div>

        </div>


      </div>
      <div className='container mx-auto text-center py-4 text-white'>
        <p>
         Copyright &copy; 2025 OnlineShopping
        </p>
      </div>
    </footer>
  )
}

export default Footer
