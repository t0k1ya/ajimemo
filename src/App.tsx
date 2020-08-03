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
import SignIn from './components/SignIn';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <React.Fragment>
            <Route path="/">
              <Redirect to="/auth" />
            </Route>
            <Route to="/auth"  component={Authentication} />
            <Route path="/signin" component={SignIn} />
            <BaseLayout>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/users" component={Users} />
              <Route path="/topics" component={Topics} />
            </BaseLayout>
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
}

const Authentication: React.FC = ({ children, ...props }) => {
  console.log('Authentication: ', props);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const finishLoading = () => setTimeout(() => setLoading(false), 1000);

  if (isLoading) {
    finishLoading()
    return <div>Loading</div>
  } else {
    if (isLoggedIn) {
      return (
        <Route children={children} />
      )
    }
    return (
     <Redirect to="/signin" />
    )
  }
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
