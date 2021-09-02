import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import TouristAttractionTerm from '../AttractionTerm/attractionTermCardItem'
import '../AttractionTerm/attractionCss.css'

class AttractionList extends React.Component {
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
        const pageCount = Math.ceil(this.props.attractions.length / this.state.size);
        const attractions = this.getAttractionsPage(offset, nextPageOffset);

        return (
            <div className="container attractions-con text-center">
                <h2 className="text-center">See most famous attractions in Macedonia</h2>
                <div className="container text-center mt-5">
                    {attractions}
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

    getAttractionsPage = (offset, nextPageOffset) => {
        return this.props.attractions.map((term, index) => {
            return (
                <TouristAttractionTerm term={term} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
            );
        }).filter((route, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default AttractionList;