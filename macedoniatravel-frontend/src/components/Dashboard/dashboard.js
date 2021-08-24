import {React} from 'react';
import {Link} from 'react-router-dom'
import '../Dashboard/dashboard.css'
import '../../index.css'
import backgroundImg from '../../assets/img/background-img.png'
import ohridImg from '../../assets/img/boats-beach-lake-morning-winter-lake-ohrid.jpg'
import kaleImg from '../../assets/img/kale-img.jpg'
import macedoniaImg from '../../assets/img/macedonia-img.jpg'
import Carousel from 'react-bootstrap/Carousel'

const Dashboard = (props) => {
    return (
        <div className="body">
        <div className="coverDiv">
            <img className="d-block w-100" id="coverImageHomePage" src={backgroundImg} alt="Macedonia"/>
            <div className="animationDiv">
                <div className="divTextAnimation">Macedonia</div>
                <div className="divTextAnimation secondAnimationDiv">
                    <span>the country of the stars</span>
                </div>
            </div>
        </div>

        <div className="container mt-5 mb-5">
            <div className="row mt-2">
                <div className="col-12">
                    <p>
                        Macedonia, officially the Republic of Macedonia, is a country in Southeast Europe. It gained
                        independence in 1991 as one of the successor states of Yugoslavia. North Macedonia is a
                        landlocked country bordering with Kosovo to the northwest, Serbia to the north, Bulgaria to
                        the east, Greece to the south, and Albania to the west. It constitutes approximately the
                        northern third of the larger geographical region of Macedonia. Skopje, the capital and largest
                        city, is home to a quarter of the country's 2.08 million population. The majority of the
                        residents are ethnic Macedonians, a South Slavic people. Albanians form a significant minority,
                        followed by Turks, Romani, Serbs and Bosnians.
                    </p>
                    <p>Want to learn more about Macedonia?</p>
                    <Link to={"/"} className="btn btn-link text-white" id="greenButton">Learn more</Link>
                </div>
            </div>
            <hr id="homePageHorizontalLine"/>
            <h1 className="mt-4">What are you looking for</h1>
            <div className="d-flex justify-content-center" id="thingsToDoSection">
                <div className="col-4 col-lg-2"><Link to={"/attractions"}
                                                   className="btn btn-lg rounded-pill" id="thingsToDoBtn">Attractions</Link>
                </div>
                <div className="col-4 col-lg-2"><Link to={"/routes"}
                                                   className="btn btn-lg rounded-pill" id="thingsToDoBtn">Tours</Link></div>
                <div className="col-4 col-lg-2"><Link to={"/famousevents"}
                                                   className="btn btn-lg rounded-pill" id="thingsToDoBtn">Events</Link>
                </div>
            </div>
            <div className="row no-gutters mt-5 rounded-pill" id="smallBanner">
                <div className="col-4">
                    <img src="https://live.staticflickr.com/2835/9105519466_08acfc1686_b.jpg" alt="StrumicaPark"/>
                </div>
                <div className="col-8 pt-4 text-dark bg-light">
                    <h2>Plan your next trip</h2>
                    <h6>Save and organize all your plans and travel ideas for your next trip to Macedonia.</h6>
                    <Link to={"/attractions"} className="btn btn-link text-white" id="greenButton">Start planning</Link>
                </div>
            </div>
        </div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={backgroundImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>If you want to know more about Macedonia, click below</h3>
                        <Link type="button" className="btn btn-light" href={"/"}>Read more</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={macedoniaImg}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>If you want to know more about Macedonia, click below</h3>
                        <Link type="button" className="btn btn-light" href={"/"}>Read more</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={kaleImg}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>If you want to know more about Macedonia, click below</h3>
                        <Link type="button" className="btn btn-light" href={"/"}>Read more</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>)
}
export default Dashboard