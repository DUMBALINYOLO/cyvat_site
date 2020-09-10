import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CYVAT
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'pi pi-times' : 'pi pi-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/ongoingprojects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ONGOING PROJECTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/finishedprojects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FINISHED PROJECTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/newsletters'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                NEWSLETTER
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                PHOTO GALLERY
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
