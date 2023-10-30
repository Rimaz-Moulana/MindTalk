import React from 'react';
import { FiClipboard } from 'react-icons/fi';

const FileUpload = () => {
  const pdfData = [
    {
      id: 1,
      title:'abc.pdf',
      date: '07/07/2023'
    },
    {
      id: 2,
      title:'xyz.pdf',
      date: '10/07/2023'
    },
    {
      id: 3,
      title:'msg.doc',
      date: '17/07/2023'
    },
  ];

  return (
    <div className="p-5 overflow-hidden bg-white shadow-md rounded-xl">
      <div className="pb-5 text-center">
        <span className="text-lg text-blue-900">Let us get to know about you. Upload your previous medical files if any.</span>
        <div className="flex justify-center px-6 m-2 border border-dashed rounded-lg border-gray-900/25 py-53">
          <div className="text-center">
            <FiClipboard className="w-12 h-12 mx-auto mt-2 text-gray-300" aria-hidden="true" />
            <div className="flex mt-2 text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative font-semibold text-blue-700 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-700 focus-within:ring-offset-2 hover:text-blue-900"
              >
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PDF, DOC</p>
          </div>
        </div>
      </div>

      <div className="pb-5 overflow-hidden ">
            <table className="min-w-full text-sm font-light text-black">
              <tbody>
                {
                  pdfData.map((item) => (
                    <tr
                      key={ item.id }
                      className="transition duration-300 ease-in-out border-b border-gray-200 hover:bg-neutral-100 hover:bg-neutral-300"
                    >
                      <td className="px-6 py-4 text-left whitespace-nowrap">{item.title}</td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">{item.date}</td>
                    </tr>
                  ) )
                }
              </tbody>
            </table>
          </div>
          
    </div>
  );
};

export default FileUpload;