// Inside BlogView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import axios from 'axios';

const BlogView = () => {
  const { id } = useParams(); // Get the blog ID from the URL parameter
  const [isLoading, setIsLoading] = useState(true);

  const [blogData, setBlogData] = useState({
    title: '',
    category:'',
    content: ''
  });

  // useEffect(() => {
  //   // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
  //   axios.get(`http://localhost:8080/api/blogs/view/:id`) // Use the blog ID in the URL to fetch the specific blog
  //     .then(response => {
  //       setBlogData(response.data); // Assuming the data is the blog object itself
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     });
  // }, [id]); // Include blogId in the dependency array to re-fetch when it changes

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  const fetchBlogData = async () => {
    try{
      console.log("Fetching blog data...");
      const authData = localStorage.getItem('authData');
      if (authData) {
          const { accessToken } = JSON.parse(authData);
          const config = {
              headers: {
                  Authorization: `Bearer ${accessToken}`,
                  'Content-Type': 'application/json'
              },
              withCredentials: true
          };

          const response = await axios.get(`http://localhost:8080/api/blogs/${id}`, config);

          if (response.status === 200) {
              const blogData = response.data;
              setBlogData({
                title: blogData.title,
                category: blogData.category,
                content: blogData.content
              });
              setIsLoading(false);
          }
      }
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
  }

  return (
    <div className='w-full bg-white rounded-2xl'>
    <div className="max-w-screen-lg mx-auto ">
      <main className="w-full p-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="mb-3 text-3xl font-semibold text-gray-900">{blogData.title}</h2>
            <div className="mb-4 text-sm font-bold text-gray-500">{blogData.category}</div>
            <div className="prose prose-lg text-gray-800" dangerouslySetInnerHTML={{ __html: blogData.content }} />
            {/* <div className="prose prose-lg text-gray-800">{blogData.content}</div> */}
          </div>
        )}
      </main>
      </div>
      </div>
  );
}

export default BlogView;
