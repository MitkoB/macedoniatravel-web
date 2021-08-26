import React from "react";
import {Link} from 'react-router-dom';

const famousEventTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.title}</td>
            <td scope={"col"}>{props.term.description}</td>
            <td scope={"col"}>{props.term.start}</td>
            <td scope={"col"}>{props.term.end}</td>
            <td scope={"col"}>{props.term.location}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/famous-events/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}
export default famousEventTerm;
