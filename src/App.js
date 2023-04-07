import logo from './logo.svg';
import './App.css';
import Exercise2 from './Exercise2';
import AboutUs from './AboutUs';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <nav>
        
  <Link to='/exercise2'>Exercise2</Link>
  
</nav>

      <Exercise2 />
      
      <Routes>
        <Route path = '/exercise2' element = {<Exercise2/>} />
        <Route path = '/about-us' element = {<AboutUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;
