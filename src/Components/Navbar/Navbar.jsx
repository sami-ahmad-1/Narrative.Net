import React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

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

  function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return <Button variant="soft">Change mode</Button>;
    }

    return (
      <Button
        variant="soft"
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
      >
        {mode === "light" ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </Button>
    );
  }

  return (
    <div className="flex bg-white text-black h-16 w-full  text-4xl justify-between ">
      <div className="ml-5 mt-3 font-extralight font-sans text-pretty text">NarrativeNet</div>

      <ul className="mr-5 ml-5 flex">
        <li className="mr-5">
          <ModeToggle />
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
