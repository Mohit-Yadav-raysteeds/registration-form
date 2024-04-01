import React from 'react';

export default function Register (props) {
  return (
    <div className='container card p-3 mt-3 register-container' >
      <h1 className='text-center' ><b>Registration Form</b></h1>
      <form onSubmit={props.submit}>
        
        <div className='form-group'>
          <label htmlFor='name'><b>Name</b></label>
          <input type='text' name='name' required className='form-control'/>
        </div>
        <div className='form-group'>
        <label htmlFor='email'><b>Email</b></label>
          <input type='text' name='email'required className='form-control'/>
        </div>
        <div className='form-group'>
        <label htmlFor='password'><b>Password</b></label>
          <input type='text' name='password'required className='form-control'/>
        </div>
        
        <button type='submit'className='btn btn-primary'><b>Submit</b></button>
      </form>


    </div>


  )
}
