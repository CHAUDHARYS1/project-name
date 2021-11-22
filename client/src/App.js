// import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/Signup";
import MembershipPlans from "./pages/Membership";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/membership" component={MembershipPlans} />
          <Route exact path="/addjob" component={AddJob} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
