import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <a className="navbar-brand" href="/">Macedonia Travel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Attractions</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/"}>Routes</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/register"}>Register</Link>
                    </form>
                </div>
            </nav>
        </header>
    )
}
export default header;
