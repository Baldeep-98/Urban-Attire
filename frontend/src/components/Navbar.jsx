//navbar 
import React from 'react';
import logo from '../assests/Images/logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '../assests/Images/menu.svg';
import CloseIcon from '../assests/Images/cross.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../storeInformation'; 
import Navoptions from './NavOptions';

const Navbar = () => {
    const [isNav, setIsnav] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isValid = useSelector((state) => state.auth.isValid);

    const handleClick = () => {
        setIsnav(!isNav);
    };

    return (
        <nav>
            <div>
                <div>
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <Navoptions
                    menuStyle="menu-options-list"
                    menuItem="menu-options-list-item"
                />
                <div className="login">
                    {isValid ? (
                        <>
                            <label
                                onClick={() => {
                                    dispatch(logout()); 
                                    navigate('/login');
                                }}
                            >
                                <Link>Logout</Link>
                            </label>
                            <label>
                                <Link to="/Profile">My Profile</Link>
                            </label>
                        </>
                    ) : (
                        <>
                            <label>
                                <Link to="/Login">Login</Link>
                            </label>
                        </>
                    )}
                </div>
                <div onClick={() => setIsnav(!isNav)} className="menu-open-option">
                    {!isNav ? (
                        <img
                            className="menu-option"
                            src={MenuIcon}
                            alt="Menu open Option"
                        />
                    ) : (
                        <img
                            className="menu-option"
                            src={CloseIcon}
                            alt="menu close option"
                        />
                    )}
                </div>
                {isNav && (
                    <Navoptions
                        clickFunction={handleClick}
                        menuStyle="menu-options-list"
                        menuItemStyle="menu-options-list-item"
                        isNavResp={true}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
