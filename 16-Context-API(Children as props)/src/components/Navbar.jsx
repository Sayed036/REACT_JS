import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { themeDataContext } from '../contexts/ThemeContext.jsx'

function Navbar() {

  const data = useContext(themeDataContext);
  console.log(data);
  
  return (
    <div className='nav'>
      <h2>{data}</h2>
      <Navbar2/>
    </div>
  )
}

export default Navbar
