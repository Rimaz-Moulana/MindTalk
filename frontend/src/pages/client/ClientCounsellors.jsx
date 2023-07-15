import React from 'react'
import dp1 from "../../assets/dp1.jpg"
import dp2 from '../../assets/dp2.jpg'
import dp3 from '../../assets/dp3.jpg'
import dp4 from '../../assets/dp4.jpg'
import dp5 from '../../assets/dp5.jpg'
import dp6 from '../../assets/dp6.jpg'

const counsellors = [
  {
    id: 1,
    name: 'Dr. M Perera',
    href: '#',
    price: '$60',
    imageSrc: dp1,
  },
  {
    id: 2,
    name: 'Dr. P Dissanayake',
    href: '#',
    price: '$89',
    imageSrc: dp2,
  },
  {
    id: 3,
    name: 'Dr. K Muthukuda',
    href: '#',
    price: '$50',
    imageSrc: dp3,
  },
  {
    id: 4,
    name: 'Dr. R Moulana',
    href: '#',
    price: '$65',
    imageSrc: dp4,
  },
  {
    id: 5,
    name: 'Dr. T Aluthwala',
    href: '#',
    price: '$40',
    imageSrc: dp5,
  },
  {
    id: 6,
    name: 'Dr. K Sewwandi',
    href: '#',
    price: '$50',
    imageSrc: dp6,
  },
]

function ClientCounsellors() {
  return (
    <div className="bg-white rounded-xl">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Counsellors</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {counsellors.map((counsellor) => (
            <a key={counsellor.id} href={counsellor.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={counsellor.imageSrc}
                  alt={counsellor.imageAlt}
                  className="h-50 w-50 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{counsellor.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{counsellor.price}</p>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default ClientCounsellors;
