import React from "react";

const favoriteCartTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}><img src={props.term.pictures} className={"w-100"}/></td>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.description}</td>
            <td scope={"col"}>{props.term.startDate?.split("T")[0]} at {props.term.startDate?.split("T")[1]}</td>
            <td scope={"col"}>{props.term.endDate?.split("T")[0]} at {props.term.endDate?.split("T")[1]}</td>
            <td scope={"col"}>{props.term.routeStatus}</td>
            <td scope={"col"}>{props.term.price}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Remove"} className={"btn btn-danger"}
                   onClick={() => props.onRemove(props.term.id)}>
                    Remove
                </a>
            </td>
        </tr>
    )
}
export default favoriteCartTerm;
