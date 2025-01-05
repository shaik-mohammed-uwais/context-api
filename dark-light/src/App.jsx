import "./App.css";
// import ContextProvider from "./context/ContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    // <ContextProvider>
    <div>
      <Login />
      <Profile />
    </div>
    // </ContextProvider>
  );
}

export default App;
