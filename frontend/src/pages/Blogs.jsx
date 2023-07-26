import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Blogs = () => {
  // Define a sample 'posts' array
  const posts = [
    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'Lorem Ipsum Blog',
      href: '/blog/1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'John Doe',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'Lorem Ipsum Blog',
      href: '/blog/1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'John Doe',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'Lorem Ipsum Blog',
      href: '/blog/1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'John Doe',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'Lorem Ipsum Blog',
      href: '/blog/1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'John Doe',
        href: '/author/1',
        role: 'Content Writer',
      },
    },
    // Add more posts here...
  ];

  return (
    <>
      <div className=' rounded-xl'>
        <div className='bg-white rounded-2xl'>
          <div className="py-4 rounded-t-2xl sm:py-6 bg-gradient-to-br from-blue-200 to-green-50">
            <div className="px-6 mx-auto max-w-7xl lg:px-4">
              <div className="flex flex-col items-center justify-center">
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 underline sm:text-5xl underline-offset-8">From the blog</h2>
                  <p className="mt-4 leading-8 text-gray-600 text-md">Learn how to grow your business with our expert advice.</p>
                </div>
              </div>

              <div className="flex items-center justify-center py-4 my-5 ">
                          <input
                              type="text"
                              className="p-2 mr-2 text-gray-600 bg-white rounded-full font-base border-blue max-md:py-1 focus:outline-none focus:ring focus:border-blue-300"
                              placeholder="Search..."
                              onChange={(e) => onChange(e.target.value)}
                          />
                        
                            <button className="px-4 py-2 font-semibold text-white bg-blue-900 rounded-full max-md:py-1 hover:bg-blue-500 hover:font-bold">
                              Search
                            </button> 
              </div>

                <div className="flex justify-end mr-10 ">
                  <Link to="postblog" >
                    <button className="px-8 py-3 font-bold text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:font-black">
                      <span className="hidden sm:inline">Post a Blog</span>
                      <span className="md:hidden">
                        <AiOutlinePlusCircle />
                      </span>
                    </button>
                  </Link>
              </div>
            </div>
          </div>
      
            
            <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-300 gap-x-8 gap-y-16 sm:m-8 sm:pt-8 lg:pb-16 lg:mx-6 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex flex-col items-start justify-between max-w-xl shadow-xl bg-gradient-to-br from-blue-200 to-green-50 rounded-2xl">
                  <div className='w-full pb-4'>
                    <img className='w-full h-60 rounded-t-xl' src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="blog1" />
                  </div>

                  <div className="flex items-center pl-8 text-xs gap-x-4">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full  bg-gray-50 px-3 py-1.5 font-bold text-gray-600 hover:bg-gray-100">
                      {post.category.title}
                    </a>
                    </div>
                    

                  <div className="relative group">
                    <h3 className="pl-8 mt-3 text-lg font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0 " />
                        {post.title}
                      </a>
                    </h3>
                    <p className="pl-8 mt-2 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                  </div>

                  <div className="relative flex items-center pl-8 my-6 gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="w-10 h-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-bold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          
        </div>
      </div>

      
    </>
  );
};

export default Blogs;
