import React, { useState, createContext, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Auth from './containers/auth'
import Login from './components/Login/login'
import Logout from './components/Login/logout'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        <Auth>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Auth>
        
      </Switch>
    </Router>
  );
}

const BaseLayout: React.FC = ({ children }) => (
  <div>
    { children }
    <Navigator />
  </div>
)

const Navigator: React.FC = () => (
  <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="topics">Topics</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul>
</nav>
)

const Home: React.FC = () => {
  return <h2>Home</h2>
}
const About: React.FC = () => <h2>About</h2>
const Users: React.FC  = () => <h2>Users</h2>
const Topics: React.FC = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
)}

const Topic = () => {
  const { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}

export default App;
