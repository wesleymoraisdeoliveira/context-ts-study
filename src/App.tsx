import { useContext } from 'react';

import {  UserContext, UserContextProvider } from './Contexts/Users/Users.context';

import './App.css';

function App() {

  const { test }  = useContext(UserContext);
  
  return (
    <div className="App">
      <header className="App-header">
        
        <UserContextProvider>
          <button onClick={() => test()}>TESTE</button>
        </UserContextProvider>
      </header>
    </div>
  );
}

export default App;
