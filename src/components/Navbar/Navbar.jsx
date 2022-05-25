import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import {Button} from '../Button'
import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const size = '70px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(1.0);
  }
  60%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  };

  useEffect(()=>{
      showButton()
  },[])

window.addEventListener('resize', showButton);
  return (
    <nav className="navbar">

      <div className="navbar-container">
          {props.user ? (
            <>
            <Link to={PATHS.PROFILEPAGE} className="authLink">
              <boton>My Profile</boton>
            </Link>
            <Link to={PATHS.ALLPROJECTS} className="authLink">
              <boton>My Palaces</boton>
            </Link>
            {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}

            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
            <Flex
              justifyContent="center"
              alignItems="flex-end"
              h="100px"
              w="80px"
              overflow="hidden">
              <Box
                as="div"
                position="absolute"
                w={size}
                h={size}
                _before={{
                  content: "''",
                  position: 'relative',
                  display: 'block',
                  width: '50%',
                  height: '50%',
                  boxSizing: 'border-box',
                  marginLeft: '-100%',
                  marginTop: '-100%',
                  borderRadius: '100%',
                  bgColor: color,
                  animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  size="full"
                  position="relative"
                  top={0}
                />
              </Box>
            </Flex>
          </>
                          ) : (
          <>
            
                <Link to={PATHS.HOMEPAGE} className='navbar-logo' onClick={closeMobileMenu}>
                    MindFiles <i className='fac fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={PATHS.LOGINPAGE} className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={PATHS.SIGNUPPAGE} className='nav-links' onClick={closeMobileMenu}>
                            Register
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Sign up</Button>}  */}
            
          </>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
