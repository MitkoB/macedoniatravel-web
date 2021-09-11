import {React, useState} from 'react';
import profileImg from '../../assets/img/mitko-profile.jpg'
import '../Contact/contact.css'
import {HashLink} from "react-router-hash-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Contact = (props) => {

    const [active, setActive] = useState(false)
    const handleClick = (e) => {
        setActive(true)
    }
    const handleClickFirst = (e) => {
        setActive(false)
    }
    return (
        <div className="container mt-5 emp-profile">
            <div className="card-contact">
                <div className="row mt-2">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img
                                src={profileImg}
                                alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                Mitko Belmezov
                            </h5>

                            <h6>
                                Computer Science & Engineering Student
                            </h6>
                            <p className="proile-rating">Faculty: <span>Faculty of Computer Science & Engineering, Skopje</span></p>
                            <div className="list-inline">
                                <p className="proile-rating d-inline">Find me on:<span>   </span></p>
                                <div className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank"
                                       href="https://www.facebook.com/mitkobelmezovv/">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                                    </a>
                                </div>
                                <div className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank"
                                       href="https://www.linkedin.com/in/mitko-belmezov-a734ba1b3/">
                                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                                    </a>
                                </div>
                            </div>
                            <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="home-tab" data-toggle="tab"
                                       onClick={handleClickFirst}
                                       role="tab" aria-controls="home" aria-selected="true">Info</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       id="profile-tab" data-toggle="tab"
                                       onClick={handleClick}
                                       role="tab" aria-controls="profile" aria-selected="false">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>SKILLS</p>
                            <a href="">ASP.NET, Spring Boot</a><br/>
                            <a href="">React, Angular, Thymeleaf</a><br/>
                            <a href="">JavaScript, TypeScript, jQuery</a><br/>
                            <a href="">Bootstrap, Material-UI</a><br/>
                            <a href="">C, C++, C#, Java, Python</a><br/>
                            <a href="">HTML, CSS</a><br/>
                            <a href="">Jira, Git</a><br/>
                            <a href="">Image processing</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            {active != true && (
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Student Index</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>171047</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mitko Belmezov</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>mitkobelmezo@outlook.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>+389 78 517 701</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Software engineer</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {active == true && (
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <p>
                                            I'm in my last year of studies towards a bachelor's in Computer Sciences and
                                            Engineering. I am a hardworking and ambitious individual, responsible, organized and
                                            ready for teamwork, Always curious and ready for a challenge. I am eager to be
                                            challenged in order to grow and further improve my IT skills.
                                        </p>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Contact;
