import React from 'react'
import Swal from 'sweetalert2'
import {motion}from 'framer-motion'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Contact.css'








function Login() {
 const navigate=useNavigate();
const initialValues = { username: "", email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  valit(formValues)


};

useEffect(() => {
  // console.log(formErrors);
  if (Object.keys(formErrors).length === 0 ) {
    // console.log(formValues), 

  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  } 
  return errors;

};

const valit =(values)=>{
  if(values.email && values.username && values.password){
    setIsSubmit(true)

       }

}



  return (
    <motion.div style={{
        height:"auto",
        width:"100vw",
    }}
        initial={{ opacity: 0, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
    
        transition={{
          transition:0,
          // duration: 0, 
          // delay: 0,
   
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
    <div style={{marginTop:"6rem",marginLeft:"35rem",position:"absolute" }} >
   
      <div className='bg-dark contact-section py-2 text-center'>
      <h1 className='py-3 text-center text-danger bg-white' style={{marginTop:"10rem",marginLeft:"-28rem",marginBottom:"2rem",fontSize:"2rem",textAlign:"center"}}>Login Here </h1>
     {/* <div className=' conatact  bg-secondary text-center pb-4 ' style={{display:"flex",flexWrap:"wrap"}}> */}


 
      <div className=' text-center'>
       <form onSubmit={handleSubmit}>
        <h2 className='text-center' style={{marginTop:" 2rem",marginBottom:"2rem",color:"#f0e"}}>Login Form</h2>
        <di v className="ui divider"></di>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input className='text-center'
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input style={{marginLeft:"2rem"}} className='text-center'
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input  className='text-center'
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.password}</p>
          <button className="fluid ui button blue text-center ml-5" style={{backgroundColor:"#9E4",padding:".5rem", borderRadius:"5px"}}>Submit</button>

        </div>

        </form>    
        {

isSubmit &&
  // console.log(formValues), 
  Swal.fire(  
    'Successfull!',
    'Thanks.',
    'success'
  )
 
  && navigate("/designpage")
 

} 
            </div>





          </div>
          </div>
          </motion.div>
  )
}

export default Login









