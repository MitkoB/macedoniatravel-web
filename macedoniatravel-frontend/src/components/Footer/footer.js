import {React} from 'react';
import {Link} from 'react-router-dom';
import '../Footer/footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF);
library.add(faTwitter);
library.add(faGooglePlus);
library.add(faLinkedin);
library.add(faInstagram);


const Footer = (props) => {
    return (
        <footer className="page-footer font-small indigo  pt-4" id="footer">
            <div className="container">
                <div className="row text-center d-flex justify-content-center pt-5 mb-3" id="footerMenu">
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/attractions"}>Attractions</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/routes"}>Routes</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/famous-events"}>Famous events</Link>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <Link to={"/contact"}>Contact</Link>
                        </h6>
                    </div>
                </div>
                <hr className="rgba-white-light h_line" style={{"margin": "0 15%;"}}/>
                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                        <div className="col-md-8 col-12 mt-5">
                            <p style={{"line-height": "1.7rem"}}>
                                Is there anything to worry about in Macedonia? Perfectly safe.
                                That's how many travelers from our community have described the Republic of Macedonia.
                                Travelers should feel very safe while exploring this small landlocked nation on
                                the Balkan Peninsula. So, take a look, and see the most famous attractions and events
                                there, and than choose and create ticket for your favorite travel route. If you have
                                any problem, please go to contact section and let us know.
                            </p>
                        </div>
                    </div>
                    <hr className="clearfix d-md-none rgba-white-light" style={{"margin": "10% 15% 5%;"}}/>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <div className="mb-5 flex-center text-center justify-content-center" id="social-media">
                                    <Link className="fb-ic p-2" to={"/dashboard"}>
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                                    </Link>
                                    <Link className="tw-ic p-2" to={"/dashboard"}>
                                        <FontAwesomeIcon icon={['fab', 'twitter']}/>
                                    </Link>
                                    <Link className="gplus-ic p-2" to={"/dashboard"}>
                                        <FontAwesomeIcon icon={['fab', 'google-plus']}/>
                                    </Link>
                                    <Link className="li-ic p-2" to={"/dashboard"}>
                                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                                    </Link>
                                    <Link className="ins-ic p-2" to={"/dashboard"}>
                                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <span> </span>
                <Link to={"/dashboard"}>Macedonia Travel</Link>
            </div>
        </footer>
    )
}
export default Footer;