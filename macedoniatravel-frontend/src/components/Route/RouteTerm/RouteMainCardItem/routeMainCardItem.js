import React from "react";
import {Link} from 'react-router-dom';
import '../RouteMainCardItem/routeMainCardItemCss.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF);
library.add(faTwitter);
library.add(faGooglePlus);
library.add(faLinkedin);
library.add(faInstagram);


const routeCardItem = (props) => {
    const startDate = props.term.startDate.split('T')[0];
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="card-r">
                <div className="image">
                    <h5>{props.term.name}</h5>
                    <img src={props.term.pictures} alt="image"/>
                </div>
                <div className="details">
                    <div className="center">
                        <h1>{props.term.name}<br/><span>Start date: {startDate}</span></h1>
                        <p>Price: {props.term.price}</p>
                        <Link id="searchBtn" className="btn btn-primary rounded-pill btn-block shadow-sm"
                              onClick={() => props.onSelect(props.term.id)}
                              to={`/routes/${props.term.id}`}>View
                            more
                        </Link>
                        <ul>
                            <li>
                                <Link className="fb-ic p-2" to={"/routes"}>
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                                </Link>
                            </li>
                            <li>
                                <Link className="tw-ic p-2" to={"/routes"}>
                                    <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                </Link>
                            </li>
                            <li>
                                <Link className="gplus-ic p-2" to={"/routes"}>
                                    <FontAwesomeIcon icon={['fab', 'google-plus']}/>
                                </Link>
                            </li>
                            <li>
                                <Link className="li-ic p-2" to={"/routes"}>
                                    <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                                </Link>
                            </li>
                            <li>
                                <Link className="ins-ic p-2" to={"/routes"}>
                                    <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default routeCardItem;
