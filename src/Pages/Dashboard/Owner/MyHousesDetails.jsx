/* eslint-disable react/prop-types */
import  { useState } from 'react';
import swal from 'sweetalert';

const MyHouseDetails = ({ singleHouse }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(
        `https://house-hunter-server-phi.vercel.app/api/v1/owners/ownedSingleHouse/${singleHouse.id}`,
        {
          method: 'DELETE',
          // Add any necessary headers
        }
      );
      // Check the response status and handle accordingly
      if (response.ok) {
        swal('Success', 'House deleted successfully', 'success');
        // Perform any necessary cleanup or UI updates after successful deletion
      } else {
        throw new Error('Failed to delete house');
      }
    } catch (error) {
      swal('Error', 'Failed to delete house', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = async () => {
    setIsEditing(true);
    // Implement your edit logic here
    // You can make a PUT request to the edit API endpoint and handle the response accordingly
    try {
      // Make the PUT request to the edit API endpoint
      const response = await fetch(
        `https://house-hunter-server-phi.vercel.app/api/v1/owners/ownedSingleHouse/${singleHouse.id}`,
        {
          method: 'PATCH',
          // Add any necessary headers
          // Include the updated house data in the request body
          // Example: body: JSON.stringify(updatedHouseData)
        }
      );
      // Check the response status and handle accordingly
      if (response.ok) {
        swal('Success', 'House edited successfully', 'success');
        // Perform any necessary cleanup or UI updates after successful edit
      } else {
        throw new Error('Failed to edit house');
      }
    } catch (error) {
      swal('Error', 'Failed to edit house', 'error');
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <tr>
      <th></th>
      <td>
        <img className="w-24" src={singleHouse.picture} alt="" />
      </td>
      <td>{singleHouse.name}</td>
      <td>{singleHouse.label}</td>
      <td>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleEdit}
          disabled={isEditing}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyHouseDetails;
