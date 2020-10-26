import React from "react";
import './App.css';
import Dialog from './components/dialog/dialog';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dialog />
    </div>
  );
}

export default App;
