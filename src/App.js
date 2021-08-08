import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Details from './Details';


function App() {
  return (
    <div className="App">
<Router>
  <Switch>
    <Route path='/'exact component={UserList}/>
    <Route path="/:id" exact render={(props)=><Details {...props}/>}/>
  </Switch>
</Router>
  

    </div>
  );
}

export default App;
