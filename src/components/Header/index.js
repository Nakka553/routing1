import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Head(props) {
    const navigate = useNavigate()
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" >LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/homePage'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/about'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to='/contact'>Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/users'>Users</Link>
        </li>
       
      </ul>
      <form class="d-flex" >
        
        <button class="btn btn-outline-primary" type="submit" onClick={() => { navigate('/login') }}>Login</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Head;