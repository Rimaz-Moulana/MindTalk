import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [article, setArticle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('article', article);

    try {
      const authData = localStorage.getItem('authData');
      if (authData) {
        const { accessToken } = JSON.parse(authData);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for file upload
          },
          withCredentials: true,
        };

        const response = await axios.post('http://localhost:8080/api/blogs', formData, config);

        if (response.status === 202) {
          setTitle('');
          setCategory('');
          setArticle('');
          alert('Blog post successful!');
        } else {
          alert('Blog post failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='p-3 bg-white rounded-2xl'>
      <div className='flex justify-center p-4 mt-1 bg-gradient-to-br'>
        <h1 className='text-2xl font-bold md:text-4xl'>Write a Blog</h1>
      </div>
      <div className="px-4 py-10 mx-8 md:mx-0 rounded-3xl sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label htmlFor="title" className="block ml-10 text-lg font-medium text-gray-700">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="block w-full p-4 mt-1 border-gray-900 rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="category" className="block ml-10 text-lg font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
              <label htmlFor="article" className="block ml-10 text-lg font-medium text-gray-700">
                Blog Article
              </label>
              <textarea
                id="article"
                name="article"
                rows={15}
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-lg focus:ring-blue-500 focus:border-blue-500"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                required
              ></textarea>
            </div>

          <div className='flex justify-end'>
            <button
              type="submit"
              className="w-40 px-4 py-3 mt-10 text-base font-medium text-white bg-blue-600 border border-transparent rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
