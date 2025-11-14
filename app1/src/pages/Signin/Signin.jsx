import React from 'react'
import  './Signin.css'
//import{ toast} from 'react-toastify'

function Signin() {
  return (
    <div className='container'>
      <h2 className='page-header'>Signin</h2>

      <div className='signin-container'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input
            type='checkbox'
            className='me-2'
          />
          <label htmlFor=''>Remember me</label>
        </div>
        <div className='mb-3'>
          {/* <button className='btn btn-link'>Forgot password?</button> */}
          Don't have an account yet?{' '}
          <button className='btn btn-link'>Signuphere</button>
        </div>
        <div className='mb-3'>
          <button className='btn btn-success'>Signin</button>
        </div>
      </div>
    </div>
  )
}

export default Signin
