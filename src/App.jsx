import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import ChatWindow from "./components/ChatWindow";

function App() {
  const initialIsDark = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    } else {
      return false;
    }
  };

  const { user } = useSelector((state) => state.user);
  const [isDark, setIsDark] = useState(initialIsDark);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      {user.info === null ? (
        <Login isDark={isDark} toggleDark={toggleDark} />
      ) : (
        <ChatWindow isDark={isDark} toggleDark={toggleDark} />
      )}
    </div>
  );
}

export default App;
