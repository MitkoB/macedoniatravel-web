import React from "react";
import {Link} from 'react-router-dom';
import './attractionCardItemCss.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const attractionTerm = (props) => {
    return (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 " >
                    <div className="container_card">
                    <img
                        src={props.term.pictures}
                        alt="cartItemImg"
                        />
                    <article className="text-left">
                        <h2>{props.term.name}</h2>
                        <h4>{props.term.location}</h4>
                    </article>
                    <Link className="d-block seeMore text-center"
                          onClick={() => props.onSelect(props.term.id)}
                          to={`/attractions/${props.term.id}`}>
                           <span><FontAwesomeIcon icon={faEye}/></span>
                    </Link>
                    </div>
                </div>
    )
}
export default attractionTerm;
