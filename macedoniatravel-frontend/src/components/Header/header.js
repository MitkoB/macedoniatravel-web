import {React, useState} from 'react';
import  '../Header/header.css'
import appLogo from '../../assets/img/white-logo.png'
import {Link} from 'react-router-dom';
import useWindowSize from "../../utils/useWindowSize";
import AuthRepository from '../../repository/authRepository'

const Header = (props) => {

    const { width } = useWindowSize();
    const logout = (e) => {
       AuthRepository.logout()
    }
    const [isLoggedIn, setLoggedStatus] = useState(props.loggedStatus);


    const f = (e) => {
        document.getElementsByClassName('dropdown_mobile')[0].classList.toggle('down');
        if (document.getElementsByClassName('dropdown_mobile')[0].classList.contains('down')) {
            setTimeout(function() {
                document.getElementsByClassName('dropdown_mobile')[0].style.overflow = 'visible'
            }, 500)
        } else {
            document.getElementsByClassName('dropdown_mobile')[0].style.overflow = 'hidden'
        }
    }

    return (
        <header id="header">
            {width <= 800 && (
            <div className="row w-100" id="wider_row" style={{'display': "none"}}>
                <div className="col-4">
                    <div className="menu_dropdown" id="menu_dropdown">
                        <div className="title text-center" onClick={f}>
                            <span><i className="fa fa-bars"/></span>
                        </div>
                        <div className="dropdown_mobile" id="dropdown_mobile">
                            <Link to={"/dashboard"} className="nav-link">Home</Link>
                            <Link to={"/attractions"} className="nav-link">Attractions</Link>
                            <Link to={"/routes"} className="nav-link">Routes</Link>
                            <Link to={"/famous-events"} className="nav-link">Famous Events</Link>
                            <Link to={"/#"} className="nav-link">About Macedonia</Link>
                            <Link to={"/?jumpSection=food"} className="nav-link">Traditional Food</Link>
                            <Link className="nav-link" to={"/"}>Team</Link>
                            <div>
                                <Link to={"/favorite-cart"} className="nav-link">Favorites <i
                                    className="fa fa-heart-o" /></Link>
                            </div>
                            {isLoggedIn == null && (
                            <div>
                                <Link to={"/login"} className="nav-link ">Login</Link>
                            </div> )}
                            {isLoggedIn && (<div>
                                <hr />
                                    <Link to={"/attractions/add"} className="nav-link small">Add Tourist
                                        Attraction</Link>
                                    <Link to={"/routes/add"} className="nav-link small">Add Route</Link>
                                    <Link to={"/famous-events/add"} className="nav-link small">Add Famous Event</Link>
                                    <Link to={"/"} className="nav-link small">Add User To Role</Link>
                                <hr />
                            </div>)}
                            {isLoggedIn && (
                            <div>
                                <Link to={"/login"} className="nav-link" onClick={logout}>Logout</Link>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div> )}
            {width <= 800 && (
            <div className="row w-100" id="smaller_row" >
                <div className="col-12 text-center">
                    <img src={appLogo} className="float-left" alt=""/>
                </div>
            </div> )}
            {width > 800 && (
            <div className="row w-100 " id="default_row">
                <div className="col-3">
                    <img src={appLogo} className="float-left" alt=""/>
                </div>
                <div className="col-6 menu-column mt-3">
                    <ul className="menu pl-0">
                        <li>
                            <Link to={"/dashboard"} className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to={"/attractions"} className="nav-link">Attractions</Link>
                        </li>
                        <li>
                            <Link to={"/routes"} className="nav-link">Routes</Link>
                        </li>
                        <li className="drop-down">
                            <Link to={"/"} className="nav-link">Culture</Link>
                            <ul>
                                <li><Link to={"/"} className="nav-link">About Macedonia</Link></li>
                                <li><Link to={"/?jumpSection=food"} className="nav-link">Traditional Food</Link></li>
                                <li><Link to={"/famous-events"} className="nav-link">Famous Events</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link" to={"/"}>Team</Link>
                        </li>
                        <li>
                            <Link to={"/favorite-cart"} className="nav-link">Favorites <i
                                className="fa fa-heart-o" /></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-3 mt-3 pl-0">
                    {isLoggedIn ==null && (
                        <li className="CssLogin">
                        <Link to={"/login"} className="nav-link logging_buttons">
                            <i className="fa fa-user-circle-o" /> Login
                        </Link>
                    </li> )}

                    {isLoggedIn && (
                        <li id="logoutDropdown" className="drop-down CssLogin">
                        <Link to={"/"} className="nav-link logging_buttons">
                           mitkobelmezov@outlook.com
                        </Link>
                        <ul className="text-center">
                            <div className="p-0 m-0">
                                <ul className="p-0 m-0">
                                    <li><Link to={"/attractions/add"}>Add Tourist Attraction</Link></li>
                                    <li className="mt-1"><Link to={"/routes/add"}>Add Route</Link></li>
                                    <li className="mt-1"><Link to={"/famous-events/add"}>Add Famous Event</Link></li>
                                    <li className="mt-1"><Link to={"/"}>Add User To Role</Link></li>
                                </ul>
                            </div>
                            <hr />
                                <li className="text-center"><Link to={"/login"} onClick={logout} >Logout</Link></li>
                        </ul>
                    </li> )}
                </div>
            </div> )}
        </header>
    )
}
export default Header;
