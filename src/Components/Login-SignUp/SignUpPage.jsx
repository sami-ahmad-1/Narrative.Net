import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { txtDb } from "../../Firebase/Firebase";

function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userType, setUserType] = React.useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const handleSumbit = async () => {
    if (!name || !email || !pass || !userType) {
      setErrorMessage("Fill all the Fields");
      return;
    } else { console.log("Running") }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,pass)
        .then((userCredential) => {
          // console.log(userCredential.user);
          const user = userCredential.user;
          // alert("Sign Up Successful");
          setName("");
          setEmail("");
          setPass("");
          updateProfile(user, {
            displayName: name,
          });
          navigate("/");
        })        
        .then(async () => {
          try {
            const docRef = await addDoc(collection(txtDb, userType), {
              name: name,
              email: email,
              userType: userType,
            });
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
    } catch (error) {
      console.log(error.code);
      setErrorMessage2(error.message);
    }
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

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
        <div className="text-4xl font-thin text-center">Sign Up</div>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </FormControl>

        <FormControl component="fieldset" className="font-semibold">
          <p className="font-bold">User Type</p>
          <ul>
            <input
              type="radio"
              name="unique"
              value="user"
              onClick={handleUserTypeChange}
            />
            User
            <input
              className="ml-5"
              type="radio"
              name="unique"
              value="Admin"
              onClick={handleUserTypeChange}
            />
            Admin
          </ul>
        </FormControl>

        <div className="text-red-500">{errorMessage}</div>
        <div className="text-red-500">{errorMessage2}</div>

        <Button onClick={handleSumbit} sx={{ mt: 1 }}>
          Sign Up
        </Button>
        <div className="text-center">
          {" "}
          <Link to="/">
            {" "}
            Move to <span className="text-blue-700">Login</span>
          </Link>
        </div>
      </Sheet>
    </main>
  );
}

export default SignUpPage;
