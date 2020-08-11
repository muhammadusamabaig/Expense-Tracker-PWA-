import React from 'react';
import generateNotification from './firebaseservices/service'
import Transections from './Transections';
import './App.css'
function App() {
  return (
    <div className="globalcolor" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <Transections />
      {
        generateNotification()
      }
    </div>
  );
}

export default App;
