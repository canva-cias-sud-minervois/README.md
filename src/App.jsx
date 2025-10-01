import React, { useState } from 'react';
import Menu from './Menu';
import Module from './Module';
import DragBackground from './DragBackground';
import Footer from './Footer';


export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    
    <div>

      <Menu onTabChange={setActiveTab} activeTab={activeTab} />



      <div id="accueil" style={{ paddingTop: '50px' }} />
      
      <DragBackground />
      <Module onTabChange={setActiveTab} activeTab={activeTab} />
      <Footer />
    </div>
  )
  
  ;

  
}
