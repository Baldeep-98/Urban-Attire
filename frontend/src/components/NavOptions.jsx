
import React from "react";
import { Link } from "react-router-dom";
import { isWebTokenValid } from "../webTokenVerification";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../storeInformation";
function Navoptions(props){

    const isValid=useSelector((state)=>state.auth.isValid);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    var navOptions=null;
    const nonUserNavOptions=[{
        id:1,
        option:"Home",
        to:"/Home"
    },
{
    id:2,
    option:"About",
    to:"/AboutUs"
},
{
    id:3,
    option:"Shop",
    to:"/shop"
}];
const UserNavOptions=[{
    id:1,
    option:"Home",
    to:"/Home"
},
 {
    id:2,
    option:"About",
    to:"/AboutUs"
 },
 {
    id:3,
    option:"Shop",
    to:"/shop"
 },
 {
    id:4,
    option:"Profile",
    to:"/profile"
 },
 {
    id:5,
    option:"Cart",
    to:"/cart"
 }];
 if(isValid &&isWebTokenValid()){
    navOptions=UserNavOptions;
 }
 else{
    navOptions=nonUserNavOptions;
 }
    return(
        <>
        <ul className={props.menuStyle}>
            {navOptions.map((l)=>(
                <li
                    key={l.id}
                    className={props.menuItemstyle}
                    >
                        <Link onClick={props.clickFunction} to={l.to}>{l.option}</Link>
                </li>
            ))}
            {props.isNavResp &&(
                (isValid && isWebTokenValid())?
                <>
                <li 
                key="9" className={props.menuItemstyle}
                >
                    <Link onClick={()=>{
                        props.clickFunction();
                    }
                } to="/profile">My Profile</Link>
                </li>
                <li
                    key="8"
                    className={props.menuItemstyle}
                    >
                        <Link onClick={()=>{
                            props.clickFunction();
                            dispatch(logout());
                            navigate('/login');}
                        }>Logout</Link>
                        
                </li>
                </>
                :<li
                key="7"
                className={props.menuItemstyle}
                >
                    <Link onClick={props.clickFunction} to="/Login"></Link>
                </li>
            )}
        </ul>
        </>
    );
}
export default Navoptions;