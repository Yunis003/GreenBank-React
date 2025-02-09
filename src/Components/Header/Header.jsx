import React from 'react'
import Logo from '../../assets/icons/Exclude.svg'
import '../Partials/_main.scss'
export default function Header() {
  return (
    <header>
      <div className="logo-side">
        <img src={Logo} alt="logo" />
        <p className='logo-header'>GreenBank</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">Why Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Our Process</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </nav>
      <button className='header-btn'>Contact</button>
    </header>
  )
}
