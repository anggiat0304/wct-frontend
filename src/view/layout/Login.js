import React, { Component } from 'react';

class Login extends Component {
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
    const { username, password } = this.state;
    // Proses validasi login dilakukan di sini.
    // Anda dapat menyesuaikan logika validasi sesuai kebutuhan.

    // Misalnya, kita akan anggap login berhasil jika username dan password diisi dengan benar.
    if (username === 'admin' && password === 'admin') {
      this.setState({ isLoggedIn: true });

      // Redirect ke halaman lain (misalnya, halaman dashboard) setelah login berhasil.
      // Anda dapat mengganti URL tujuan sesuai dengan halaman yang ingin dituju.
      // Jika Anda menggunakan React Router, gunakan this.props.history.push('/nama-halaman').
      window.location.href = '/main'; // Ganti dengan URL halaman tujuan setelah login berhasil.
    } else {
      alert('Login gagal. Cek kembali username dan password Anda.');
    }
  };

  render() {
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

export default Login;
