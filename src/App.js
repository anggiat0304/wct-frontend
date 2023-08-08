import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './view/layout/LoginPage';
import MainLayout from './view/layout/MainLayout';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux'; // Import Provider
class App extends React.Component {
  render() {
    return (
      <Provider store={store}> {/* Wrap the entire App with Provider */}
      <Router>
        <div>
          <Route path="/" exact component={LoginPage} />
          <PrivateRoute path="/main" component={MainLayout} />
        </div>
      </Router>
    </Provider>
    );
  }
}

// Komponen untuk memastikan user telah login sebelum mengakses halaman dashboard
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component user={user} {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default App;
