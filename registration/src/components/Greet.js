import React from 'react';

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-3 register-container text-center' >
        <h3>{props.name}</h3>
<h3>Thank You</h3>
<h3>You have registered successfully</h3>
<h3>Verification sent to {props.email}</h3>
    </div>
  )
}
