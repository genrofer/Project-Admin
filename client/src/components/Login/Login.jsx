import React, { useEffect, useState } from 'react'

const NewUser = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const date = Date.now()
  
  const hendleClick = () => {
    if (login == 'admin' && password == '12345') {
      localStorage.setItem("token", JSON.stringify(date))
      window.location.href = "/"
    } else {
      alert("Username or password incorrect ❌")
    }
  }

  return (
    <>
      <div className='restaurant'>
        <div className="login-box">
          <h2>Login</h2>
          <form>

            <div className="user-box">
              <input onChange={(e) => setLogin(e.target.value)} type="text" name="login" />
              <label>Login</label>
            </div>

            <div className="user-box">
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
              <label>Password</label>
            </div>

            <a onClick={hendleClick} type='submit' href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </>

  )
}

export default NewUser