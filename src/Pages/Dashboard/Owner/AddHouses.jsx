import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Components/Context/AuthContext';
import { decodeToken } from '../../../hooks/decodeToken';

const AddHouses = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const token = user?.data?.accessToken;
  const decodedToken = decodeToken(token);
  console.log(decodedToken)
  const email = decodedToken?.payload?.userEmail;
  console.log(email)
  const imagekey = '8cafa7700ddb609a54ab949219ac23a5';

  const handleAddProdut = (data) => {
    console.log(data);
    const img = data.picture[0];
    console.log(img);
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=${imagekey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imageData => {
      if (imageData.success) {
        console.log(imageData.data.url);
        const newProdutct = {
            email: email,
          name: data.name,
          address: data.address,
          city: data.city,
          picture: imageData.data.url,
          bedrooms: Number(data.bedrooms),
          bathrooms: Number(data.bathrooms),
          room_size: Number(data.room_size),
          availability_date: data.availability_date,
          rent_per_month: Number(data.rent_per_month),
          phone_number: data.phone_number,
          description: data.description
        };

        fetch('https://house-hunter-server-phi.vercel.app/api/v1/owners/ownedHouses', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('user')}`
          },
          body: JSON.stringify(newProdutct)
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          if (result.acknowledged) {
            swal('House added');
            navigate('/');
          }
        });
      }
    });
  };

  return (
    <div className="m-10">
      <div className="h-1/2 flex justify-center items-center ">
        <div className="w-2/3 lg:w-1/2 p-7 rounded-lg border bg-[#6366f1]">
          <h2 className="text-xl text-center">Add House</h2>
          <form onSubmit={handleSubmit(handleAddProdut)} >
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register('name', {
                  required: 'Name is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="picture" className="label">
                <span className="label-text">Picture</span>
              </label>
              <input
                type="file"
                {...register('picture', {
                  required: 'Picture is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.picture && <p className="text-red-500">{errors.picture.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="bedrooms" className="label">
                <span className="label-text">Bedrooms</span>
              </label>
              <input
                type="number"
                {...register('bedrooms', {
                  required: 'Bedrooms is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.bedrooms && <p className="text-red-500">{errors.bedrooms.message}</p>}
            </div>
            

            <div className="form-control">
              <label htmlFor="phone_number" className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                {...register('phone_number', {
                  required: 'Phone Number is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.phone_number && <p className="text-red-500">{errors.phone_number.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="bathrooms" className="label">
                <span className="label-text">Bathrooms</span>
              </label>
              <input
                type="number"
                {...register('bathrooms', {
                  required: 'Bathrooms is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.bathrooms && <p className="text-red-500">{errors.bathrooms.message}</p>}
            </div>

            
            <div className="form-control">
              <label htmlFor="address" className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register('address', {
                  required: 'address is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="city" className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                {...register('city', {
                  required: 'city is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.city && <p className="text-red-500">{errors.city.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="room_size" className="label">
                <span className="label-text">Room Size</span>
              </label>
              <input
                type="number"
                {...register('room_size', {
                  required: 'Room Size is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.room_size && <p className="text-red-500">{errors.room_size.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="availability_date" className="label">
                <span className="label-text">Availability Date</span>
              </label>
              <input
                type="text"
                {...register('availability_date', {
                  required: 'Availability Date is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.availability_date && <p className="text-red-500">{errors.availability_date.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="rent_per_month" className="label">
                <span className="label-text">Rent Per Month</span>
              </label>
              <input
                type="number"
                {...register('rent_per_month', {
                  required: 'Rent Per Month is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.rent_per_month && <p className="text-red-500">{errors.rent_per_month.message}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="description" className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                {...register('description', {
                  required: 'Description is Required'
                })}
                className="input input-bordered w-full"
              />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>

            <input className="btn btn-accent w-full mt-4" value="Add House" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHouses;
