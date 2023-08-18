import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from './Todo/Todo.jsx'
import Home from './Home/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <route path= '/home'element= {<Home/>}></route>
    <route path= '/todo'element= {<Todo/>}></route>
    
  </Routes>
  </BrowserRouter>  
  </React.StrictMode>,
)