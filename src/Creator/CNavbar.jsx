import React from "react";
import Button from "@mui/joy/Button";
import { auth } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then((e) => {
        console.log(e);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex bg-white text-black h-16 w-full  text-4xl justify-between ">
      <div className="ml-5 mt-3">NarrativeNet</div>
      <ul className="mr-5 ml-5 flex">
        <li className="mr-5">
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/blogs")}
          >
            Blogs
          </Button>
        </li>
        <li className="mr-5">
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/chome")}
          >
            My Profile
          </Button>
        </li>
        <li className="mr-5">
          <Button
            color="success"
            variant="soft"
            onClick={() => navigate("/cwrite")}
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
    </div>
  );
}

export default Navbar;


