import React from 'react';
import generateNotification from './firebaseservices/service'
import Transections from './Transections';
function App() {
  return (
    <div  style={{  overflow: "hidden" }}>
      <Transections />
      {
        generateNotification()
      }
    </div>
  );
}

export default App;
