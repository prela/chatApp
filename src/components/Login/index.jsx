import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '/src/redux/user'

const Login = () => {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')

  const userInputHandler = (e) => {
    setUserInput(e.target.value)
  }

  const userHandler = (e) => {
    e.preventDefault()
    dispatch(login({name: userInput}))
  }
  

  return (
    <>
      <div className='logo'>
        <img src='/src/assets/chatapplogo.svg' alt='logo' width='100px' />
      </div>
      <h1>chatApp</h1>
      <form onSubmit={userHandler}>
        <label htmlFor='userInput'>To continue please provide your name</label>
        <input type="text" id='userInput' value={userInput} onChange={userInputHandler} />
        <button type="submit">Start chat</button>
      </form>
    </>
  )
}

export default Login