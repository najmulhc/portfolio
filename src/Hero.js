import React from 'react'
import heroImage from "./images/undraw_programming_re_kg9v.svg"
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-5xl mb-4 font-semibold text-[#071A14]">Hi, I am 
        <span className='text-[#21654E]'> Najmul Huda Chowdhury  </span>
      </h1>
      <p className="mb-8 leading-relaxed text-lg text-[#071A14]">I am a fronend web developer who work with libraries like ReactJS. I have over 6 months experince over this. I have worked with many project that made me to feel enough comfort to work on real life projects.</p>
      <div className="flex justify-center">
       <a href="https://drive.google.com/file/d/1W7YaQac4sKUQyKkLzfHJFYJt03S8N1qV/view"> <button className="inline-flex text-white bg-[#21654E] border-0 py-2 px-6 focus:outline-none hover:bg-[#071A14] rounded text-lg">Download Resume</button></a>
    
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={heroImage} />
    </div>
  </div>
</section>
  )
}

export default Hero