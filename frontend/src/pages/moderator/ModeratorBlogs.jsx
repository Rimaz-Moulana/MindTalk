import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlinePlusCircle, AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const authData = localStorage.getItem('authData');
        if (authData) {
          const { accessToken } = JSON.parse(authData);

          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          };

          const response = await axios.get('http://localhost:8080/api/blogs/all', config);

          if (Array.isArray(response.data)) {
            const fetchedBlog = response.data.map(blog => ({
              id: blog.id,
              status: blog.status,
              title: `${blog.title}`,
              category: `${blog.category}`,
              content: `${blog.content}`,
            }));
            setBlogData(fetchedBlog);
          } else {
            console.error('Response data is not an array:', response.data);
          }
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  const acceptBlog = async (id) => {
    try {
    console.log("Fetching accept blog data...");
    const authData = localStorage.getItem('authData');
    if (authData) {
      const { accessToken } = JSON.parse(authData);

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };

      const response = await axios.put(`http://localhost:8080/api/blogs/accept/${id}`, null, config);

      setBlogData(prevBlogData => prevBlogData.filter(item => item.id !== id));
        setAcceptConfirmation(null); // Clear the confirmation state

      }
    } catch (error) {
      console.error("Error fetching accept blog:", error);
      // setLoading(false);
    }
  };

  const rejectBlog = async (id) => {
    try {
    console.log("Fetching reject blog data...");
    const authData = localStorage.getItem('authData');
    if (authData) {
      const { accessToken } = JSON.parse(authData);

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };

      const response = await axios.put(`http://localhost:8080/api/blogs/reject/${id}`, null, config);

      setBlogData(prevBlogData => prevBlogData.filter(item => item.id !== id));
        setRejectConfirmation(null); // Clear the confirmation state

      }
    } catch (error) {
      console.error("Error fetching reject blog:", error);
      // setLoading(false);
    }
  };
  
  // const acceptBlog = async (id) => {
  //   try{
  //     console.log("Fetching accept blog data...");
  //     const authData = localStorage.getItem('authData');
  //     if (authData) {
  //       const { accessToken } = JSON.parse(authData);
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json'
  //         },
  //         withCredentials: true
  //       };
  //       console.log(`accepting blog...`+id);
  //       const response = await axios.delete(`http://localhost:8080/api/testing/music/` + id, config);

  //       setMusic(prevMusic => prevMusic.filter(item => item.id !== id));
  //       setDeleteConfirmation(null); 

  //     }
  //   } catch (error) {
  //     console.error("Error fetching delete music:", error);
  //     setLoading(false);
  //   }
  // };

// const rejectBlog = async (id) => {
//   try {
//     const authData = localStorage.getItem('authData');
//     if (authData) {
//       const { accessToken } = JSON.parse(authData);

//       const config = {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       };

//       const response = await axios.put(`http://localhost:8080/api/blogs/updateStatus`, { id, status: 2 }, config);

//       if (response.status === 200) {
//         setBlogData(blogData.map(blog => blog.id === id ? { ...blog, status: 2 } : blog));
//       } else {
//         console.error('Error updating blog status:', response.status);
//       }
//     }
//   } catch (error) {
//     console.error('Error updating blog status:', error);
//   }
// };




  return (
    <div className='w-full py-8 bg-white rounded-xl'>
      {/* ... rest of your JSX ... */}
      <div className='grid grid-cols-1 gap-4 mx-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogData
          .filter(blog => blog.status === 0)
          .map((blog, index) => (
            <div key={blog.id} className='overflow-hidden bg-white rounded-lg shadow-md '>
              <img className='object-cover w-full h-52' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={blog.title} />
              <div className='p-4'>
              <h6 className='font-semibold text-gray-700'>{blog.category}</h6>
              <h3 className='text-xl font-semibold text-gray-800'>{blog.title}</h3>
              <p className='mt-2 text-gray-600 line-clamp-3'>{blog.content}</p>

              <Link to={`/counsellor/blogs/blogview/${blog.id}`}> {/* Link to view a specific blog */}
                <button className="justify-end px-6 py-2 text-blue-500 hover:text-blue-300">
                  <span className="hidden sm:inline">See more...</span>
                </button>
              </Link>
            </div>
                <div className='flex justify-end mb-4 mr-4'>
                  <button
                    className="px-4 py-2 mr-2 text-white bg-green-900 rounded-full font-md hover:bg-green-500 hover:font-lg"
                    onClick={() => acceptBlog(blog.id)}
                  >
                    <span className="hidden sm:inline">Accept</span>
                    <span className="md:hidden">
                      <AiOutlineCheckCircle />
                    </span>
                  </button>
                  <button
                    className="px-4 py-2 ml-2 text-white bg-red-900 rounded-full font-md hover:bg-red-500 hover:font-lg"
                    onClick={() => rejectBlog(blog.id)}
                  >
                    <span className="hidden sm:inline">Reject</span>
                    <span className="md:hidden">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
