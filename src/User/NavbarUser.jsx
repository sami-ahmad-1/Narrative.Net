// import React from "react";
// import Button from "@mui/joy/Button";
// import { auth } from "../Firebase/Firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router";


// function Navbar() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     signOut(auth)
//       .then((e) => {
//         console.log(e);
//         navigate("/");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="flex bg-red-300 text-black h-16 w-full  text-4xl justify-between ">
//       <div className="ml-5 mt-3 font-extralight font-sans text-pretty text">NarrativeNet</div>

//       <div>
//       <ul className=" flex space-x-4 mr-4">
//         <li >
//           <Button
//             color="success"
//             variant="soft"
//             onClick={() => navigate("/MyProfile")}
//           >
//             My Profile
//           </Button>
//         </li>
//         <li >
//           <Button
//             color="success"
//             variant="soft"
//             onClick={() => navigate("/blogs")}
//           >
//             Blogs
//           </Button>
//         </li>
//         <li  onClick={handleClick}>
//           <Button color="danger" variant="soft">
//             Logout
//           </Button>
//         </li>
//       </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;







import React, { useState } from "react";
import Button from "@mui/joy/Button";
import { auth } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then((e) => {
        console.log(e);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{ userSelect: "none" }}
      className="bg-red-200 text-black h-16 w-full flex justify-between items-center shadow-md"
    >
      <div className="ml-5 text-3xl" >NarrativeNet</div>
      <div className="mr-5 cursor-pointer lg:hidden" onClick={toggleMenu}>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>
      <ul className="hidden lg:flex " >
      <li className="mr-5" >
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/MyProfile")}
          >
            My Profile
          </Button>
        </li>
        <li className="mr-5" >
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/blogs")}
          >
            Blogs
          </Button>
        </li>
        <li  onClick={handleClick} className="mr-5">
          <Button color="danger" variant="soft">
            Logout
          </Button>
        </li>
      </ul>
      {menuOpen && (
        <ul className="absolute top-16 right-0 bg-white w-40 py-2 shadow-lg lg:hidden text-center">
          <li >
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/MyProfile")}
          >
            My Profile
          </Button>
        </li>
        <li >
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/blogs")}
          >
            Blogs
          </Button>
        </li>
        <li  onClick={handleClick}>
          <Button color="danger" variant="soft">
            Logout
          </Button>
        </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;


