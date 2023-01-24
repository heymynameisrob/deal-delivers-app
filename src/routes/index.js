import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { LoadingSpinner } from '../components/Helpers';

const Dashboard = React.lazy(() => import('./Dashboard').then(module => ({ default: module.Dashboard })));
const Blog = React.lazy(() => import('./Blog').then(module => ({ default: module.Blog })));
const Post = React.lazy(() => import('./Blog').then(module => ({ default: module.Post })));
const Spaces = React.lazy(() => import('./Spaces').then(module => ({ default: module.Spaces })));

const createRoutes = () => {
  return(
    <Router>
      <React.Suspense fallback={<LoadingSpinner fixed={true}/>}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/spaces" component={Spaces} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={Post} />
          <Redirect to='/' />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default createRoutes