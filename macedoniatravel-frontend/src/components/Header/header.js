import {React} from 'react';
import '../Header/header.css'
import appLogo from '../../assets/img/logoMacedoniaTravel.png'
import {Link} from 'react-router-dom';
import useWindowSize from "../../utils/useWindowSize";
import AuthRepository from '../../repository/authRepository'
import TokenService from '../../repository/tokenRepository'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {HashLink} from "react-router-hash-link";


library.add(faBars)


const Header = (props) => {

    const {width} = useWindowSize();
    const user = TokenService.getUser()?.username;
    const userRole = TokenService.getUser()?.roles;
    const logout = (e) => {
        AuthRepository.logout();
    }


    const f = (e) => {
        document.getElementsByClassName('dropdown_mobile')[0].classList.toggle('down');
        if (document.getElementsByClassName('dropdown_mobile')[0].classList.contains('down')) {
            setTimeout(function () {
                document.getElementsByClassName('dropdown_mobile')[0].style.overflow = 'visible'
            }, 500)
        } else {
            document.getElementsByClassName('dropdown_mobile')[0].style.overflow = 'hidden'
        }
    }

    return (
        <header id="header">
            {/*SMALL VIEW*/}
            {width <= 800 && (
                <div className="row w-100" id="wider_row">
                    <div className="col-4">
                        <div className="menu_dropdown" id="menu_dropdown">
                            <div className="title text-center" onClick={f}>
                                <span><FontAwesomeIcon icon={faBars}/></span>
                            </div>
                            <div className="dropdown_mobile" id="dropdown_mobile">
                                <Link to={"/dashboard"} className="nav-link">Home</Link>
                                <Link to={"/attractions"} className="nav-link">Attractions</Link>
                                <Link to={"/routes"} className="nav-link">Routes</Link>
                                <Link to={"/famous-events"} className="nav-link">Famous Events</Link>
                                <Link to={"/about"} className="nav-link">About Macedonia</Link>
                                <HashLink smooth to={"/about/#section1"} className="nav-link">History</HashLink>
                                <HashLink smooth to={"/about/#section2"} className="nav-link">Info</HashLink>
                                <HashLink smooth to={"/about/#section3"} className="nav-link">Facts</HashLink>
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                                <div>
                                    <Link to={"/favorite-cart"} className="nav-link">Favorites
                                    </Link>
                                </div>
                                {userRole == "ROLE_ADMIN"  && (
                                    <div>
                                        <Link to={"/attractions/add"} className="nav-link small">Add Tourist
                                            Attraction</Link>
                                        <Link to={"/routes/add"} className="nav-link small">Add Route</Link>
                                        <Link to={"/famous-events/add"} className="nav-link small">Add Famous Event</Link>
                                    </div>
                                )}
                                {userRole == "ROLE_TENANT" && (
                                    <div>
                                        <Link to={"/routes/add"} className="nav-link small">Add Route</Link>
                                    </div>
                                )}
                                <div>
                                    <Link to={"/login"} className="nav-link" onClick={logout}>Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            {width<=800 && (
                <div className="row w-100" id="smaller_row">
                    <div className="col-12 text-center">
                        <img src={appLogo} className="float-left" alt=""/>
                    </div>
                </div>
            )}


            {/*LARGE VIEW*/}
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
                                <Link to={"/about"} className="nav-link">Culture</Link>
                                <ul>
                                    <li><Link to={"/about"} className="nav-link">About Macedonia</Link></li>
                                    <li><HashLink smooth to={"/about/#section1"} className="nav-link">History</HashLink>
                                    </li>
                                    <li><HashLink smooth to={"/about/#section2"} className="nav-link">Info</HashLink>
                                    </li>
                                    <li><HashLink smooth to={"/about/#section3"} className="nav-link">Facts</HashLink>
                                    </li>
                                    <li><Link to={"/famous-events"} className="nav-link">Famous Events</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={"/favorite-cart"} className="nav-link">Favorites
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mt-3 pl-0" id="logoutD">
                        <li id="logoutDropdown" className="drop-down CssLogin">
                            <Link to={"/"} className="nav-link logging_buttons">
                                {user}
                            </Link>
                            <ul className="text-center">
                                {userRole == "ROLE_ADMIN" && (
                                    <div className="p-0 m-0">
                                    <ul className="p-0 m-0">
                                        <li><Link to={"/attractions/add"}>Add Tourist Attraction</Link></li>
                                        <li className="mt-1"><Link to={"/routes/add"}>Add Route</Link></li>
                                        <li className="mt-1"><Link to={"/famous-events/add"}>Add Famous Event</Link>
                                        </li>
                                    </ul>
                                        <hr/>
                                    </div>
                                    )}
                                {userRole == "ROLE_TENANT" && (
                                    <div className="p-0 m-0">
                                        <ul className="p-0 m-0">
                                            <li className="mt-1"><Link to={"/routes/add"}>Add Route</Link></li>
                                        </ul>
                                        <hr/>
                                    </div>
                                )}

                                <li className="text-center"><Link to={"/login"} onClick={logout}>Logout</Link></li>
                            </ul>
                        </li>
                    </div>
                </div>)}
        </header>
    )
}
export default Header;
