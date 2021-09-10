import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import FamousEventTerm from '../FamousEventTerm/famousEventTerm'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import '../FamousEventList/famousEventList.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import modalStyle from '../FamousEventList/modalCss.css'
import eventImg from '../../../assets/img/events.png'

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

class FamousEventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 2,
            modal: false,
            event: {
                title: "",
                location: "" ,
                description: "",
                picture:"",
                start: new Date(),
                end: new Date()
            }

        }
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };
    handleEventClick = ({ event, el }) => {
        this.toggle();
        this.setState({ event });
    };

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.famousEvents.length / this.state.size);
        const famousEvents = this.getFamousEvents(offset, nextPageOffset);

        return (
            <div className="container events-con text-center mt-5">
                <div className="divider"><span/><span>FAMOUS EVENTS</span><span/></div>
                <div className="container calendarContainer mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: "prev,next",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        events={this.props.famousEvents}
                        editable={true}
                        selectable={true}
                        eventBackgroundColor={"#001c35"}
                        eventClick={this.handleEventClick}

                    />
                            <Modal
                                style={modalStyle}
                                isOpen={this.state.modal}
                                toggle={this.toggle}
                                className={this.props.className}
                            >
                                <ModalHeader toggle={this.toggle}>
                                    {this.state.event.title}
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <img className={"mb-2"} src={this.state.event.extendedProps?.picture}/>
                                        <p>Start date: {this.state.event.start.toISOString().split("T")[0]}</p>
                                        <p>End date: {this.state.event.end.toISOString().split("T")[0]}</p>
                                        <p>Location: {this.state.event.extendedProps?.location}</p>
                                        <p>{this.state.event.extendedProps?.description}</p>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggle}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className="col">
                            <img alt={"event"} src={eventImg}/>
                        </div>
                    </div>
                </div>
                <div className="container dark">
                    {famousEvents}
                </div>

                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    breakLabel={<a href="/#">...</a>}
                    breakClassName={"break-me"}
                    pageClassName={"ml-1"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}/>

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