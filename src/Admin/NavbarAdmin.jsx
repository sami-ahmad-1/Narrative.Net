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
//     <div style={{userSelect:'none'}} className="flex bg-red-200 text-black h-16 w-full  text-4xl justify-between shadow-md ">
//       <div className="ml-5 mt-3">NarrativeNet</div>
//       <ul className="mr-5 ml-5 flex">
//         <li className="mr-5">
//           <Button
//             color="success"
//             variant="soft"
//             onClick={() => navigate("/Profile")}
//           >
//             My Profile
//           </Button>
//         </li>
//         <li className="mr-5">
//           <Button
//             color="success"
//             variant="soft"
//             onClick={() => navigate("/WritingArea")}
//           >
//             Write
//           </Button>
//         </li>
//         <li className="mr-5">
//           <Button
//             color="success"
//             variant="soft"
//             onClick={() => navigate("/cmyblogs")}
//           >
//             My Blogs
//           </Button>
//         </li>
//         <li className="mr-5" onClick={handleClick}>
//           <Button color="danger" variant="soft">
//             Logout
//           </Button>
//         </li>
//       </ul>
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
      .then(() => {
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
      <ul className="hidden lg:flex">
        <li className="mr-5">
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/Profile")}
          >
            My Profile
          </Button>
        </li>
        <li className="mr-5">
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/WritingArea")}
          >
            Write
          </Button>
        </li>
        <li className="mr-5">
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/cmyblogs")}
          >
            My Blogs
          </Button>
        </li>
        <li className="mr-5" onClick={handleClick}>
          <Button color="danger" variant="soft">
            Logout
          </Button>
        </li>
      </ul>
      {menuOpen && (
        <ul className="absolute top-16 right-0 bg-white w-40 py-2 shadow-lg lg:hidden">
          <li className="text-center">
            <Button
              color="success"
              variant="soft"
              onClick={() => {
                navigate("/Profile");
                toggleMenu();
              }}
            >
              My Profile
            </Button>
          </li>
          <li className="text-center">
            <Button
              color="success"
              variant="soft"
              onClick={() => {
                navigate("/WritingArea");
                toggleMenu();
              }}
            >
              Write
            </Button>
          </li>
          <li className="text-center">
            <Button
              color="success"
              variant="soft"
              onClick={() => {
                navigate("/cmyblogs");
                toggleMenu();
              }}
            >
              My Blogs
            </Button>
          </li>
          <li className="text-center" onClick={handleClick}>
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

