/* eslint-disable react/prop-types */

import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

export default function HouseCard({ singleHouse }) {
  const { name, picture, _id, city, bedrooms, rent_per_month, address, description } = singleHouse;
  return (
    <PhotoProvider>
      <div>
        <div className="flex h-full text-black flex-col border rounded-xl shadow-xl bg-slate-200">
          <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
            <PhotoView src={picture}>
              <img alt="" className="object-cover w-full h-52 rounded-xl" src={picture} />
            </PhotoView>
          </a>
          <div className="flex flex-col flex-1 p-6">
            <a href={`/houses/${_id}`} aria-label="Te nulla oportere reprimique his dolorum"></a>
            <a href={`/houses/${_id}`} className="text-2xl font-bold tracking-wider uppercase hover:underline">
              {name?.length > 11 ? name.slice(0, 11) + '...' : name}
            </a>
            <p>
              <span className="font-semibold">Room Rent: </span>
              {rent_per_month}/month
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              {address}, {city}
            </p>
            <p>
              <span className="font-semibold">Bed Rooms:</span> {bedrooms}
            </p>
            <h3 className="flex-1 py-2 text-md leading-snug">
              <span className="font-semibold">Details:</span>{' '}
              {description?.length > 100 ? description.slice(0, 100) + '...' : description}
            </h3>
            <div className="grid justify-center">
             <Link to={`/houses/${_id}`}>
             <button
                htmlFor="booking-modal"
                className="btn bg-primary text-white py-2 px-4 rounded-lg"
              >
                Book Now
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
}
