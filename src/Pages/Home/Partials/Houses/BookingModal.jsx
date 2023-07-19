/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/Context/AuthContext';
import swal from 'sweetalert';
import { useLoaderData } from 'react-router-dom';

const BookingModal = () => {
    const HouseBook = useLoaderData();
  const { _id, name } = HouseBook.data;
  const { user } = useContext(AuthContext);
console.log(HouseBook)
  console.log(HouseBook);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone_number = form.phone_number.value;

    const booking = {
      house: _id,
      name: name,
      email,
      phone_number,
    };

    fetch('https://house-hunter-server-phi.vercel.app/api/v1/renters/booking-house', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
 
          swal('Booking Confirmed');
          // refetch();
        } else {
          swal(data.message);
        }
      });
  };

  return (
    <div className='pt-16 mx-16'>
      <> 
      <h3 className="text-lg font-bold">{name}</h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input w-full border border-gray-300 rounded"
              />
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                readOnly
                placeholder="Email Address"
                className="input w-full border border-gray-300 rounded"
              />
              <input
                name="house"
                type="text"
                placeholder="Booking ID"
                defaultValue={_id}
                disabled
                className="input w-full border border-gray-300 rounded"
              />
              <input
                name="phone_number"
                type="text"
                placeholder="Phone Number (Must Start with (+880))"
                className="input w-full border border-gray-300 rounded"
              />

              <br />
              <input className="btn bg-blue-500 text-white w-full rounded" type="submit" value="Submit" />
            </form>
      </>
    </div>
  );
};

export default BookingModal;
