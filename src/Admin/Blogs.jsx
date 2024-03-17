import React, { useEffect, useState } from 'react';
import Navbar from "./NavbarAdmin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { txtDb } from '../Firebase/Firebase';

const auth = getAuth()

function EditBox({ onClose, data, setData }) {
  const [editedHeading, setEditedHeading] = useState(data.Heading);
  const [editedText, setEditedText] = useState(data.Text);
  const [refresh2 , setRefresh2] = useState(1)

  function Refresh(){
    setRefresh2(e => e+1)
  }
  const handleSave = async () => {
    await updateDoc(doc(txtDb, "Blogs", data.id), {
      Heading: editedHeading,
      Text: editedText
    })
    setData((prevData) => ({
      ...prevData,
      Heading: editedHeading,
      Text: editedText
    }))
    onClose();
    Refresh()

  }

  return (
    <div className="fixed top-0 left-0 w-full  h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-blue-100 w-[85%] p-8 rounded-lg shadow-lg">
        <button      
          className=' float-end right-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600'
          onClick={onClose}
        >
          Close
        </button>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 mt-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter heading..."
          value={editedHeading}
          onChange={ e => setEditedHeading(e.target.value)}
        />
        <textarea
          className="w-full h-40 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Enter text..."
          value={editedText}
          onChange={ e => setEditedText(e.target.value)}
        ></textarea>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

function CMyBlogs() {
  const [logedInUserEmail, setLogedInUserEmail] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [Refresh, setRefresh] = useState(1);
  const [showEditBox, setShowEditBox] = useState(false);
  const [editData, setEditData] = useState(null);

  const userDetails = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogedInUserEmail(user.email);
      } else {
        console.log("User Not Logged In");
      }
    });
  };

  const fetchData = async () => {
    const q = query(collection(txtDb, "Blogs"), where("Email", "==", logedInUserEmail));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setDataArray(data);
  };

  useEffect(() => {
    userDetails();
    fetchData();
  });

  const handleDelete = async (id) => {
    await deleteDoc(doc(txtDb, "Blogs", id));
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className='text-black bg-blue-200 h-full min-w-fit  '>
      <Navbar />
      <hr />
      {showEditBox && (
        <EditBox
          onClose={() => setShowEditBox(false)}
          data={editData}
          setData={setEditData}
        />
      )} 
      <div style={{ userSelect: "none" }} className="ml-[10%] mr-[10%] mt-10 text-justify bg-blue-100 rounded-md min-w-fit  ">
        <div className="w-full h-4/12  text-2xl  ">
          <div className="grid lg:grid-cols-2 lg:gap-2 justify-items-center cursor-pointer md:gap-1 md:grid-cols-1 ml-5 mr-5 ">
            {dataArray.map((value) => (
              <div key={value.id} className="py-5 mt-5  w-full bg-blue-200 mb-5 rounded-md  ">
                <div className="rounded overflow-hidden  justify-center">
                  <img
                    className="py-5 px-5  flex justify-center rounded-md w-[95%] ml-auto mr-auto"
                    src={value.imgURL}
                    alt="Blog"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className=" text-3xl mb-2 text-justify"><u>{value.Heading}</u></div>
                  <p className="text-justify">{value.Text}</p>

                  <div className="flex justify-between">
                    <div className="mt-6 text-2xl font-thin">Author : {value.Author}</div>
                  </div>

                  <div className="mt-5 flex ">
                    <div>
                      <button                      
                        className='px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600'
                        
                        onClick={() => handleDelete(value.id)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="px-8">
                      <button
                        className='px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
                        
                        onClick={() => {
                          setEditData(value);
                          setShowEditBox(true);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMyBlogs;








