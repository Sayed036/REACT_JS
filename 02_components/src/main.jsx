import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Card from './components/Card.jsx'
import Navabar from './components/Navabar.jsx'

createRoot(document.getElementById('root')).render(
    <>
      {Card()}
      {Card()}
      {Navabar()}
    </>
)
