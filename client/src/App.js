import './App.css';
import './index.css'
import logo from "../src/logo.png"
function App() {
  return (
    <div className="App">
      <header className="bg-[#ff1e1e] px-2 py-2.5 fixed top-0 w-full">
        <nav className='container flex flex-wrap justify-between items-center mx-auto'>
          <img src={logo} className="logo h-20"></img>
        </nav>
      </header>
    </div>
  );
}

export default App;
