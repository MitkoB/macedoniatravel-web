import {React} from 'react';
import HeaderCss from '../Header/header.css'
import appLogo from '../../assets/img/white-logo.png'
import {Link} from 'react-router-dom';
import useWindowSize from "../../utils/useWindowSize";

const Header = (props) => {

    const { width } = useWindowSize();

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
        <header>
            {width <= 800 && (
            <div className="row w-100" id="wider_row" >
                <div className="col-4">
                    <div className="menu_dropdown">
                        <div className="title text-center" onClick={f}>
                            <span className="fa fa-bars" />
                        </div>
                        <div className="dropdown_mobile">
                            <a href="/dashboard" className="nav-link">Home</a>
                            <a href="/attractions" className="nav-link">Attractions</a>
                            <a href="/routes" className="nav-link">Routes</a>
                            <a href="/#" className="nav-link">Famous Events</a>
                            <a href="/#" className="nav-link">About Strumica</a>
                            <a href="/?jumpSection=food" className="nav-link">Traditional Food</a>
                            <a className="nav-link" href="/#">Team</a>
                            <div>
                                <a href="/" className="nav-link">Favorites <i
                                    className="fa fa-heart-o" /></a>
                            </div>
                            {/*<div>*/}
                            {/*    <a href="/" className="nav-link ">Login</a>*/}
                            {/*</div>*/}
                            <div>
                                <hr />
                                    <a href="/attractions/add" className="nav-link small">Add Tourist
                                        Attraction</a>
                                    <a href="/routes/add" className="nav-link small">Add Route</a>
                                    <a href="/" className="nav-link small">Add Famous Event</a>
                                    <a href="/" className="nav-link small">Add User To Role</a>
                                <hr />
                            </div>
                            <div>
                                <a href="/" className="nav-link">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> )}
            {width <= 800 && (
            <div className="row w-100" id="smaller_row" >
                <div className="col-12 text-center">
                    <img src={appLogo} className="float-left"/>
                </div>
            </div> )}
            {width > 800 && (
            <div className="row w-100 " id="default_row">
                <div className="col-3">
                    <img src={appLogo} className="float-left"/>
                </div>
                <div className="col-6 menu-column mt-3">
                    <ul className="menu pl-0">
                        <li>
                            <a href="/dashboard" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="/attractions" className="nav-link">Attractions</a>
                        </li>
                        <li>
                            <a href="/routes" className="nav-link">Routes</a>
                        </li>
                        <li className="drop-down">
                            <a href="/" className="nav-link">Culture</a>
                            <ul>
                                <li><a href="/" className="nav-link">About Strumica</a></li>
                                <li><a href="/?jumpSection=food" className="nav-link">Traditional Food</a></li>
                                <li><a href="/" className="nav-link">Famous Events</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="nav-link" href="/">Team</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">Favorites <i
                                className="fa fa-heart-o" /></a>
                        </li>
                    </ul>
                </div>
                <div className="col-3 mt-3 pl-0">
                    {/*<li className="CssLogin">*/}
                    {/*    <a href="/" className="nav-link logging_buttons">*/}
                    {/*        <i className="fa fa-user-circle-o" /> Login*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    <li id="logoutDropdown" className="drop-down CssLogin">
                        <a href="#" className="nav-link logging_buttons">
                           mitkobelmezov@outlook.com
                        </a>
                        <ul className="text-center">
                            <div className="p-0 m-0">
                                <ul className="p-0 m-0">
                                    <li><a href="/attractions/add">Add Tourist Attraction</a></li>
                                    <li className="mt-1"><a href="/routes/add">Add Route</a></li>
                                    <li className="mt-1"><a href="/">Add Famous Event</a></li>
                                    <li className="mt-1"><a href="/">Add User To Role</a></li>
                                </ul>
                            </div>
                            <hr />
                                <li className="text-center"><a href="/">Logout</a></li>
                        </ul>
                    </li>
                </div>
            </div> )}
        </header>
    )

}
export default Header;
