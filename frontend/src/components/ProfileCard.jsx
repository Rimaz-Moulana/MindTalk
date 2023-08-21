import React from 'react'
import IconComponent from './IconComponent'
import ProfilePhoto from './ProfilePhoto'

const ProfileCard = () => {
  return (
    <>
      <div>
        <div className="mt-10">
            <ProfilePhoto />
        </div>
        
        <div className="mt-16 text-center ">
          <h3 className="ml-1 -mt-12 text-3xl font-bold leading-normal text-blueGray-700">
            Jenna Stones
          </h3>
          <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
            <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
            Los Angeles, California
          </div>
          <div className='flex items-center justify-center mt-2 max-'>
            <IconComponent />
          </div>
          <div className="mt-8 mb-2 italic fas fa-briefcase text- text-blueGray-600">
            
            Solution Manager - Creative Team Officer
          </div>
          <div className="mb-2 text-blueGray-600">
            <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
            University of Computer Science
          </div>
        </div>

        <div className="px-5 py-10 mt-10 text-center border-t border-blueGray-200">
              <div className="flex justify-center ">
                <div className="w-full ">
                  <p className="mb-4 text-lg leading-relaxed text-justify max-sm:text-base text-blueGray-700">
                    An artist of considerable range, Jenna the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. 
                  </p>
                  <a href="javascript:void(0);" className="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>
      </div>
        
    </>
  )
}

export default ProfileCard
