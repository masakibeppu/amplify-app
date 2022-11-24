import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import NewPost from "./routes/NewPost";
import Posts from "./routes/Posts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
      <Route path="new-post" element={<NewPost />} />
      <Route path="posts" element={<Posts />} />
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
