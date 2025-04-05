import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/Login.css'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:4000/v2/user/login', { email, password })
      .then((result) => {
        console.log(result)
        if (result.data.status === 'Success') {
          // Store the token in localStorage
          const token = result.data.token
          localStorage.setItem('token', token)

          // Redirect based on user role
          if (result.data.role === 'admin') {
            navigate('/admin')
          } else {
            navigate('/')
          }
        } else {
          // Handle login failure (e.g., display an error message)
          alert(result.data.message)
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="main-login">
      <div className="box-login">
        <span className="borderLine-login"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="inputBox-login">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required="required"
            ></input>
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox-login">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required="required"
            ></input>
            <span>Password</span>
            <i></i>
          </div>
          <div className="links-login">
            <Link className="forget" to="/forget">
              Forget Password?
            </Link>
            <Link className="signup" to="/signup">
              Signup
            </Link>
          </div>
          <span className="beforebutton-login"></span>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  )
}

export default Login
