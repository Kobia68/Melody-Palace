import React from 'react'

export const Login = () => {
  return (
    <div>
        <form action="">
            <h2>LOG IN</h2>
            <fieldset>
                <legend>Email/Username</legend>
                <input type="text"/>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="text"/>
            </fieldset>
            <button>Log In</button>
        </form>
    </div>
  )
}
