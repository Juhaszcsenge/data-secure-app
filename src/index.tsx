import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CloudPages from './routes/CloudPages';
import ContactPages from './routes/ContactPages';
import RecoveryPages from './routes/RecoveryPages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<RecoveryPages />} />
      <Route path='/cloud' element={<CloudPages />} />
      <Route path='/contact' element={<ContactPages />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
