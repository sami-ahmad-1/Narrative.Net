import React, { useEffect, useState } from 'react'
import Navbar from './NavbarUser'
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
  console.log(userData)
  return (
    <div style={{userSelect:'none'}} className='text-center text-3xl bg-blue-200 text-black h-screen min-w-fit min-h-fit'>
        <Navbar/>
        <div >
          <ul>
            <li><b>Name :</b> {userData.displayName} </li>
            <li><b>Email :</b> {userData.email}</li>
          </ul>
        </div>
    </div>
  )
}

export default CHome
          