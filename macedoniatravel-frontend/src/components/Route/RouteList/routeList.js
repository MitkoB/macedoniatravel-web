import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import RouteTerm from '../RouteTerm/routeTerm'

class RouteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 2

        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.routes.length / this.state.size);
        const routes = this.getRoutesPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Description</th>
                                <th scope={"col"}>Start Date</th>
                                <th scope={"col"}>End Date</th>
                                <th scope={"col"}>Route Status</th>
                                <th scope={"col"}>Price</th>

                            </tr>
                            </thead>
                            <tbody>
                            {routes}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/routes/add"}>Add new
                                    Route</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getRoutesPage = (offset, nextPageOffset) => {
        return this.props.routes.map((term, index) => {
            return (
                <RouteTerm term={term} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
            );
        }).filter((route, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default RouteList;