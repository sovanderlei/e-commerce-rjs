import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AppAdm from './AppAdm';
import HomeApp from './pages/homeApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="banner_bg_main">
      {/*  header top section start  */}
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Gift Ideas</a></li>
                  <li><a href="#">New Releases</a></li>
                  <li><a href="#">Today's Deals</a></li>
                  <li><a href="/admin">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   header top section start  */}

      <div className="container" >
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/admin/*" element={<AppAdm />} />
        </Routes>
      </div>
      {/*  footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo"><a href="index.html"><img src={require('./images/footer-logo.png')} /></a></div>
          <div className="input_bt">
            <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
            <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
          </div>
          <div className="footer_menu">
            <ul>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Gift Ideas</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Today's Deals</a></li>
              <li><a href="#">Administrator</a></li>
            </ul>
          </div>
          <div className="location_main">Help Line  Number : <a href="#">+1 1800 1200 1200</a></div>
        </div>
      </div>
      {/*  footer section end */}
      {/*  copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">© 2024 All Rights Reserved. Design by <a href="https://html.design">Online Shop</a></p>
        </div>
      </div>
      {/*  copyright section end */}
    </div>
  );
}

export default App;
