import React from "react";
import {Link, useParams} from 'react-router-dom';
import './attractionTermCss.css'
import TokenService from '../../../repository/tokenRepository'
import RouteService from "../../../repository/routeRepository";

const AttractionPage = (props) => {
    const [constructorHasRun, setConstructorHasRun] = React.useState(false);
    const [attraction, setAttraction] = React.useState(props.attraction);
    const isAdmin = TokenService.getUser().roles;
    const {id} = useParams();

    const constructor = () => {
        if (constructorHasRun) return;
        RouteService.getAttraction(id).then((data) => {
            setAttraction(data.data);
        })
        setConstructorHasRun(true);
    };
    constructor();

    React.useEffect(() => {
        if (props.attraction.name !== undefined) {
            setAttraction(props.attraction);
        }
    })

    let srcLink = "https://maps.google.com/maps?q=";
    const latitude = attraction.latitude;
    const longitude = attraction.longitude;
    srcLink += latitude;
    srcLink += "%20";
    srcLink += longitude;
    srcLink += "&t=&z=13&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="container mt-5 mb-5" id="container-details">
            <div className="card-details mt-5">
                <div className="card__image-container ">
                    <img className="card__image"
                         src={attraction.pictures}
                         alt=""/>
                </div>
                <svg className="card__svg"style={{"width":"100%"}} viewBox="0 0 700 400">
                    <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent" fill="#001c35"/>
                    <path className="card__line"
                          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                          stroke="pink" stroke-width="3" fill="transparent"/>
                </svg>
                <div className="card__content container mt-1">
                    <div className="row">
                        <div className="col m-2">
                            <h1 className="card__title">{attraction.name}</h1>
                        </div>
                        {isAdmin == "ROLE_ADMIN" && (
                            <div className="col">
                                <Link type="button" className="btn btn-danger m-2"
                                      onClick={() => props.onDelete(attraction.id)}
                                      to={"/attractions"}>Delete</Link>
                                <Link type="button" className="btn btn-info m-2"
                                      onClick={() => props.onEdit(props.attraction.id)}
                                      to={`/attractions/edit/${attraction.id}`}>Edit</Link>
                            </div>)
                        }
                    </div>
                    <p>{attraction.description}</p>
                    <br/>
                    <h4 style={{"color": "#fff"}}>Type: </h4>
                    <h5 className="card-info">{attraction.attractionType}</h5>
                    <h4 style={{"color": "#fff"}}>Location: </h4>
                    <h5 className="card-info">{attraction.location}</h5>
                </div>

                <div className="row">
                    <div className="col-md-12 mt-2 mb-4" style={{"background": "#001c35"}}>
                        <div className="card card-cascade narrower">
                            <div className="view view-cascade gradient-card-header blue-gradient">
                                <h5 className="m-3 mb-0" style={{"color": "#001c35"}}>Map</h5>
                            </div>
                            <div className="card-body card-body-cascade text-center">
                                <div id="map-container-google-8" className="z-depth-1-half map-container-5"
                                     style={{"height": "300px"}}>
                                    <iframe
                                        src={srcLink}
                                        frameBorder="0" style={{"border": "0"}} allowFullScreen/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AttractionPage;
