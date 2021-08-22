import React from "react";
import {Link} from 'react-router-dom';

const routeTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.description}</td>
            <td scope={"col"}>{props.term.startDate}</td>
            <td scope={"col"}>{props.term.endDate}</td>
            <td scope={"col"}>{props.term.routeStatus}</td>
            <td scope={"col"}>{props.term.price}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/routes/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}
export default routeTerm;
