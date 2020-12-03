import './App.css';
import React from 'react'
import Index from './Components/Header/Main'
import HR from './Components/Horizontal Line/Hr'
import Text from './Components/Text/Text'
import Search from './Components/Search/Search'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Index />
      <HR color="#FE8369" />
      <Text/>
      <Search/>
    </div>
  );
}

export default App;
