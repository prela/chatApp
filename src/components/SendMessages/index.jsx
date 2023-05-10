import React, { useState } from 'react'

const SendMessages = ({publishMessage}) => {
  const [messageInput, setMessageInput] = useState('')

  const messageInputHandler = (e) => {
    setMessageInput(e.target.value)
  }

  const sendMessagesHandler = (e) => {
    e.preventDefault()
    publishMessage(messageInput)
    setMessageInput('')
  }

  return (
    <div>
      <form onSubmit={sendMessagesHandler}>
        <input type="text" id='messageInput' value={messageInput} onChange={messageInputHandler} placeholder='Enter your message' autoFocus={true} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default SendMessages