import React from 'react';
import AddMusic from '../../components/moderator/AddMusic';

const videoLinks = [
  'https://www.youtube.com/embed/pd8CycEyD1Q',
  'https://www.youtube.com/embed/pd8CycEyD1Q',
  // Add more video links here
];

function ModeratorMusic() {
  return (
    <div className='flex-flex-row'>

      <div className="flex flex-col gap-4 w-full bg-white rounded-xl mb-5">
        <div className='pl-5'>
          <AddMusic />
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-8 p-5 pt-0'>
          {videoLinks.map((link, index) => (
            <iframe key={index} className='w-full aspect-[3/2]' src={link} title={`video${index + 1}`} allowFullScreen> </iframe>
          ))}
        </div>
      </div>
  
    </div>
  );
}

export default ModeratorMusic;
