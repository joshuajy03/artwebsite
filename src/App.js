import logo from './logo.svg';
import NavBar from './components/NavBar'
import NavBarMobile from './components/NavBarMobile'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Home, Awards, Courses, Gallery, Registration, Contact } from "./components";

const displayDesktop = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/artwebsite/" exact component={() => <Home />} />
        <Route path="/artwebsite/awards" exact component={() => <Awards />} />
        <Route path="/artwebsite/courses" exact component={() => <Courses />} />
        <Route path="/artwebsite/gallery" exact component={() => <Gallery />} />
        <Route path="/artwebsite/registration" exact component={() => <Registration />} />
        <Route path="/artwebsite/contact" exact component={() => <Contact />} />
      </Switch>
    </Router>

  );
};

const displayMobile = () => {
  return (
    <Router>
      <NavBarMobile />
      <Switch>
        <Route path="/artwebsite/" exact component={() => <Home />} />
        <Route path="/artwebsite/awards" exact component={() => <Awards />} />
        <Route path="/artwebsite/courses" exact component={() => <Courses />} />
        <Route path="/artwebsite/gallery" exact component={() => <Gallery />} />
        <Route path="/artwebsite/registration" exact component={() => <Registration />} />
        <Route path="/artwebsite/contact" exact component={() => <Contact />} />
      </Switch>
    </Router>

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
      return window.innerWidth < 900
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
        {mobileView ? displayMobile() : displayDesktop()}
      </ThemeProvider>
    </div>
  );
}



export default App;
