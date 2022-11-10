import React from 'react';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';
import App from './App';
import Store from './store/store';
interface IStore {
  store: Store,
}
const store = new Store();

export const Context = createContext<IStore>({
  store,
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{ store }}><App /></Context.Provider>

);