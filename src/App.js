import {useState, useEffect} from 'react';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

import './App.css';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  });

  const updateLocalStorage = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies /> : <Auth updateLocalStorage={updateLocalStorage} />
  }

  return (
    <div className="App">
      <Navbar clearLocalStorage={clearLocalStorage} />
      {viewConductor()}
    </div>
  );
}

export default App;