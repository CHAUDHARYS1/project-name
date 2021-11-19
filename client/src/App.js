import './App.css';
import LoginForm from './pages/Login';
import SignUpForm from './pages/signup';
import Footer from './components/footer';
import Header from './components/header';
import CreateJob from './pages/CreatJobListing';
import SingleJob from './pages/SingleJob.js';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Header></Header>
      <LoginForm></LoginForm>
      <SignUpForm></SignUpForm>
      <HomePage></HomePage>
      <CreateJob></CreateJob>
      <SingleJob></SingleJob>
      <Footer></Footer>
    </div>
  );
}

export default App;
