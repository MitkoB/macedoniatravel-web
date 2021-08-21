import React from "react";
import {Link} from 'react-router-dom';

const attractionTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.location}</td>
            <td scope={"col"}>{props.term.attractionType}</td>
            <td scope={"col"}>{props.term.description}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}
export default attractionTerm;
