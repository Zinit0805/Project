import React from 'react'
import logo from "./assets/images/header-logo.svg"
import arrow from "./assets/icons/arrow-right.svg"
import cb from "./assets/images/collection-background.svg"
import s1 from "./assets/images/big-shoe1.png"
import sh1 from "./assets/images/thumbnail-shoe1.svg"
import sh2 from "./assets/images/thumbnail-shoe2.svg"
import sh3 from "./assets/images/thumbnail-shoe3.svg"
import s5 from "./assets/images/shoe5.svg"
import star from "./assets/icons/star.svg"
import s4 from "./assets/images/shoe4.svg"
import s6 from "./assets/images/shoe6.svg"
import s7 from "./assets/images/shoe7.svg"
import s8 from "./assets/images/shoe8.svg"
import ts from "./assets/icons/truck-fast.svg"
import st from "./assets/icons/shield-tick.svg"
import s from "./assets/icons/support.svg"
import o from "./assets/images/offer.svg"
import shinchan from "./assets/images/shinchan.png"
import Korosuke from "./assets/images/Korosuke.jpeg"
import fl from "./assets/images/footer-logo.svg"
import f from "./assets/icons/facebook.svg"
import tw from "./assets/icons/twitter.svg"
import ins from "./assets/icons/instagram.svg"


const App = () => {
  return (
   <div>


   <nav className=' p-10 flex justify-between items-center'>
    <img src={logo}/>
    <div className='flex space-x-20'>
        <a href='#' className='text-gray-500 text-lg'>Home</a>
        <a href='#' className='text-gray-500 text-lg'>About Us</a>
        <a href='#' className='text-gray-500 text-lg'>Projects</a>
        <a href='#' className='text-gray-500 text-lg'>Contact Us</a>
    </div>
    <div className='flex space-x-5'>
        <a href='#' className='text-lg'>Sign in</a>
        <a href='#' className='text-lg'>Explore now</a>
    </div>
   </nav>


{/* header */}
<div className='grid grid-cols-2'>
<div className='p-10 bg-gray-100'>
  <div className='text-red-400 text-xl'>Our Summer collections</div>
  <div className='text-8xl font-bold w-[700px] py-5 bg-white'>The New Arrival</div>
  <div className='text-8xl font-bold'>Nike Shoes</div>
  <div className='text-gray-500 text-lg w-3/5'>
    Discover the stylish Nike arrivals, quality comfort, and 
    innovation for your active life.
  </div>
  <button className='flex bg-red-400 text-white p-3 px-6 rounded-full'>Shop now
  <img src={arrow} className='pt-1 pl-2' />
  </button>
  <div className='border flex space-x-20'>
    <div className='text'>
      <div className='text-3xl font-bold'> 1k+</div>
      <div className='text-3xl text-gray-500'> Brands</div>
    </div>
    <div className='text'>
      <div className='text-3xl font-bold'> 500+</div>
      <div className='text-3xl text-gray-500'> Shops</div>
    </div>
    <div className='text'>
      <div className='text-3xl font-bold'> 250k+</div>
      <div className='text-3xl text-gray-500'> Customers</div>
    </div>
  </div>
</div>
<div className='p-20 g-[url(cb)] bg-center'>
  <img src={s1} />
  <div className='flex border'>
  <div className=' bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain p-5'>
  <img src={sh1} />
  
</div>
<div className=' bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain p-5'>
  <img src={sh2} />
  
</div>
<div className=' bg-[url(assets/images/thumbnail-background.svg)] bg-center bg-no-repeat bg-contain p-5'>
  <img src={sh3} />
  
</div>

  </div>
</div>
</div>
{/* header */}

   

{/* popular products */}

<section className='py-32 px-10 space-y-2'>

<div className='text-5xl font-bold'>Our <span className='text-red-400'> Popular</span> Products</div>
<div className='text-grey-500 text-lg w-2/5'>
Experience Top-notch Quality and style with our
sought-after selections.
</div>

<div className='grid grid-cols-4 gap-10'>
  <div className='cart space-y-2'>
    <div className='bg-center bg-no-repeat bg-contain'>
    <img src={s5}/>
    </div>
    <div className='rating'>
      <img src={star} />
      <span>5</span>
    </div>
    <div className='text-3xl font-bold'>Nike Air Jordan</div>
    <div className='text-2xl font-bold text-red-400'>$200.20 </div>
    
  </div>
  <div className='cart space-y-2'>
    <div className='bg-center bg-no-repeat bg-contain'>
    <img src={s4}/>
    </div>
    <div className='rating'>
      <img src={star} />
      <span>5</span>
    </div>
    <div className='text-3xl font-bold'>Nike Air Jordan</div>
    <div className='text-2xl font-bold text-red-400'>$200.20 </div>
    
  </div>
  <div className='cart space-y-2'>
    <div className='bg-center bg-no-repeat bg-contain'>
    <img src={s6}/>
    </div>
    <div className='rating'>
      <img src={star} />
      <span>5</span>
    </div>
    <div className='text-3xl font-bold'>Nike Air Jordan</div>
    <div className='text-2xl font-bold text-red-400'>$200.20 </div>
    
  </div>
  <div className='cart space-y-2'>
    <div className='bg-center bg-no-repeat bg-contain'>
    <img src={s7}/>
    </div>
    <div className='rating'>
      <img src={star} />
      <span>5</span>
    </div>
    <div className='text-3xl font-bold'>Nike Air Jordan</div>
    <div className='text-2xl font-bold text-red-400'>$200.20 </div>
    
  </div>
</div>
  
</section>

{/* popular products */}

{/* SuperQuality */}
 <section className='py-20 px-10'>
<div className='grid grid-cols-2'>
  <div className='space-y-5 flex flex-col justify-center'>
    <div className='text-5xl font-bold'> We Provide You <span className='text-read-400'> Super </span> Quality Shoes </div>
    <div className='text-gray-500 text-lg pr-32'> 
    Ensuring premium comfort and style, our meticulously
    crafted footwear is designed to elevate your
    experience, providing you with unmatched quality,
    innovation, and a touch of elegance
    </div>
    <div className='text-gray-500 text-lg pr-32'> 
    Our dedication to detail and excellence ensures your satisfaction
    </div>
  </div>


  <div className='p-10'>
    <img src={s8} />
  </div>
</div>
 </section>
{/* SuperQuality */}

{/* services */ }
  <div className='grid grid-cols-3 py-32 px-10 gap-10'>
    <div className='cart p-10 shadow-xl rounded-xl'>
      <img src={ts} className='bg-red-400 p-2 rounded-full' />
      <div className='text-2xl font-bold'>Free shipping</div>
      <div className='text-lf text-gray-500'>
      Enjoy seamless shopping with our complimentary shipping service.
      </div>
    </div>
    <div className='cart p-10 shadow-xl rounded-xl'>
      <img src={st} className='bg-red-400 p-2 rounded-full' />
      <div className='text-2xl font-bold'>Secure Payment</div>
      <div className='text-lf text-gray-500'>
      Experience worry-free transactions with our secure payment options.
      </div>
    </div>
    <div className='cart p-10 shadow-xl rounded-xl'>
      <img src={s} className='bg-red-400 p-2 rounded-full' />
      <div className='text-2xl font-bold'>Love to help you </div>
      <div className='text-lf text-gray-500'>
      Our dedicated team is here to assist you every step of the way.
      </div>
    </div>


  </div>


{/* services */}


{/* Promotion */}
<div className='py-32 px-10 grid grid-cols-2'>
  <div className='image'>
    <img src={o} />
  </div>
  <div className='text p-10 space-y-5 flex flex-col'>
     <div className='text-3xl font-bold'> <span className='text-red-400'>Special</span> Offer</div>
     <div className='text-gray-500 text-lg'>
     Embark on a shopping journey that redefines your experience with unbeatable deals.From premier selections to incredible savings, we offer unparalleled value that sets us apart.
     </div>
     <div className='text-gray-500 text-lg '>
     Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
     </div>
     <div className='buttons flex space-x-5'>
      <button className='bg-red-400 p-3 px-6 rounded-full'>Shop now
      <img src={arrow} className='mt-1 ml-2' />
      </button>
      <button className='ring-1 text-gray-500 p-3 px-6 rounded-full'>Learn More</button>
     </div>
  </div>
</div>
{/* Promotion */}


{/* review */}
<section className='p-32 flex justify-center items-center
flex-col space-y-5'>
<div className='text-4xl font-bold'>
What Our <span className='text-red-400'>Customers</span>  Say?
</div>
<div className='text-xl text-gray-500 w-4/6 text-center'>
Hear genuine stories from our satisfied customers about their exceptional experiences with us.
</div>

<div className='grid grid-cols-2'>
 <div className='space-y-5 flex justify-center items-center flex-col'>

  <img src={shinchan} className='h-32 rounded-full' />
  <div className='rating flex space-x-1'>
 <img src={star}/>
 <span className='text-gray-500 text-lg'>(4.5)</span>
  </div>
  <div className='text-2xl font-bold'>
    Shinchan
  </div>
  <div className='text-gray text-lg text-center w-4/6'>
  The product not only met but exceeded my expectations. I'll definitely be a returning customer!
  </div>
 </div>
 <div className='space-y-5 flex justify-center items-center flex-col'>

  <img src={Korosuke} className='h-32 rounded-full' />
  <div className='rating flex space-x-1'>
 <img src={star}/>
 <span className='text-gray-500 text-lg'>(4.5)</span>
  </div>
  <div className='text-2xl font-bold'>
    Korosuke
  </div>
  <div className='text-gray text-lg text-center w-4/6'>
  The product not only met but exceeded my expectations. I'll definitely be a returning customer!
  </div>
 </div>

</div>

</section>

{/* review */}

{/* Newsletter */}
<section className='grid grid-cols-2 p-10 py-4'>
<div className="">
  <div className='text-5xl font-bold'>
    Sign Up for 
      <span className='text-red-400'> Updates</span>
        & NewsLetter
  </div>
</div>
<div className="input flex justify-center items-center">
<input placeholder='subscibe@nike.com' className='ring-2 p-3 rounded-full w-5/6'></input>
</div>
</section>
{/* Newsletter */}

{/* footer */}
<footer className='border p-10 grid grid-cols-4 bg-black text-white'>
   <div className='space-y-3'>
    <img src={fl} className='h-7'/>
    <div className='text-gray-500 text-md'>
    Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
    </div>
    <div className='flex space-x-3'>
   <img src={f} className='bg-white p-2 rounded-full'/>
   <img src={tw} className='bg-white p-2 rounded-full'/>
   <img src={ins} className='bg-white p-2 rounded-full'/>
   </div>
   </div>
   <div className='space-y-3'>
    <div className='text-2xl text-gray-500'>Products</div>
    <div className='text-lg text-gray-400'>Air Force 1</div>
    <div className='text-lg text-gray-400'>Air Max 1 </div>
    <div className='text-lg text-gray-400'>Air Jordan 1</div>
    <div className='text-lg text-gray-400'>Air Force 2</div>
    <div className='text-lg text-gray-400'>Nike Waffle Racer</div>
    <div className='text-lg text-gray-400'> Nike Cortez</div>
   </div>
   <div className='space-y-3'>
    <div className='text-2xl text-gray-500'>Help</div>
    <div className='text-lg text-gray-400'>About us</div>
    <div className='text-lg text-gray-400'>FAQs </div>
    <div className='text-lg text-gray-400'>How it works</div>
    <div className='text-lg text-gray-400'>Privacy policy</div>
    <div className='text-lg text-gray-400'>Payment policy</div>
   </div>
   <div className='space-y-3'>
   <div className='text-2xl text-gray-500'>Get in touch</div>
    <div className='text-lg text-gray-400'>customer@nike.com</div>
    <div className='text-lg text-gray-400'>+92554862354 </div>
   </div>
   
   

</footer>

<div className='flex bg-black text-gray-400 p-10 justify-between items-center'>
<div className=''>&#162; Copyright. All rights reserved. </div>
<div className=''>Terms & Conditions</div>
</div>
{/* footer */}



   </div>
  )
}

export default App