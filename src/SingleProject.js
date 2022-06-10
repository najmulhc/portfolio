import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const [item, setItems] = useState([]);
    const [teddy, setTeddy] = useState({});
    const {projectId} = useParams();
    useEffect(() => {
      fetch("https://api.jsonbin.io/b/62a34c4e05f31f68b3bbebc4")
        .then(res => res.json())
        .then((data) => setItems(data));
    }, []);
    useEffect(() => {
        setTeddy(item[parseInt(projectId) - 1])
        console.log(teddy?.name);
    }, [item, teddy])

  return (
      <section className='container mx-auto px-8'>
          <h1 className='text-center text-5xl font-semibold text-[#071A14]'>{teddy?.name}</h1>
          <h2 className='text-3xl font-semibold text-[#21654E]'>Technologies used: </h2>
          {
              teddy?.technologies?.map(s => <button  className=' bg-[#21654E] font-semibold px-4 py-3 mx-2 rounded-lg text-white  my-6'> {s} </button>)
          }
          <p className='text-xl font-medium text-[#071A14] '>{teddy?.description}</p>
           <h2 className='text-3xl font-semibold text-[#21654E] mt-10 mb-6'>Screenshots: </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
          {
              teddy?.images?.map(img => <img src={img} alt="nothing" className='rounded shadow'  /> )
          }
         </div>
      </section>
  )
}

export default SingleProject