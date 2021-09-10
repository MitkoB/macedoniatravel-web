import {React} from 'react';
import profileImg from '../../assets/img/mitko-profile.jpg'
import '../Contact/contact.css'
import {HashLink} from "react-router-hash-link";

const Contact = (props) => {

    return (
        <div className="container mt-5 emp-profile">
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
                                Software Engineer
                            </h6>
                            <p className="proile-rating">Faculty : <span>FCSE</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <HashLink className="nav-link active" id="home-tab" data-toggle="tab" smooth to={"/contact/#home"}
                                       role="tab" aria-controls="home" aria-selected="true">About</HashLink>
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
                            <a href="">C, C++, C#, Java, Python</a><br/>
                            <a href="">HTML, CSS</a><br/>
                            <a href="">Jira, Git</a><br/>
                            <a href="">Image processing</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
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
                                        <p>078 517 701</p>
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
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Contact;
