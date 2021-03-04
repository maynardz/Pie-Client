import {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

import './App.css';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);

  return (
    <div className="App">
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;