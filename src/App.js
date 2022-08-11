import { useState } from 'react';
import Login from './Components/Login';
import './App.css';
import SecretStuff from './Components/SecretStuff';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <header>
      <h1>My First Login</h1>
    </header>

  {isLoggedIn
  ?<SecretStuff/>
  :<Login setIsLoggedIn={setIsLoggedIn}/>
  }
    
    
    </>
  );
}

export default App;
