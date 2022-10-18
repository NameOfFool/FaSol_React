import './App.css';
import './index.css'
import logo from "../src/logo.png"
function App() {
  return (
    <div className="App">
      <header className="rounded border-grey-200 px-2 sm:px-4 py-2.5">
        <nav className='container flex flex-wrap justify-between items-center mx-auto '>
          <img src={logo} className="logo h-20"></img>
          <ul className="flex flex-row p-4 bg-gray-50 rounded-lg">
            <li><a href='#' className="block py-2 pr-4 lo-3 text-gray-700 rounded hover:bg-gray-100">Главная</a></li>
            <li><a href='#' className="block py-2 pr-4 lo-3 text-gray-700 rounded hover:bg-gray-100">Вход</a></li>
            <li><a href='#' className="block py-2 pr-4 lo-3 text-gray-700 rounded hover:bg-gray-100">Регистрация</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
