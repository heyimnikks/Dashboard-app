import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [title, updateTitle] = useState(null);
  return (
    <Router>
      <Header title={title}/>
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm updateTitle={updateTitle}/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <LoginForm updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm  updateTitle={updateTitle}/>
            </Route>
          </Switch>
          <Footer/>
    </Router>
  );
}

export default App;
