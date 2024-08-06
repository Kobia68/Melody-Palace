import React from 'react'
import './Log.css'

export const Login = () => {
  return (
    <div>
        <form action="" className='log-form'>
            <h2>LOG IN</h2>
            <div className='container'>
              <label htmlFor="username">Email/Username</label>
              <input type="text" className='input-box'/>
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="text" className='input-box' />
            </div>

            <button className='submit-btn'>Log In</button>
        </form>
    </div>
  )
}
