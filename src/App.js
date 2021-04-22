import './App.scss';
import NavBar from './components/navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={NavBar}/>
      </Router>
    </div>
  );
}

export default App;
