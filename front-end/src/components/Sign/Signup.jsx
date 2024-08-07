import React from 'react'
import './SignUp.css'

export const Signup = () => {
  return (
    <div>
        <form action="" className='log-form'>
            <h2>SIGN UP</h2>
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" className='input-box'/>
            </div>

            <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" className='input-box'/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" className='input-box'/>
            </div>

            <div>
                <label htmlFor="username">Username</label>
                <input type="text" className='input-box'/>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input type="number" className='input-box'/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="text" className='input-box' />
            </div>

            <button className='submit-btn'>Sign Up</button>
        </form>
    </div>
  )
}
