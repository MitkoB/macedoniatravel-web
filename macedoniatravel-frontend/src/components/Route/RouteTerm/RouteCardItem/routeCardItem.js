import React from "react";
import {Link} from 'react-router-dom';
import '../../../Attraction/AttractionTerm/attractionCardItemCss.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const routeCardItem = (props) => {
    const startDate = props.term?.startDate?.split('T')[0];
    return (
            <div className="container_card">
                <img
                    src={props.term?.pictures}
                    alt="cartItemImg"
                />
                <article className="text-left">
                    <h2>{props.term?.name}</h2>
                    <h4>{startDate}</h4>
                </article>
                <Link className="d-block seeMore text-center"
                      onClick={() => props.onSelect(props.term.id)}
                      to={`/routes/${props.term?.id}`}>
                    <span><FontAwesomeIcon icon={faEye}/></span>
                </Link>
            </div>
    )
}
export default routeCardItem;
