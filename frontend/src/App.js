import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/Dashboard" component={Dashboard}/>
       <Route path="*" component={PageNotFound}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
