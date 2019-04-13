import React from 'react';
// Importing components via React Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Import Components For Page
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route
            render={() => <h1 className="text-center">Google Books Search
          </h1>}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
