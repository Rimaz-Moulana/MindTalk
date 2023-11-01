import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CoverImageUpload from './CoverImage';



const PostBlog = () => {
  const categories = ["Relaxing", "Anxiety", "Sleeping", "Focus", "Stress Releasing"];
  const [blog, setBlog] = useState({
    title: '',
    category: '', // This should match the backend DTO
    content: '',
    coverImage: null,
  });

  const saveBlog = async (e) => {
    e.preventDefault();
    const newBlog = {
      title: blog.title,
      category: blog.category, // Ensure it matches the backend DTO
      content: blog.content,
    };

    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        };

        const response = await axios.post(
          'http://localhost:8080/api/blogs',
          newBlog,
          config
        );

        if (response.status === 202) {
          console.log('Blog post successful!');
          alert("Blog post completed");
        } else {
          console.log('Blog post successful!');
          alert("Blog post completed");
        }

        // Optionally, you can redirect to the blogs page or clear the form here
        window.location.href = '../Blogs';
        setBlog({ title: '', category: '', content: '' });
      }
    } catch (error) {
      console.error('Error saving blog: ', error);
      alert("An error occurred while saving the blog.");
    }
  };

  const [coverImage, setCoverImage] = useState(null);

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const uploadCoverImage = async (e) => {
    e.preventDefault();

    if (!coverImage) {
    // Handle error if no photo is selected
    console.error('No photo selected for upload.');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('coverImage', coverImage);

    const authData = localStorage.getItem('authData');
    if (authData) {
      const { accessToken } = JSON.parse(authData);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      };

      const response = await axios.put(
        `http://localhost:8080/api/blogs/${id}/updateCoverImage`,
        formData,
        config
      );

      if (response.status === 200) {
        toast.success('Cover image uploaded successfully!', {
          // Handle success
        });
      } else {
        toast.error('Error uploading cover image. Please try again later.', {
          // Handle other errors
        });
      }
    }
  } catch (error) {
    console.error('Error uploading cover image:', error);
    toast.error('Error uploading cover image. Please try again later.', {
      // Handle error response
    });
  }
};
    
    

  return (
    <div className='p-3 bg-white rounded-2xl'>
      <div className='flex justify-center p-4 mt-1 bg-gradient-to-br'>
        <h1 className='text-2xl font-bold md:text-4xl'>Write a Blog</h1>
      </div>
      <div className="px-4 py-10 mx-8 md:mx-0 rounded-3xl sm:p-10">
        <form onSubmit={saveBlog} className="space-y-4">
          <div>
            <label htmlFor="title" className="block ml-10 text-lg font-medium text-gray-700">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              required
              className="block w-full p-4 mt-1 border-gray-900 rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="category" className="block ml-10 text-lg font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={blog.category}
              onChange={(e) => setBlog({ ...blog, category: e.target.value })}
              required
              className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
        <label htmlFor="coverImage" className="block ml-10 text-lg font-medium text-gray-700">
            Cover Image
        </label>
        <CoverImageUpload
          handleCoverImageChange={handleCoverImageChange}
          uploadCoverImage={uploadCoverImage}
          coverImage={coverImage}
        />

    </div>


          <div>
            <label htmlFor="article" className="block ml-10 text-lg font-medium text-gray-700">
              Blog Article
            </label>
            <ReactQuill
              value={blog.content}
              onChange={(value) => setBlog({ ...blog, content: value })}
              required
            />
          </div>

          <div className='flex justify-end'>
            <button
              type="submit"
              className="w-40 px-4 py-3 mt-10 text-base font-medium text-white bg-blue-600 border border-transparent rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Post your Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
