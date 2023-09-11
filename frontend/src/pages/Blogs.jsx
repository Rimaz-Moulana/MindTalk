import React, { useState, useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
    axios.get('http://localhost:8080/api/blogs/view')
      .then(response => {
        setBlogData(response.data.content); // Assuming the data is under the 'content' key
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='w-full py-8 bg-white rounded-xl '>
      <div className='mx-10 mb-8 text-center'>
        <h2 className='text-4xl font-bold text-gray-800'>Blogs</h2>
        <p className='my-3 text-gray-600'>Empowering Minds, Elevating Spirits: Your Path to Positivity!</p>
      </div>

      <div className='flex items-center justify-between mx-10 mt-4 space-x-4 m'>
        <div className='flex items-center space-x-2'>
          {/* <select  className='p-2 my-3 text-gray-600 rounded-xl bg-blue-50 font-base border-blue focus:ring focus:outline-none focus:border-blue-300'>
            <option value="option0" disabled selected>Select Category</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select> */}

          <input
            type="text"
            className="p-2 text-gray-600 rounded-full bg-blue-50 font-base border-blue focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search..."
          />

          <button className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:font-bold">
            Search
          </button>
        </div>

        <Link to="postblog">
          <button className="px-6 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:font-bold">
            <span className="hidden sm:inline">Post a Blog</span>
            <span className="md:hidden">
              <AiOutlinePlusCircle />
            </span>
          </button>
        </Link>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 gap-4 mx-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {blogData.map((blog) => (
            <div key={blog.id} className='overflow-hidden bg-white rounded-lg shadow-md '>
              <img className='object-cover w-full h-52' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800'>{blog.title}</h3>
                <p className='mt-2 text-gray-600 line-clamp-3'>{blog.article}</p>
                <Link to={`/counsellor/blogs/blogview/${blog.id}`}>
                  <button className="justify-end px-6 py-2 text-blue-500 hover:text-blue-300">
                    <span className="hidden sm:inline">See more...</span>
                  </button>
                </Link>

                {/* <div className='flex items-center mt-4'>
                  <img
                    src={blog.author.imageUrl}
                    alt=""
                    className="w-8 h-8 rounded-full bg-gray-50"
                  />
                  <div className="ml-2 text-sm text-gray-700"></div>
                    <p className="font-semibold">{blog.author.name}</p>
                    <p>{blog.date}</p>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
