import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './output_tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookTrain from "./components/BookTrain";
import ContactUsPage from './components/contact';
import LogInPage from './components/LoginComponent';
import ManageBookings from './components/ManageBooking';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="bookNow" element={<BookTrain />} />
        <Route path="contactUS" element={<ContactUsPage />} />
        <Route path="logIn" element={<LogInPage />} />
        <Route path="managemybooking" element={<ManageBookings />} />
      </Routes>
     </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);
