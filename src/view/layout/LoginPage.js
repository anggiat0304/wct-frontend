import React, { Component } from 'react';
import { login } from '../../actions/userActions';
import { connect } from 'react-redux';
import { LOGIN } from '../../actions/url';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const data = {username:this.state.username, password:this.state.password}

    axios
        .post(LOGIN, data) 
        .then((response) => {
          console.log(response)
          if(response.data && response.data.message){
          alert("Akun salah, tolong cek akun anda kembali")
          return window.location.reload()
          }
          const { access_token,user } = response.data;
          localStorage.setItem('token', access_token);
          localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/main';
        })
        .catch((error) => {
          alert(error.message)
          window.location.reload()
        });
  };

  render() {

    const { data, loading, error } = this.props
    const { username, password } = this.state;

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h1 className="mb-4">Welcome To WCT</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}



export default LoginPage;
