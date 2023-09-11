// Inside BlogView.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import axios from 'axios';

const BlogView = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL parameter
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
    axios.get(`http://localhost:8080/api/blogs/view/${blogId}`) // Use the blog ID in the URL to fetch the specific blog
      .then(response => {
        setBlogData(response.data); // Assuming the data is the blog object itself
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [blogId]); // Include blogId in the dependency array to re-fetch when it changes

  return (
    <div className="max-w-screen-lg mx-auto">
      <main className="mx-16">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="relative w-full mx-auto">
              <div className="px-4 lg:px-0">
                <h2 className="pt-10 text-4xl font-semibold leading-tight text-gray-800">
                  {blogData.title}
                </h2>
                {/* Render other blog details here */}
              </div>
              <div className="w-full px-4 mt-12 text-lg leading-relaxed text-gray-700 lg:px-0 lg:w-3/4">
                <p className="pb-6">{blogData.article}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default BlogView;
