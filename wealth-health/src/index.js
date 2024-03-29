import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/home/home';
import Employee from './views/employee.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss';
import { UserProvider } from './utils/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/employee' element={<Employee/>}></Route>
        </Routes>
      </UserProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
