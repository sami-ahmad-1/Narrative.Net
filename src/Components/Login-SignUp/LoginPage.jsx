import * as React from "react";
import { useState , useEffect } from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { txtDb } from '../../Firebase/Firebase'
import { collection, getDocs } from "firebase/firestore";


function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [notValidUser, setNotValidUser] = React.useState("");
  const [todos, setTodos] = useState([]);
  const [userTypeCheck , setuserTypeCheck] = useState();
  const [userAdmin , setUserAdmin] = useState(false)
 
  const navigate = useNavigate();


  const handleClick = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // console.log("The User Details is ", user)
        userAdmin?  navigate("/WritingArea"): navigate("/blogs")
        // navigate("/blogs")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setNotValidUser("Incorrect Email or Password");
      });
  };

  const fetchPost = async () => {
    await getDocs(collection(txtDb,'Admin'))
      .then((querySnapshot) => {               
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
        setTodos(newData);                
        // console.log("Todos", todos);
        // console.log("New Data",newData)
        setuserTypeCheck(newData)              
      })
      .catch((e) => console.log("Error Occured Named",e))
  }
  useEffect(() => {
    fetchPost();      
  }, [])

  const checkuserType = async () => {
    const checkUsername = obj => obj.email === email;
    // console.log(todos.some(checkUsername))
    setUserAdmin(todos.some(checkUsername))
  }
  useEffect(() => {
    checkuserType()
  },[email])

  // console.log("Todos is " , todos)
  // console.log("User Admin or not" , userAdmin )
  return (
    <main >      
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

        {notValidUser}
        <Button sx={{ mt: 1 }} onClick={handleClick}>
          Log in
        </Button>

        <div className="text-center">
          {" "}
          <Link to="/signup">
            {" "}
            Don't have an account?{" "}
            <span className="text-blue-700">Sign up</span>
          </Link>
        </div>
      </Sheet>
    </main>
  );
}

export default LoginPage;
