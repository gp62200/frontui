import React from 'react';
import './index.css';
import SideNav from './SideNav';


import Home from './Home';



const App = () => {
  return (
    <div >
      
      <SideNav />
      <div className='overflow-x-hidden' >
        {/* Main content of your app */}
        
    
    
 
        <Home />
       
        
      </div>
    </div>
  );
};

export default App;
