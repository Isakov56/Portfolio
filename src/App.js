import './App.scss';
import NavBar from './components/navbar/NavBar'
import AboutMe from './components/aboutme/AboutMe'
import MyProjects from './components/myprojects/MyProjects'
import ProjectImg from './components/myprojects/ProjectImg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={NavBar}/>
        <Route path="/" exact component={AboutMe}/>
        <Route path="/" exact component={MyProjects}/>
        <Route path="/" exact component={ProjectImg}/>
        <Route path="/" exact component={ProjectImg}/>
        <Route path="/" exact component={ProjectImg}/>
      </Router>
    </div>
  );
}

export default App;
