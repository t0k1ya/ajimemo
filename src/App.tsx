import React, { useState, createContext, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  // Redirect,
} from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout'
import WithFooter from './components/Footer'
import Auth from './containers/auth'
import Login from './components/Login/login'
import Logout from './components/Login/logout'
import Home from './components/Home'
import AddItemPage from './components/AddItemPage'


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Logout} />
          {/* <Auth><Switch></Switch></Auth>だとauth.tsx内でprops.childrenの孫コンポーネントがレンダリングされない */}
          <Switch>
            <Auth>
              <WithFooter>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddItemPage} />
              </WithFooter>
              {/* <Redirect exact from="/" to="/home" /> */}
            </Auth>
          </Switch>
        </Layout>
      </Switch>
    </Router>
  );
}

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
