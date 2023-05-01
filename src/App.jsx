import { useSelector } from 'react-redux'
import Login from './components/Login'
import ChatWindow from './components/ChatWindow'
import './App.css'

function App() {
  const { userInfo } = useSelector((state) => state.user)
  return (
    <div className="App">
      {
        (userInfo === null)
         ? <Login /> : <ChatWindow />
      }
    </div>
  )
}

export default App
