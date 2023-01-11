import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {

  // navlink example
  // <NavLink className='red' to='/rgb/166/28/60'>
  //             Vivid Burgundy
  // </NavLink>

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;
