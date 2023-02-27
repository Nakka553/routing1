import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users';
import Head from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Head/>
        <Routes>
        <Route path='/HomePage' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
