import React, { useEffect, useState } from 'react'
import Navbar from './CNavbar'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();



function CHome() {

  const [userData , setUserData] = useState('')
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user)
      } else {
        console.log("User Not Logged In")
      }
    })
  } ,[])


  console.log(userData)
  return (
    <div style={{userSelect:'none'}} className='text-center text-3xl'>
        <Navbar/>
        <div>
          <ul>
            <li>Name : {userData.displayName} </li>
            <li>Email : {userData.email}</li>
          </ul>
        </div>
    </div>
  )
}

export default CHome
          
           
           