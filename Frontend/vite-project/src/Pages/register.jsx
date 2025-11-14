// import React, { useState } from 'react'
// import './register.css'
// import { register } from '../Pages/register'
// import { toast } from 'react-toastify'
// // import { Link, useNavigate } from 'react-router-dom'

// function Register() {
//   // define state members for getting user inputs
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

//   // get navigate function reference
//   const navigate = useNavigate()

//   const onRegister = async () => {
//     if (firstName.length == 0) {
//       toast.warning('please enter first name')
//     } else if (lastName.length == 0) {
//       toast.warning('please enter last name')
//     } else if (email.length == 0) {
//       toast.warning('please enter email')
//     } else if (phone.length == 0) {
//       toast.warning('please enter phone number')
//     } else if (password.length == 0) {
//       toast.warning('please enter password')
//     } else if (confirmPassword.length == 0) {
//       toast.warning('please confirm password')
//     } else if (password != confirmPassword) {
//       toast.warning('password does not match')
//     } else {
//       const response = await register(
//         firstName,
//         lastName,
//         email,
//         password,
//         phone
//       )
//       if (response['status'] === 'success') {
//         toast.success('Successfully registered user')

//         // go to the Login page
//         navigate('/')
//       } else {
//         toast.error(response['error'])
//       }
//     }
//   }

//   return (
//     <div className='container'>
//       <h2 className='page-header'>Register</h2>
//       <div className='register-container'>
//         <div className='mb-3'>
//           <label htmlFor=''>First Name</label>
//           <input
//             onChange={(e) => setFirstName(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Last Name</label>
//           <input
//             onChange={(e) => setLastName(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Email</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type='email'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Phone Number</label>
//           <input
//             onChange={(e) => setPhone(e.target.value)}
//             type='tel'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Password</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type='password'
//             className='form-control'
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Confirm Password</label>
//           <input
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             type='password'
//             className='form-control'
//           />
//         </div>

//         <div>
//           Already have an account? <Link to='/'>Login here</Link>
//         </div>
//         <div>
//           <button
//             onClick={onRegister}
//             className='btn btn-success'
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
import React from 'react'
import Background from '../components/Background/Background'
import { useFormik } from 'formik'
import { inputSchemas } from '../schemas'
import { Link } from 'react-router-dom'
import Form from '../components/Form/Form'
import '../../src/App.scss'
import {register} from '../services/authService'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  const {values , handleSubmit, handleBlur , handleChange , errors ,touched} = useFormik({
    initialValues:{
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
    },
    validationSchema:inputSchemas,
})

const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      value : values.username,
      errorMessage : errors.username,
      touched : touched.username
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value : values.email,
      errorMessage : errors.email,
      touched : touched.email,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value : values.password,
      errorMessage : errors.password,
      touched : touched.password,        
    },
    {
      id: 4,
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      value : values.confirmpassword,
      errorMessage : errors.confirmpassword,
      touched : touched.confirmpassword,            
    },
  ];

  const checkValues = () => {
   return Object.keys(values).every( (key) => values[key] !== "" )
  }


const registerHandler =async (e) => {
    e.preventDefault()
    if(checkValues()){
      await register(values.email,values.password)
      navigate("/login" , {
        replace : true
      })
    }
  }
  return (
    <div>
      <Background>
        <div className='container'>
          <h1 className='container__title'>Register</h1>
          <Form inputs={inputs} 
          onBlurHandler={handleBlur} 
          onChangeHandler={handleChange} 
          onClickHandler={registerHandler} 
          buttonText="Register"/>
          <div className='container__direct'>
            <span className='container__direct__text' > Already have an account ? </span>
            <Link className='container__direct__link' to="/login" 
            >Sign In
            </Link>
          </div>
        </div>
      </Background>
    </div>
  )
}

export default Register