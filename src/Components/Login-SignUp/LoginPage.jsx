import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";


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
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  // console.log( email , pass)
  const [notValidUser , setNotValidUser] = React.useState('')

  // const [admin , setAdmin]  = React.useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(async (userCredential) => {
        const user = userCredential.user;
        navigate("/blogs")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setNotValidUser('Incorrect Email or Password')
      });
  };


  return (
    <main >
      <ModeToggle />
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div className="text-4xl font-thin text-center">LOGIN</div>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>

        {/* <FormControl className='bg-red-400 text-2xl border-2 border-r-8 '>    

           <select 
              onChange={event => setAdmin(event.target.value)}
            >
             <option value="false">User</option>
             <option value="true" >Admin</option>
           </select>

        </FormControl> */}

        {notValidUser}
        <Button sx={{ mt: 1 }} onClick={handleClick}>
          Log in
        </Button>

        <div className="text-center">
          {" "}
          <Link to="/signup"> Don't have an account? <span className="text-blue-700">Sign up</span></Link>
        </div>
      </Sheet>
    </main>
  );
}

export default LoginPage;














