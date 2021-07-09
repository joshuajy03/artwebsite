import React from 'react'
import clsx from 'clsx';
import logo from '../Dream Art/logos/bluelogoshort.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Toolbar, Typography, AppBar, IconButton, Drawer, ClickAwayListener } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import './NavBar.css';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    color: "#C9ADA7",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: '#22223B'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#22223B',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#22223B',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  drawerContent:{
    backgroundColor: '#22223B',
  },

  drawerNav: {
    backgroundColor: '#22223B',
    alignItems: 'left',
  },

  bar: {
    paddingTop: "0rem",
    backgroundColor: "#22223B",
    ["@media (max-width: 900px)"]: {
      paddingLeft: 10,
    },
  },
  logo: {
    height: "50px",
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    cursor: "pointer",
    backgroundColor: "#22223B",
    textAlign: "left",
    paddingLeft: "16px",
    marginBottom: 16,
    "&:hover": {
      color: "#CFD2B2"
    },
    ['@media (max-width: 900px)']: {
      paddingBottom: "0rem"
    }
  },
}));


function NavBarMobile() {
  const classes = styles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("open");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log("close");
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}>
          <Link to="/artwebsite">
            <img src={logo} className={classes.logo} />
          </Link>
          <Typography variant="h6" noWrap className={classes.title}></Typography>
          <ClickAwayListener onClickAway={handleDrawerClose} touchEvent={false} >
            <IconButton
              color="default"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="end"
              className={clsx(open && classes.hide), classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon style={{ color: "#C9ADA7"}} /> : <ChevronRightIcon style={{ color: "#C9ADA7" }} />}
          </IconButton>
        </div>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/awards">
              Awards
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/courses">
              Courses and Gallery
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/registration">
              Registration Form
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/contact">
              Contact and PayPal
            </Link>
          </Typography>
      </Drawer>

    </React.Fragment>
  )
}

export default NavBarMobile