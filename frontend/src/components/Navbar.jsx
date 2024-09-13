import React from 'react';
import logo from '../assests/Images/logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '../assests/Images/menu.svg';
import CloseIcon from '../assests/Images/cross.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../storeInformation';
import Navoptions from './NavOptions';

function Navbar() {
    const [isNav, setIsnav] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isValid = useSelector((state) => state.auth.isValid);

    const handleClick = () => {
        setIsnav(prevState => !prevState);
    };

    return (
        <header>
            <div className="navbar-container">
                <img className="logo" src={logo} alt="logo" />
                <Navoptions
                    menuStyle="menu-options-list"
                    menuItem="menu-options-list-item"
                    clickFunction={handleClick}
                    isNavResp={isNav}
                />
                <div className="login">
                    {isValid ? (
                        <>
                            <Link to="/login" onClick={() => {
                                dispatch(logout());
                            }}>
                                Logout
                            </Link>
                            <Link to="/Profile">My Profile</Link>
                        </>
                    ) : (
                        <Link to="/Login">Login</Link>
                    )}
                </div>
                <div 
                    onClick={handleClick} 
                    className="menu-toggle"
                    aria-label={isNav ? 'Close menu' : 'Open menu'}
                >
                    <img
                        className="menu-icon"
                        src={isNav ? CloseIcon : MenuIcon}
                        alt={isNav ? 'Close menu' : 'Open menu'}
                    />
                </div>
                
            </div>
        </header>
    );
}

export default Navbar;