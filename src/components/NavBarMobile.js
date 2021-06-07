import React from 'react'
import clsx from 'clsx';
import logo from '../image0.jpeg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Toolbar, Typography, AppBar, IconButton, Drawer, Divider } from '@material-ui/core'
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
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#22223B'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#22223B',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
    width: "50px",
  },
  menuItem: {
    cursor: "pointer",
    backgroundColor: "#22223B",
    textAlign: "left",
    paddingLeft: "16px",
    flexGrow: 1,
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
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}>
          <IconButton edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <img src={logo} className={classes.logo} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: '#fff' }} /> : <ChevronRightIcon style={{ color: '#fff' }} />}
          </IconButton>
        </div>
        <React.Fragment>
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
              Courses
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/gallery">
              Gallery
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/registration">
              Registration Form
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link to="/artwebsite/contact">
              Contact
            </Link>
          </Typography>
        </React.Fragment>
      </Drawer>
    </React.Fragment>
  )
}

export default NavBarMobile