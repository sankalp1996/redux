import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import store from './store/store';

import {Provider } from 'react-redux';

// store.subscribe(()=> console.log(store.getstate()));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Home/>
    </div>
   </Provider>
  );
}

export default App;
