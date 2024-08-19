import React from 'react'
import './Sign.css'

export const SignIn = () => {
  return (
    <div>
        <form action="" className='signIn-form'>
            <h2>SIGN IN</h2>
            <div className='container'>
              <label htmlFor="username">Email/Username</label>
              <input type="text" className='input-box'/>
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="text" className='input-box' />
            </div>

            <button className='submit-btn'>Sign In</button>
        </form>
    </div>
  )
}
