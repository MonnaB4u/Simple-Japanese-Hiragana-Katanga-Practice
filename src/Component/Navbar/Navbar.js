import React from 'react';
import '../../App.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <a class="navbar-brand mx-5 text-white" href="#">Hiragana Cheat Sheet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

              <li class="nav-item ">
                <a class="nav-link text-white" href="/">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="allHira">Hiragana-List</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="pracHira">Hiragana-Practice-Section</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="allKata">Katagana-List</a>
              </li>


              <li class="nav-item">
                <a class="nav-link text-white" href="pracKata">Katagana-Practice-Section</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
