/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery, queryCache } from '@tanstack/react-query';
import swal from 'sweetalert'; // Add this import statement

export default function BookingDetails({ singleHouse }) {
  
    const [isDeleting, setIsDeleting] = useState(false);
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
  return (
    <tr>
      <th>{}</th>
      <td>{singleHouse.house}</td>
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
}
