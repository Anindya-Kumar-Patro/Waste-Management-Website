
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {Switch, Route, Redirect, Router, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import WasteManagement from './components/WasteManagement';
import Contact from './components/Contact';
import Organic from './components/Organic';
import Inorganic from './components/Inorganic';
import Ewaste from './components/Ewaste';
import Medical from './components/Medical';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/waste-management" component={WasteManagement} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/organic" component={Organic}/>
        <Route exact path="/inorganic" component={Inorganic}/>
        <Route exact path="/ewaste" component={Ewaste}/>
        <Route exact path="/medical" component={Medical}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
