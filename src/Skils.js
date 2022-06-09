import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMongodb, SiReact, SiExpress, SiNodedotjs,SiFirebase , SiHeroku, SiGit, SiRedux} from "react-icons/si"
const Skils = () => {
  return (
      <section className='container mx-auto'>
          <h1 className='text-center text-5xl font-semibold text-[#071A14]'>My Skills</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#D84924] hover:text-[#21654E]'><SiHtml5 /></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>HTML5</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#244AD8] hover:text-[#21654E]'><SiCss3 /></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>CSS3</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#35B3EB] hover:text-[#21654E]'><SiTailwindcss /></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>TailwindCSS</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#EAD41C] bg-black hover:text-[#21654E]'><SiJavascript/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>Javascript</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#3F9636]  hover:text-[#21654E]'><SiMongodb/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>MongoDb</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#2E2E2E]  hover:text-[#21654E]'><SiExpress/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>ExpressJS</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#5CD0EE]  hover:text-[#21654E]'><SiReact/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>ReactJS</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#7046B2]  hover:text-[#21654E]'><SiRedux/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>Redux</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#7CC327]  hover:text-[#21654E]'><SiNodedotjs/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>NodeJS</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#F29E10]  hover:text-[#21654E]'><SiFirebase/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>Firebase Authentication</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#625D9E]  hover:text-[#21654E]'><SiHeroku/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>Heroku</h2>
              </div>
              <div className='flex flex-col p-6 rounded-md shadow justify-center items-center'>
                  <h1 className='text-[100px] text-[#E74B27]  hover:text-[#21654E]'><SiGit/></h1>
                  <h2 className=' text-[#21654E] font-semibold text-3xl mt-4 text-center'>Version control</h2>
              </div>
          </div>
      </section>
  )
}

export default Skils