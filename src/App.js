import logo from './logo.svg';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Home, Awards, Courses, Gallery, Registration, Contact} from "./components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
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
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
      <Router>
      <NavBar/>
        <Switch>
          <Route path="/artwebsite/" exact component={() => <Home />} />
          <Route path="/artwebsite/awards" exact component={() => <Awards />} />
          <Route path="/artwebsite/courses" exact component={() => <Courses />} />
          <Route path="/artwebsite/gallery" exact component={() => <Gallery />} />
          <Route path="/artwebsite/registration" exact component={() => <Registration />} />
          <Route path="/artwebsite/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
