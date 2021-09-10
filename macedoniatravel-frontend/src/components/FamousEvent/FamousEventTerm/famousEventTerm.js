import React from "react";
import {Link} from 'react-router-dom';
import '../FamousEventTerm/famousEventTermCss.css'
import TokenService from "../../../repository/tokenRepository";

const famousEventTerm = (props) => {
    const isAdmin = TokenService.getUser().roles;
    return (
        <div className="row mt-5">
            <div className="col-12">
                <div className="card">
                    <div className="card-body row no-gutters">
                        <div className="col-4">
                            <img className="eventCardImg"
                                 src={props.term.picture}
                                 alt="fact_img"/>
                        </div>
                        <div className="col-8">
                            <h4 className="eventCardTitle">{props.term.title}</h4>
                            <span className={"text-muted"}>Start date: {props.term.start.split("T")[0]}</span>
                            <span className={"text-muted"}> End date: {props.term.end.split("T")[0]}</span>
                            <p className="eventCardSubtitle text-start mt-2">Location: {props.term.location}</p>
                            <p className="eventCardDescription text-start">
                                {props.term.description}
                            </p>
                            {isAdmin == "ROLE_ADMIN" && (
                                <div>
                                    <Link type="button" className="btn btn-danger m-2"
                                          onClick={() => props.onDelete(props.term.id)}
                                          to={"/famous-events"}>Delete</Link>
                                    <Link type="button" className="btn btn-info m-2"
                                          onClick={() => props.onEdit(props.term.id)}
                                          to={`/famous-events/edit/${props.term.id}`}>Edit</Link>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default famousEventTerm;
