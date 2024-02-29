import React, { useEffect, useState } from 'react';
import Navbar from './CNavbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from '../Firebase/Firebase'
import { imgDb, txtDb } from '../Firebase/Firebase';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CWrite() {
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const [collectionEmail , setCollectionEmail] = useState('')

  useEffect(() => {
    const authInstance = getAuth(); 

    onAuthStateChanged(authInstance, (user) => {
      if (user !== null) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          setAuthor(profile.displayName);
          setCollectionEmail(profile.email);
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
    const valRef = collection(txtDb, collectionEmail)
    await addDoc(valRef, { Heading: heading, Text: text, Author: author, imgURL: image, Likes: 0})
    alert("Data Added Successfully")
    setHeading('');
    setText('');
    setImage(null);
  }

  return (
    <div className='w-full' style={{ userSelect: "none" }} >
      <Navbar />
      <ToastContainer />
      <div className="w-[80%] bg-slate-100 ml-auto mr-auto h-[90%] text-black">
        <p className="text-3xl text-center">What's on your mind?</p>
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
        <div className="text-center">
          <button className="bg-slate-600 mr-4 w-40 h-8 mb-6 mt-6 text-2xl rounded-md" onClick={handleClick}>Post</button>
          <button className="bg-slate-600 ml-4 w-40 h-8 mb-6 mt-6 text-2xl rounded-md" onClick={() => setText('')}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default CWrite;









