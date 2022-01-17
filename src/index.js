import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import UserPage from './Components/UserPage';
import ContactUs from './Components/ContactUs';

const setRouting = (
  <Router>  
    <div className="container mt-3">
      {/*Top Navigation*/}
      <TopNav />       
        <hr />
        <div className="row">         
          {/*Main Section*/}
          <div className="col-md-12">
            <Routes>
              <Route exact path="/" element={<App/>}/>
              <Route path="/user-page" element={<UserPage/>}/>
              <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
          </div>
        </div>
        <hr />
        {/*Footer Section*/}
        <Footer />
      </div>


  </Router>
);

ReactDOM.render(
  setRouting,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
