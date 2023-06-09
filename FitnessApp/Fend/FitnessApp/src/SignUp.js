import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {TextField, Button, Container, Typography, MenuItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  input: {
    color: "black",
    "&::placeholder": {
      color: "black",
    },
    "&:focus": {
      color: "black",
      borderColor: "#050505",
    },
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSignUp = (event) => {
    event.preventDefault();
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      gender:gender,
    };

    if (!firstName || !lastName || !email || !password || !gender || !dob) {
      alert("Please enter all fields");
      return;
    }

    // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  
      fetch("https://localhost:7221/api/Users/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to sign up");
          }
          else {
            alert("User successfully created!");
        
            return response.json();
            
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          if (error.message === "Failed to sign up") {
            alert("Emailen er allerede i brug, prøv igen");
          } 
          
        })
        .finally(() => {
          navigate("/Login");
          });
  };

  return (
    <div className="gradient-background">
      <Container maxWidth="sm" style={{ backgroundColor: "white" }} >
        <Typography variant="h3" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSignUp}>
          <TextField
            label="First Name"
            variant="outlined"
            className={classes.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            className={classes.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            className={classes.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <TextField
            select
            label="Gender"
            variant="outlined"
            className={classes.input}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
          <TextField
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {/* <TextField
            label="Age"
            type="number"
            variant="outlined"
            className={classes.input}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          /> */}
          {/* <TextField
            label="Height (cm)"
            type="number"
            variant="outlined"
            className={classes.input}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <TextField
            label="Weight (kg)"
            type="number"
            variant="outlined"
            className={classes.input}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          /> */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </Container>
   
    </div>
  );
}