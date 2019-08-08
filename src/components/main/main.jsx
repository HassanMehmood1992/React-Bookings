// import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import './main.css'
// import {compose} from 'recompose'



// const styles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   white:{
//     color : theme.palette.white.main 
//   }
// }));

// class Main extends Component {
//   render() {
//     return (
//       <div className={styles.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={styles.menuButton}  aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={styles.white}>
//             News
//           </Typography>
//           <Button>Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//     );
//   }
// }

// export default compose(
//   withStyles(styles)
// )
//   (Main);


import React,{Component} from 'react';
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from "./../../assets/images/logo_clickgreece_w.png";
import background from "./../../assets/images/bg.jpg";


import { BrowserRouter as Router, Switch, Route, Link, NavLink , Redirect} from 'react-router-dom';

import { PowerSettingsNew } from '@material-ui/icons';
import {compose} from 'recompose'
import MainNotFound from './main-not-found/main-not-found';
import Search from './search/search';
import MainTabs from './main-tabs/main-tabs';




const drawerWidth = 0;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage:  "url(" + background + ")",
    '& .header': {
      background: 'transparent'
      
    }
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  grow: {
    flexGrow: 1,
    color: theme.palette.white.main,
    img: {
      height: '48px'
    }
  },
  img:{
    height:'48px'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin:{
    marginTop: '4rem'
  },
  home:
  {
    background: "url('./../../assets/images/bg.jpg')",
    backgroundSize: 'cover',
    '& .header' : {
      background: 'transparent',
      boxShadow: 'unset'
      
    }
  }
});

class Main extends Component {
  handleLogout = () =>{
    this.props.logout()
    this.props.history.push('/login')
  }
  componentWillMount()
  {
    
  }
  render(){
  const { classes } = this.props;
  const isRoot = this.props.location.pathname.indexOf('/main/search') > 0
  console.log(this.props)
  return (
    <div className={ isRoot ? classes.root: ''}>
      <CssBaseline />
      <AppBar position="fixed" className="header" style={{ boxShadow: "none" }}>
        <Toolbar>
          <Link to={"/"} className={classes.grow}>
            <img src={logo} className={classes.img} alt="" />
          </Link>
          {/* <Link to={`/main/model/awd`} style={{color: 'white', margin: 10 }}>
            Model
          </Link>
          <Link to={`/main/modelstacking`} style={{color: 'white', margin: 10 }}>
            Model Stacking
          </Link>
          <Link to="/main/jobs/alljobs" style={{color: 'white', margin: 10 }}>
            Jobs
          </Link>

          <Link to="/main/modelList" style={{color: 'white', margin: 10 }}>
            Model List
          </Link> */}

          <a onClick={this.handleLogout} style={{ color: 'white', margin: 10}}>
            <PowerSettingsNew />
          </a>
        </Toolbar>
      </AppBar>

    
      <div className={!isRoot ? classes.toolbarMargin : ''}></div>
      <Switch>
       

        <Route path="/main/search" component={Search} exact ></Route>
        <Route path="/main/:icao/view" component={MainTabs} ></Route>
        {/* <Route path="/main/:icao/airport" component={Airport} exact ></Route>
        <Route path="/main/:icao/services" component={Services} exact></Route>
        <Route path="/main/:icao/hotels" component={Hotels} exact></Route>
        <Route path="/main/:icao/catering" component={MainNotFound} exact ></Route> */}
        {/* <Redirect from="/main" to="/login" ></Redirect>  */}
        <Route component={MainNotFound} ></Route>
      
      </Switch>
     
   </div>
  );
  }
  
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default compose(
  withStyles(styles)
)
  (Main);