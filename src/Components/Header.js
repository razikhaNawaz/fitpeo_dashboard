
import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.header}>
        
        <div className={classes.headerleft}>
          <h4>Hello, Shahrukh</h4>  
        </div>
        <div className={classes.headerright}>
            
            <BsSearch  className='icon'/> Search...
            
        </div>
    </header>
  )
}

export default Header;