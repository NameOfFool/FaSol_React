import './App.css';
import './style.css'
import Auth from './components/Auth'
import Register from './components/Register'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Main from './components/Main'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
function App() {
  console.log("!!!")
  return (
    <div className="App flex flex-col text-black justify-between items-center">
      <BrowserRouter>
        <Blog />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="Auth" element={<Auth />}></Route>
          <Route path="Register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
