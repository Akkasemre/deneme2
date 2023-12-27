import React from 'react'
import "./style.css"

const Header = ({children}) => {
  return (
    <div className='header'>{children}</div>
  )
}

export default Header