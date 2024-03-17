import React from "react";

function EditBox() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="relative bg-blue-100 w-[85%] p-8 rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
          Close
        </button>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4  mt-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter text..."
        />
        <textarea
          className="w-full h-40 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Enter text..."
        ></textarea>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBox;
