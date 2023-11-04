import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>  {/* only use under development other wise it will increase overhead */}
    <App />
  //</React.StrictMode>,
)
