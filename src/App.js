import logo from './logo.svg';
import NavBar from './components/NavBar'
import handleDrawerClose from './components/NavBar'
import NavBarMobile from './components/NavBarMobile'
import { Route, Switch } from "react-router-dom";
import { HashRouter} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Home, Awards, Courses, Gallery, Registration, Contact } from "./components";
import { ClickAwayListener } from '@material-ui/core';
import Footer from './components/Footer';

const displayDesktop = () => {
  return (
    <NavBar />
  );
};

const displayMobile = () => {
  return (
    <NavBarMobile />
  );
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div class = "content-wrap">

        <HashRouter basename="/">
          {mobileView ? displayMobile() : displayDesktop()}
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/awards" exact component={() => <Awards />} />
            <Route path="/courses" exact component={() => <Courses />} />
            <Route path="/gallery" exact component={() => <Gallery />} />
            <Route path="/registration" exact component={() => <Registration />} />
            <Route path="/contact" exact component={() => <Contact />} />
          </Switch>
        </HashRouter>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}



export default App;
