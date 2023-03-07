import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/userActions';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EmergencyRequestPage from './pages/EmergencyRequestPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  // Fetch all users on app mount
  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/emergency-request" component={EmergencyRequestPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
};

export default App;
