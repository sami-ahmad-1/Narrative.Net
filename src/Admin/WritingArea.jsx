import React, { useEffect, useState } from 'react';
import Navbar from './NavbarAdmin';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { imgDb, txtDb } from '../Firebase/Firebase';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection  } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

function CWrite() {
  const notify = () => toast("Wow so easy!");

  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('')

  useEffect(() => {
    const authInstance = getAuth(); 

    onAuthStateChanged(authInstance, (user) => {
      if (user !== null) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          setAuthor(profile.displayName);
          setEmail(profile.email)
          console.log("  Photo URL: " + profile.photoURL);
        });
      } else {
        console.log("No user signed in.");
      }
    });
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(imgDb, `imgs/${v4()}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        setImage(url);
        toast.success("Image Uploaded Successfully");
      });
    }).catch(error => {
      console.error('Error uploading image: ', error);
      toast.error("Error Uploading Image");
    });
  }

  const handleClick = async () => {
    if(heading=='' || text==''){
      alert("Enter Somthing")
    }else{ 
    const valRef = collection(txtDb, 'Blogs')
    await addDoc(valRef, {Email:email, Heading: heading, Text: text, Author: author, imgURL: image, Likes: 0  })
    console.log("Text Db is Right Here:",txtDb)
    // alert("Blog Added Successfully")
    toast("Blog Added Successfully!")
    setHeading('');
    setText('');
    setImage(null);
    }
  }

  return (
    <div className='min-w-fit  bg-blue-100' style={{ userSelect: "none" }}  >
      <Navbar />
      {/* <ToastContainer /> */}
      <div className=" bg-blue-200 ml-auto mr-auto h-[90%] text-black lg:w-[80%] sm:w-full mt-10 rounded-lg ">
        <p className="text-3xl text-center py-5">What's in your mind?</p>
        <p className="ml-6 text-2xl mb-1">Heading</p>
        <input
          type="text"
          className="w-[90%] mb-10 h-10 ml-6"
          placeholder="Type something..."
          value={heading}
          onChange={(e) => setHeading(e.target.value)} 
        /> 
        <div className="ml-6 text-2xl mb-1">Author Name</div>  
        <input
          type="text"
          className="w-[90%] mb-10 h-10 ml-6"
          placeholder="Type something..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <p className="ml-6 text-2xl mb-1">Blog</p>
        <textarea
          placeholder="Type something..."
          className="h-96 ml-6 w-[90%] text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="ml-6 text-2xl">Upload Image</p>
        <div className='flex justify-between mr-[8%]'>
          <input
            type="file"
            onChange={(e) => handleUpload(e)}
            className="flex bg-slate-100 ml-6 justify-center"
          />
        </div>
         <div className=' justify-between mt-7 ml-7 w-[50%] shadow-xl'>
         <img src= {image} alt="" />
         </div>
        <div className="text-center py-5">
          <button className=" text-2xl px-4 py-2 mr-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600  "  onClick={handleClick}>Post</button>
          <button className="  text-2xl  px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600  " onClick={() => setText('')}>Reset</button>
        </div>
        <ToastContainer 
         position="top-center"
         />
      </div>
    </div>
  );
}

export default CWrite;







 

