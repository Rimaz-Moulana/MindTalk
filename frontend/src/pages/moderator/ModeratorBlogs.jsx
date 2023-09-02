import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Blogs = () => {
  // Define a sample 'posts' array
  const posts = [
    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'The Impact of Physical Activity on Depression: How Exercise Can Be a Natural Antidepressant',
      href: '/blog/1',
      description: 'This blog post could explore the correlation between regular physical activity and reduced symptoms of depression. It could cover various exercises and their benefits, as well as provide practical tips on how to incorporate exercise into daily routines. The post can reference studies and expert opinions to support the information.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Pathum Lakshan ',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 2,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Technology' },
      title: 'Mindfulness and Depression: The Role of Meditation in Mental Health',
      href: '/blog/1',
      description: 'This blog post could delve into the benefits of mindfulness and meditation in managing depression. It could explain different mindfulness techniques, how to practice them, and their impact on mental health. Real-life experiences and scientific studies could be used to emphasize the effectiveness of mindfulness in reducing depression.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/5184327/pexels-photo-5184327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Michelle Nikeetha',
        href: '/author/1',
        role: 'Content Writer',
      },
    }

   
  ];

  return (
    <>
      <div className=' rounded-xl'>
        <div className='bg-white rounded-2xl'>
           <div className="py-1 rounded-t-2xl ">
            
          </div> 
      
            
            <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-1 border-t gap-x-8 sm:m-8 sm:pt-8 lg:pb-16 lg:mx-6 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex flex-col justify-between max-w-xl shadow-2xl bg-gradient-to-br from-blue-200 to-green-50 rounded-2xl">
                  <div className='w-full pb-4'>
                    <img className='w-full h-60 rounded-t-xl' src='https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="blog1" />
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

                <div className='flex justify-end mb-4 mr-4'>
                    <button className="px-4 py-2 mr-2 text-white bg-green-900 rounded-full font-md hover:bg-green-500 hover:font-lg">
                    <span className="hidden sm:inline">Accept</span>
                    <span className="md:hidden">
                        <AiOutlineCheckCircle />
                    </span>
                    </button>
                    <button className="px-4 py-2 ml-2 text-white bg-red-900 rounded-full font-md hover:bg-red-500 hover:font-lg">
                    <span className="hidden sm:inline">Reject</span>
                    <span className="md:hidden">
                        <AiOutlineCloseCircle />
                    </span>
                    </button>
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
