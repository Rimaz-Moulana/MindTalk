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
      title: 'The Impact of Physical Activity on Depression: How Exercise Can Be a Natural Antidepressant',
      href: '/blog/1',
      description: 'This blog post could explore the correlation between regular physical activity and reduced symptoms of depression. It could cover various exercises and their benefits, as well as provide practical tips on how to incorporate exercise into daily routines. The post can reference studies and expert opinions to support the information.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Pathum Lakshan',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'Mindfulness and Depression: The Role of Meditation in Mental Health',
      href: '/blog/1',
      description: 'This blog post could delve into the benefits of mindfulness and meditation in managing depression. It could explain different mindfulness techniques, how to practice them, and their impact on mental health. Real-life experiences and scientific studies could be used to emphasize the effectiveness of mindfulness in reducing depression.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/5184327/pexels-photo-5184327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Michelle Nikeetha',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'The Connection Between Diet and Depression: Foods That Fight Depression',
      href: '/blog/1',
      description: 'This post could highlight how diet can influence mental health, especially depression. It could provide a list of foods known for their mood-boosting properties and explain how they work. The post could also include tips on how to incorporate these foods into one\'s diet',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Kanishka Sewwandi',
        href: '/author/1',
        role: 'Content Writer',
      },
    },

    {
      id: 1,
      datetime: '2023-07-22',
      date: 'July 22, 2023',
      category: { href: '/category/1', title: 'Business' },
      title: 'Depression and Social Support: The Importance of Connection in Mental Health',
      href: '/blog/1',
      description: 'This blog post could discuss the importance of social support in managing depression. It could offer tips on how to seek support, ways to connect with others, and how to communicate one \'s feelings effectively. Personal stories and expert advice could be used to illustrate the importance of social support.',
      author: {
        imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Rimaz Moulana',
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
          <div className="py-4 rounded-t-2xl sm:py-6 ">
            <div className="px-6 mx-auto max-w-7xl lg:px-4">
              <div className="flex flex-col items-center justify-center">
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 underline sm:text-5xl underline-offset-8">Blogs</h2>
                  <p className="mt-4 leading-8 text-gray-600 text-md"> Empowering Minds, Elevating Spirits: Your Path to Positivity! </p>
                </div>
              </div>

              <div className="flex items-center justify-center py-4 my-5 ">

                <select className='p-2 mr-20 text-gray-600 rounded-xl bg-blue-50 font-base border-blue max-md:py-1 focus:outline-none focus:ring focus:border-blue-300'>
                  <option value="option0" disabled selected>Select Category</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                </select>
                
                <input
                    type="text"
                    className="p-2 mr-2 text-gray-600 rounded-full bg-blue-50 font-base border-blue max-md:py-1 focus:outline-none focus:ring focus:border-blue-300"
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
                <article key={post.id} className="flex flex-col items-start justify-between max-w-xl shadow-2xl bg-gradient-to-br from-blue-200 to-green-50 rounded-2xl">
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

                </article>
              ))}
            </div>
          
        </div>
      </div>

      
    </>
  );
};

export default Blogs;
