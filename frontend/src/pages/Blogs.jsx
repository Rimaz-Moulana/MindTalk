import React, { useState, useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with "All" to show all blogs initially

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        console.log("Fetching blog data...");

        const authData = localStorage.getItem('authData');
        if (authData) {
          const { accessToken } = JSON.parse(authData);

          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            withCredentials: true
          };

          const response = await axios.get(`http://localhost:8080/api/blogs/all`, config);

          if (Array.isArray(response.data)) {
            const fetchedBlog = response.data.map(blog => ({
              id: blog.id,
              status: blog.status,
              title: `${blog.title}`,
              category: `${blog.category}`,
              content: `${blog.content}`
            }));
            setBlogData(fetchedBlog);
          } else {
            console.error("Response data is not an array:", response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);


  

  return (
    <div className='w-full py-8 bg-slate-50 rounded-xl'>
      <div className='mx-10 mb-8 text-center'>
        <h2 className='text-4xl font-bold text-gray-800'>Blogs</h2>
        <p className='my-3 text-gray-600'>Empowering Minds, Elevating Spirits: Your Path to Positivity!</p>
      </div>

      <div className='flex items-center justify-between mx-10 mt-4 space-x-4 m'>
        <div className='flex items-center space-x-2'>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 text-gray-600 rounded-xl bg-blue-50 font-base border-blue focus:outline-none focus:border-blue-300"
          >
            <option value="All">All Categories</option>
            <option value="Relaxing">Relaxing</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Sleeping">Sleeping</option>
            <option value="Focus">Focus</option>
            <option value="Stress Releasing">Stress Releasing</option>
          </select>
          
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

      <div className='grid grid-cols-1 gap-4 mx-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[560px] overflow-y-auto'>
          {blogData
            .filter(blog => blog.status === 1)
            .filter(blog => selectedCategory === "All" || blog.category === selectedCategory)
            .map((blog, index) => (
              <div key={blog.id} className='overflow-hidden bg-white rounded-lg shadow-md'>
                <img className='object-cover w-full h-52' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={blog.title} />
                <div className='p-4'>
                  <h6 className='font-semibold text-gray-700'>{blog.category}</h6>
                  <h3 className='text-xl font-semibold text-gray-800'>{blog.title}</h3>
                  <p className='mt-2 text-gray-600 line-clamp-3' dangerouslySetInnerHTML={{ __html: blog.content }} />

                  <Link to={`/client/blogs/blogview/${blog.id}`}>
                    <button className="justify-end px-6 py-2 text-blue-500 hover:text-blue-300">
                      <span className="hidden sm:inline">Read...</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>



    </div>
  );
};

export default Blogs;
