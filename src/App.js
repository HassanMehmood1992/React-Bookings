import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import {theme} from './AppTheme'
import NotFound from './components/not-found/not-found';
import Login from './components/login/login';
import Main from './components/main/main';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/main" component={Main} ></Route>
      <Redirect from="/" to="/login" exact></Redirect>
      <Route component={NotFound} ></Route>
    </Switch>
  </Router>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
