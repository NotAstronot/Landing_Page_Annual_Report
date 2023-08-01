
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnnualReport from './pages/AnnualReport';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/annualreport' component={AnnualReport} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
    


  );
}

export default App;
