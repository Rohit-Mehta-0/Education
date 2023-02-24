import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import './header.css'
import { NavLink } from 'react-router-dom'

const navLinks = [
  {
    display: 'Home',
    url: '/home',
  },
  {
    display: 'About',
    url: '/about',
  },

  {
    display: 'Courses',
    url: '/courses',
  },
  {
    display: 'Pages',
    url: '/pages',
  },
  {
    display: 'Blog',
    url: '/blog',
  },
]

const Header = () => {
  const menuRef = useRef()

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink to={item.url}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +91 7895340519
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
