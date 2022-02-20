import { useState } from 'react'

//const fs = require('fs')
//const pathModule = require('path')

function App() {
  const { ipcRenderer } = window.require('electron')
  const [path, setPath] = useState('12')

  console.log(window.require('electron').remote)

  const sendMain = () => {
    ipcRenderer.send('ping', 'send')
  }
  return (
    <div className="App">
      <h4>
        path: <button onClick={sendMain}>Send Ping</button>
      </h4>
      <p>Joseph Esteban {path}</p>
    </div>
  )
}

export default App
