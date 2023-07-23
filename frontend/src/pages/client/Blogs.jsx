import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';




const Blogs = () => {
  return (
      <>
          <div className='bg-white rounded-xl '>
            <div className='items-center justify-center mb-6 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] rounded-t-xl'>
              <h1 className='text-4xl font-black text-center text-white underline md:text-7xl underline-offset-8'>Blog</h1>
              <p class='mt-6 text-center text-white mx-4 md:mx-84 text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur.</p>

                  <div className="flex items-center justify-center py-4 my-5 ">
                        <input
                            type="text"
                            className="p-2 mr-2 text-blue-700 bg-white rounded-full border-blue max-md:py-1 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Search..."
                            onChange={(e) => onChange(e.target.value)}
                        />
                       
                          <button className="px-4 py-2 font-semibold text-white bg-blue-900 rounded-full max-md:py-1 hover:bg-blue-500 hover:font-bold">
                            Search
                          </button>
                      
                  </div>
            
        
           <div class="flex justify-end -mt-6 mr-10 ">
            <Link to="/postblog" className='mb-10'>
              <button class="px-8 py-3 font-bold text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:font-black">
                <span class="hidden sm:inline"> 
                  Post a Blog
                </span>
                <span class="md:hidden "> 
                  <AiOutlinePlusCircle />
                </span>
              </button>
            </Link>

          </div>
          </div>
        
            <div className='grid gap-10 mx-4 lg:grid-cols-3 md:grid-cols-2'>
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 1</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div> 
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 2</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 3</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 1</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div> 
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 2</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 3</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 2</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
              <div className='bg-blue-100 shadow-xl rounded-xl'>
                <img className='w-full h-60 rounded-t-xl' src= 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                <h3 className='mt-3 ml-8 font-semibold text-md '>Blog 3</h3>
                <h2 className='ml-5 text-lg font-bold text-blue-900'>Blog topic here</h2>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur.</p>
              </div>
            </div>
          </div>

    </>
  )
}

export default Blogs
