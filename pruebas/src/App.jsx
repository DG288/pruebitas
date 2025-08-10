import { useState } from 'react'
import './App.css'
import Nombre from './nombre.jsx'
import edad from './edad.jsx'

function App() {

  return (
    <>
    <div className="container">
      <div className="edad">
        <Edad />
      </div>
      <div className="nombre">
        <Nombre />
      </div>
    </div>
    </>
  );
}

export default App
