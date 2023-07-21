import React from 'react'


const Blogs = () => {
  return (
      <>
          <div className='bg-white rounded-md '>
            <div className='items-center justify-center '>
              <h1 className='text-4xl font-black text-center underline text-blue-950 md:text-7xl underline-offset-8'>Blog</h1>
              <div className="flex items-center justify-center py-4 my-5 ">
                    <input
                        type="text"
                        className="p-2 mr-2 bg-gray-300 border max-md:py-1 rounded-xl focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search..."
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <button className="px-4 py-2 text-white bg-blue-700 rounded-lg max-md:py-1">
                        Search
                    </button>
              </div>
            </div>
        
            <div className='grid gap-10 mx-4 lg:grid-cols-3 md:grid-cols-2'>
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 1</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div> 
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 2</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 3</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 1</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div> 
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 2</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 3</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 2</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 3</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
            </div>
          </div>





















          {/* <div>
      <div className='flex grid flex-col w-full gap-4 bg-white md:grid-cols-3 rounded-t-xl'>
        <div className='flex items-center justify-center col-span-4'>
            <div>
                <h1 className='text-4xl font-bold md:text-7xl'>Blog</h1>
            </div>
        </div>
            <div className='col-span-3 text-center'>
                    <p className='mt-5 text-lg mx-96'>Analyzing e-learning is essential to understand its effectiveness and identify areas of improvement.</p>
            </div>
              
            <div className="col-span-3 flex items-center justify-center mt-4 mx-[40rem] py-4">
                <input
                    type="text"
                    className="p-2 mr-2 bg-gray-300 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Search..."
                    onChange={(e) => onChange(e.target.value)}
                />
                <button className="px-4 py-2 text-white bg-blue-700 rounded-lg">
                    Search
                </button>
              </div>
          
          
          <div className='flex grid items-center justify-center grid-cols-3 gap-10'>
              <div className="flex flex-col justify-center ml-10 bg-red-300 rounded-md">
                      <p>First blog</p>
              </div>
              
              <div className="flex flex-col justify-center ml-10 bg-red-300 rounded-md">
                      <p>First blog</p>
              </div>
              
              <div className="flex flex-col justify-center ml-10 bg-red-300 rounded-md">
                      <p>First blog</p>
              </div>
              
              </div>
          </div>
          </div> */}
    </>
  )
}

export default Blogs
