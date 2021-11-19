// import './App.css';

import LoginForm from './pages/Login';
import SignUpForm from './pages/signup';
import Footer from './components/footer';
import Header from './components/header';
import CreateJob from './pages/CreateJobListing';
import SingleJob from './pages/SingleJob.js';
import HomePage from './pages/HomePage';
import MembershipPlans from "./pages/Membership";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
        <HomePage></HomePage>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/membership" component={MembershipPlans} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
