import React from 'react'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';

export const Header = () => {

  const navigate = useNavigate();
  function handleClick(){
    navigate("/");
  }  

  return (
    <div id="header">
        <h2 id="header__title">Wave Tech</h2>
        <ul>
            <li onClick={handleClick}>Home</li>
        </ul>
    </div>
  )
}

export default Header;