import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

const About = lazy(() => import('./About'))
const Home = lazy(() => import('./Home'));
const NavBar = lazy(() => import('./NavBar'))

const App = () => {
  return(
    <Router>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
};

export default App;
