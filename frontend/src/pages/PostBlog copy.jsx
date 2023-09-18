import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [article, setArticle] = useState('');
  const [coverimg, setCoverImg] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to backend)

    // Reset form fields after submission
    setTitle('');
    setCategory('');
    setArticle('');
    setCoverImg('');
  };

  return (
    <>
      <div className='p-3 bg-white rounded-2xl'>
        <div className='flex justify-center p-4 mt-1 bg-gradient-to-br'>
          <h1 className='text-2xl font-bold md:text-4xl '>Write a Blog</h1>
        </div>
        <div className="px-4 py-10 mx-8 md:mx-0 rounded-3xl sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label htmlFor="cover-image" className="block ml-10 text-lg font-medium text-gray-700">
                Cover Image
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="file"
                  name="cover-image"
                  id="cover-image"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e)}
                  className="hidden"
                />
                <label
                  htmlFor="cover-image"
                  className="block p-6 mt-4 font-medium text-gray-500 border-gray-300 rounded-md shadow-lg cursor-pointer w-96 focus:ring-blue-500 focus:border-blue-500"
                >
                  Upload Cover Image
                </label>
              </div>
            </div>



            <div>
              <label htmlFor="article" className="block ml-10 text-lg font-medium text-gray-700">
                Blog Article
              </label>
              <ReactQuill className='h-40 p-2'
                theme="snow"
                value={article}
                onChange={setArticle}
                required
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                    ['clean'],
                  ],
                }}
              />
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
    </>
  );
};

export default PostBlog;
