import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddMusic() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    link: '',
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleAddMusic = () => {
    Swal.fire({
      title: 'Add New Music / Videos',
      html: `
        <input type="text" name="title" placeholder="Title" class="swal2-input" value="${formData.title}">
        <input type="text" name="category" placeholder="Category" class="swal2-input" value="${formData.category}">
        <input type="text" name="description" placeholder="Description" class="swal2-input" value="${formData.description}">
        <input type="text" name="link" placeholder="Link" class="swal2-input" value="${formData.link}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Add',
      customClass: {
        confirmButton: 'bg-blue-700 rounded-md border text-white hover:bg-white hover:text-black hover:border-blue-700',
      },
      preConfirm: () => {
        return {
          title: Swal.getPopup().querySelector('input[name="title"]').value,
          category: Swal.getPopup().querySelector('input[name="category"]').value,
          description: Swal.getPopup().querySelector('input[name="description"]').value,
          link: Swal.getPopup().querySelector('input[name="link"]').value,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle adding the music with the collected data
        console.log('Added music:', result.value);
      }
    });
  };

  return (
    <div>
      <div className="ml-auto">
        <div>
          <button className='bg-blue-700 mt-6 rounded-md p-2 border text-white mr-5 hover:bg-white hover:border-blue-700 hover:text-black'
            onClick={handleAddMusic}>
            ADD NEW
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMusic;
