import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./components/signup";
import Blog from "./components/blog";
function App() {
  return (
    <>
      <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/blog" element={<Blog/>} />
          
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
