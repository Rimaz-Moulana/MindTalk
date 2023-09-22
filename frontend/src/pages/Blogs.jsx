import React, { useState, useEffect } from 'react'; // Import React and necessary hooks

import { AiOutlinePlusCircle } from 'react-icons/ai'; // Import an icon from a library

import { Link } from 'react-router-dom'; // Import a component from React Router

import axios from 'axios'; // Import Axios for making HTTP requests

const Blogs = () => { // Define a functional component named Blogs
  const [blogData, setBlogData] = useState([]); // Create a state variable blogData and a function to update it using the useState hook

  useEffect(() => { // Use the useEffect hook to perform side effects (like data fetching) in a functional component
    const fetchBlogData = async () => { // Define an asynchronous function for fetching blog data
      try { // Try to fetch the data
        console.log("Fetching blog data..."); // Log a message to the console

        const authData = localStorage.getItem('authData'); // Get authentication data from local storage
        if (authData) { // Check if authentication data exists
          const { accessToken } = JSON.parse(authData); // Parse the authentication data to get an access token

          const config = { // Define a configuration object for Axios
            headers: { // Include headers for authorization and content type
              Authorization: `Bearer ${accessToken}`, // Authorization header with the access token
              'Content-Type': 'application/json' // Content-Type header
            },
            withCredentials: true // Include credentials in the request
          };

          const response = await axios.get(`http://localhost:8080/api/blogs/all`, config); // Make a GET request to the API endpoint

          if (Array.isArray(response.data)) { // Check if the response data is an array
            const fetchedBlog = response.data.map(blog => ({ // Map the response data to a new format
              id: blog.id,
              status:blog.status,
              title: `${blog.title}`,
              category:`${blog.category}`,
              content: `${blog.content}`
            }));
            setBlogData(fetchedBlog); // Update the blogData state with the fetched data
          } else { // Handle the case where the response data is not an array
            console.error("Response data is not an array:", response.data); // Log an error message
          }
        }
      } catch (error) { // Catch and handle any errors that occur during the data fetching process
        console.error("Error fetching blog data:", error); // Log an error message
      }
    };

    fetchBlogData(); // Call the fetchBlogData function when the component mounts
  }, []); // The empty dependency array [] ensures that this effect runs only once when the component mounts

  return ( // Return JSX for rendering the component
    <div className='w-full py-8 bg-slate-50 rounded-xl'>
      <div className='mx-10 mb-8 text-center'>
        <h2 className='text-4xl font-bold text-gray-800'>Blogs</h2>
        <p className='my-3 text-gray-600'>Empowering Minds, Elevating Spirits: Your Path to Positivity!</p>
      </div>

      <div className='flex items-center justify-between mx-10 mt-4 space-x-4 m'>
        <div className='flex items-center space-x-2'>
          <input
            type="text"
            className="p-2 text-gray-600 rounded-full bg-blue-50 font-base border-blue focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search..."
          />
          <button className="px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:font-bold">
            Search
          </button>
        </div>

        <Link to="postblog"> {/* Link to another route */}
          <button className="px-6 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:font-bold">
            <span className="hidden sm:inline">Post a Blog</span>
            <span className="md:hidden">
              <AiOutlinePlusCircle /> {/* Render an icon */}
            </span>
          </button>
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-4 mx-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogData
          .filter(blog => blog.status === 1)
          .map((blog, index) => ( // Map over the blogData array and render blog items
          <div key={blog.id} className='overflow-hidden bg-white rounded-lg shadow-md '>
            <img className='object-cover w-full h-52' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={blog.title} />
            <div className='p-4'>
              <h6 className='font-semibold text-gray-700'>{blog.category}</h6>
              <h3 className='text-xl font-semibold text-gray-800'>{blog.title}</h3>
              <p className='mt-2 text-gray-600 line-clamp-3'>{blog.content}</p>

              <Link to={`/client/blogs/blogview/${blog.id}`}> {/* Link to view a specific blog */}
                <button className="justify-end px-6 py-2 text-blue-500 hover:text-blue-300">
                  <span className="hidden sm:inline">See more...</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs; // Export the Blogs component
