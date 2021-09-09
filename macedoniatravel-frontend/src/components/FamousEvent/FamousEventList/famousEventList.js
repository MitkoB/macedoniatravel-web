import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import FamousEventTerm from '../FamousEventTerm/famousEventTerm'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

class FamousEventList extends React.Component {
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
        const pageCount = Math.ceil(this.props.famousEvents.length / this.state.size);
        const famousEvents = this.getFamousEvents(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Title</th>
                                <th scope={"col"}>Description</th>
                                <th scope={"col"}>Start date</th>
                                <th scope={"col"}>End date</th>
                                <th scope={"col"}>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            {famousEvents}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/famous-events/add"}>Add new
                                    Famous event</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: "prev,next",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        events={this.props.famousEvents}
                        eventClick={function(info) {
                            alert('Event: ' + info.event.title+'\n'+ 'Description: '+info.event.start)
                        }}
                    />
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

    getFamousEvents = (offset, nextPageOffset) => {
        return this.props.famousEvents.map((term, index) => {
            return (
                <FamousEventTerm term={term} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
            );
        }).filter((famousEvent, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default FamousEventList;