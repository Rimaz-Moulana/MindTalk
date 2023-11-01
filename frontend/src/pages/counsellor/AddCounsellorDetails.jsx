// eslint-disable-next-line no-unused-vars
import React from 'react';

// npm install axios google-spreadsheet
// npm install axios google-spreadsheet
// npm install express google-spreadsheet axios
// npm install express google-spreadsheet

const FormComponent = () => {
//   const [formData,setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email:'',
//     licenseNo:'',
//     licenseImage:'',
//   })

//   const handleChange = (e) => {
//     const { name, value} = e.target;
//     setFormData({ ...formData, [name]: value});
//   };

//   const handeleSubmit = async (e) => {
//     e.preventDefault();
//     if(formData.licenseImage)
//     formData.licenseImage = formData.licenseImage.replace('C:\\fakepath\\','');
//     console.log(formData)
//     console.log(formData.licenseImage)
//     try{
//         // await axios.post('/api/submit-data', formData);
//         // alert('Data posted successfully!');

//     }catch(error){
//         console.log('Error posting data: ', error);
//     }

//   }
  return (
    <>
        <section className="h-screen">
          <div className="h-full">
            {/* <!-- Left column container with background--> */}
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="/src/assets/counsellorAddDetails.svg"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
    
              {/* <!-- Right column container --> */}
              <div className="mb-12 p-14 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 flex flex-col">
              <h1 className='text-2xl font-bold mb-4'>Click to add your details</h1>
              <div>
                <a href='https://forms.gle/KVieNMVcP2YcTAPr7' className='text-bold no-underline hover:underline border-l-blue-500 text-blue-500 px-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded'>Add your details</a>
              </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}


export default FormComponent;