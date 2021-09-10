import {React} from 'react';
import {Link} from 'react-router-dom'
import '../Dashboard/dashboard.css'
import '../../index.css'
import './cards.css'
import backgroundImg from '../../assets/img/kale-wallper.jpg'
import s1 from '../../assets/img/ohrid-c1.jpg'
import s2 from '../../assets/img/skopje-c1.jpg'
import s3 from '../../assets/img/ohrid-c2.jpg'
import s4 from '../../assets/img/ohrid-lake-img.jpg'
import s5 from '../../assets/img/skopje-c2.jpg'
import s6 from '../../assets/img/skopjenight.jpg'
import s7 from '../../assets/img/winter-ohrid.jpg'
import s8 from '../../assets/img/skopje-img.jpeg'


const Dashboard = (props) => {
    return (
        <div className="body">
            <div className="coverDiv ">
                <img className="d-block w-100" id="coverImageHomePage" src={backgroundImg} alt="Macedonia"/>
                <div className="animationDiv">
                    <div className="divTextAnimation">Macedonia Travel</div>
                    <div className=" secondAnimationDiv">
                        <h4>If you want to know more about Macedonia, click below</h4>
                    </div>
                    <Link type="button" id="readMore" className="btn btn-light" to={"/about"}><span>Read more</span></Link>
                </div>
            </div>

            {/*CARDS*/}
            <h2 className="mt-5" index="titleHome">What are you looking for?</h2>
            <div className="container bootstrap snippets bootdeys mt-3">
                <div className="row">
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="blue"
                                 data-radius="none">
                                <div className="content">
                                    <h6 className="category">See some attractions</h6>
                                    <h4 className="titleCard"><Link to={"/attractions"}>See now</Link></h4>
                                    <p className="description">Macedonia is a nation of ancient cities,
                                        beautiful mountains, lush forestry, promises natural beauty
                                        and breathtaking landscapes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="brown"
                                 data-radius="none">
                                <div className="content">
                                    <h6 className="category">Famous events</h6>
                                    <h4 className="titleCard"><Link to={"/famous-events"}>See now</Link></h4>
                                    <p className="description">Folk music and folk dancing are still popular, rock
                                        and pop music are ubiquitous.
                                        Icon painting and wood carving both have long histories here. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="purple"
                                 data-radius="none">
                                <div className="content">
                                    <h6 className="category">See some routes</h6>
                                    <h4 className="titleCard"><Link to={"/routes"}>See now</Link></h4>
                                    <p className="description">
                                        You can see more different travel routes, you can add your favorites
                                        in your favorite cart, and than to create ticket for them. Enjoy!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5 mb-5">
                <div className="row mt-2">
                    <div className="col-12">
                        <p className="text-center">
                            Macedonia, officially the Republic of Macedonia, is a country in Southeast Europe. It gained
                            independence in 1991 as one of the successor states of Yugoslavia. Macedonia is a
                            landlocked country bordering with Kosovo to the northwest, Serbia to the north, Bulgaria to
                            the east, Greece to the south, and Albania to the west. It constitutes approximately the
                            northern third of the larger geographical region of Macedonia. Skopje, the capital and
                            largest
                            city, is home to a quarter of the country's 2.08 million population. The majority of the
                            residents are ethnic Macedonians, a South Slavic people. Albanians form a significant
                            minority,
                            followed by Turks, Romani, Serbs and Bosnians.
                            Yet, this mountainous, landlocked country has so much to offer! There are quirky cities,
                            gorgeous villages, interesting historic sites, majestic lakes, and beautiful mountains.
                            And while some of the most beautiful places to visit in Macedonia rival those anywhere in
                            the world, you’ll pay a fraction of what you would for a trip to similar spots
                            in western Europe.
                        </p>
                    </div>
                </div>

                <div className="mt-3">
                <p>Want to learn more about Macedonia?</p>
                <Link to={"/about"} className="btn btn-link text-white" id="seeMoreButton">Learn more</Link>
                </div>

                <hr id="homePageHorizontalLine"/>

                {/*GALLERY*/}
                <div className="container">
                    <div className="row text-center text-lg-start">
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 mh-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s1} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 mh-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s2} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 mh-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s3} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s4} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s5} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s6} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s7} alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <a href="#" className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail"
                                     src={s8} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <hr id="homePageHorizontalLine"/>
            </div>
        </div>)
}
export default Dashboard