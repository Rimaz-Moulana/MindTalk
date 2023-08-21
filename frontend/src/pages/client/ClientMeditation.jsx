import React from 'react';

const videoLinks = [
  'https://www.youtube.com/embed/hAkgumAMOIg',
  'https://www.youtube.com/embed/another-video-link',
  // Add more video links here
];

function ClientMusic() {
  return (
    <div className='flex-flex-row'>

      <div className="flex flex-col gap-4 w-full bg-white rounded-xl mb-5">
        <h1 className='text-xl font-bold pt-5 pl-5'>Meditation / Breathing Exercises</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
          {videoLinks.map((link, index) => (
            <iframe key={index} className='w-full aspect-[3/2]' src={link} title={`video${index + 1}`} allowFullScreen> </iframe>
          ))}
        </div>
      </div>
  
    </div>
  );
}

export default ClientMusic;

