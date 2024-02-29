import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [])
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

function SignUpPage() {

  const navigate = useNavigate()
  const [value , setValue] = useState({
    name : '' ,
    email : '' ,
    pass : ''
  })
  // const auth = getAuth();
  const[errorMessage , setErrorMessage] = useState('')
  const[errorMessage2 , setErrorMessage2] = useState('')

  const handleSumbit = () => {
    if(!value.name || !value.email || !value.pass){
      setErrorMessage("Fill all the Fields")
      return 
    } else {console.log('Running')}

    createUserWithEmailAndPassword(auth, value.email, value.pass)
    .then((userCredential) => {
      console.log(userCredential.user)
      const user = userCredential.user
      alert("Sign Up Successful")
      setValue({    name : '' , email : '' ,  pass : ''})
       updateProfile(user , {
        displayName : value.name
      })
      console.log(auth.displayName)
      navigate('/')
    })
    .catch((error) => {
      console.log(error.code)
      setErrorMessage2(error.message.toString().slice(10,50))
      // alert("sign Up Failed")
    })
  }

  
  return (
    <main>
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
        <div className="text-4xl font-thin text-center">Sign Up</div>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input name="name" type="name"  onChange={event => setValue(prev => ({...prev , name: event.target.value}))} value={value.name} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" onChange={event => setValue(prev => ({...prev , email: event.target.value}))} value={value.email} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password"  onChange={event => setValue(prev => ({...prev , pass: event.target.value}))} value={value.pass} />
        </FormControl>
        <div className="text-red-500">{errorMessage}</div>
        <div className="text-red-500">{errorMessage2}</div>

        <Button onClick={handleSumbit} sx={{ mt: 1 }}>Sign Up</Button>
        <div className="text-center"> <Link to='/'> Move to <span className="text-blue-700">Login</span></Link></div>
      </Sheet>
    </main>
  );
}

export default SignUpPage;
