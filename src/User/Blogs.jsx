import React, { useState, useEffect } from "react";
import Navbar from "./NavbarUser";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { txtDb } from '../Firebase/Firebase';
import { auth } from '../Firebase/Firebase'; 
import { AiOutlineLike } from 'react-icons/ai'; 
import { AiOutlineDislike } from "react-icons/ai";
import Footer from "./Footer";

function Blogs() {
  const [blogArray, setBlogArray] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(txtDb, "Blogs"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogArray(newData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);



  const handleLike = async (postId) => {
    const user = auth.currentUser;

      const postRef = doc(txtDb, "Blogs", postId);
      const postSnapshot = await getDoc(postRef);
      const postData = postSnapshot.data();

      if (postData.likes && postData.likes.includes(user.uid)) {
        return;
      }

      await updateDoc(postRef, {
        likes: [...(postData.likes || []), user.uid],
      });

      fetchPost()

  };


  const handleDislike = async (postId) => {
    const user = auth.currentUser;
  
      const postRef = doc(txtDb, "Blogs", postId);
      const postSnapshot = await getDoc(postRef);
      const postData = postSnapshot.data();
  
      if (!postData.likes || !postData.likes.includes(user.uid)) {
        return;
      }

      const updatedLikes = postData.likes.filter(id => id !== user.uid);
      await updateDoc(postRef, { likes: updatedLikes });
  
      fetchPost()

  };
  


  
  return (
    <div style={{ userSelect: 'none' }} className=" text-black bg-blue-100 min-w-fit  ">
      <Navbar />
      <h1 className="mt-3   mb-2 text-center capitalize text-4xl">Blogs</h1>
      <hr className="w-1/5 mx-auto" />

      <div className="grid lg:grid-cols-2 lg:gap-2 justify-items-center cursor-pointer md:gap-1 md:grid-cols-1 ml-5 mr-5 lg:px-20 py-5">
        {blogArray.map((value, index) => {
          return (
            <div key={index} className="py-10  w-full bg-blue-200 rounded-md lg:px-12  mt-5 ">
              <div className="rounded overflow-hidden  justify-center">
                <img
                  className="py-5 lg:px-5  flex justify-center w-[99%] ml-auto mr-auto "
                  src={value.imgURL}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-sans text-pretty mb-2 text-4xl"><u>{value.Heading}</u></div>
                <p className="text-justify">{value.Text}</p>

                <div className="flex justify-between ">
                  <div className="mt-6 text-2xl font-thin">Author : {value.Author}</div>
                  <div className="mr-5  flex text-2xl mt-10 ">
                    <AiOutlineLike className="cursor-pointer" onClick={() => handleLike(value.id)} />
                    <AiOutlineDislike className="cursor-pointer ml-4 mr-4" onClick={() => handleDislike(value.id)} />
                    <div className="font-semibold ml-1" >Likes: {value.likes ? value.likes.length : 0}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;






























  





























