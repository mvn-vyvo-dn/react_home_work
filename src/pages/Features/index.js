import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../core/guards/PrivateRoute';

const Items = lazy(() => import('./Items'));
const Carts = lazy(() => import('./Carts'));
const Favourites = lazy(() => import('./Favourites'));
const Home = lazy(() => import('./Home'));

const Features = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute path="/carts">
            <Carts />
          </PrivateRoute>
          <PrivateRoute path="/favourites">
            <Favourites />
          </PrivateRoute>
          <Route path="/">
            <Items />
          </Route>
          <Route path="/carts">
            <Carts />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default Features;
