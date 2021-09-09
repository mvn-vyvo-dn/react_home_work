import Header from './components/Header';
import Features from './pages/Features';
import Login from './pages/Auth/Login';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
      <Header />
      <main className="page-main">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
