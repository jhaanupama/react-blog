
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './create';
import Blogdetails from './Blogdetails';

function App() {
  const title="welcome ";
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
    <div className="content"></div>
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route exact path="/blogs/:id">
        <Blogdetails />
      </Route>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
