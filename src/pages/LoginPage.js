import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';

const LoginPage = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
