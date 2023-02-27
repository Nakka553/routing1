import React from 'react';

function Login(props) {
    return (
        <div style={{textAlign:'center'}}>
            <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <div><input type="text" placeholder="username"/></div>
          <div><input type="password" placeholder="password"/></div>
          <button>Login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
        </div>
    );
}

export default Login;