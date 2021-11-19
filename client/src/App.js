// import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/signup";
import MembershipPlans from "./pages/Membership";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
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
