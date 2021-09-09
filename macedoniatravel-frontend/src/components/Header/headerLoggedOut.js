import {React} from 'react';
import appLogo from '../../assets/img/logoMacedoniaTravel.png'
import '../Header/header.css'
import {Link} from 'react-router-dom';
import useWindowSize from "../../utils/useWindowSize";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {HashLink} from "react-router-hash-link";

library.add(faBars)

const HeaderLoggedOut = (props) => {

    const {width} = useWindowSize();
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
                                    <Link to={"/login"} className="nav-link ">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            {width <= 800 && (
                <div className="row w-100" id="smaller_row">
                    <div className="col-12 text-center">
                        <img src={appLogo} className="float-left" alt=""/>
                    </div>
                </div>)}
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
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mt-3 pl-0">
                        <li className="CssLogin1">
                            <Link to={"/login"} className="nav-link logging_buttons">
                                <FontAwesomeIcon icon="{solid('user-secret')}" /> Login
                            </Link>
                        </li>
                    </div>
                </div>)}
        </header>
    )
}
export default HeaderLoggedOut;
