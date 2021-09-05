import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import TouristAttractionTerm from '../AttractionTerm/attractionTermCardItem'
import '../AttractionList/attractionsCss.css'
import styles from '../AttractionList/attractionsCss.css';




class AttractionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 9,
            name: "",
            attractionType: 0

        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.attractions.length / this.state.size);
        const attractions = this.getAttractionsPage(offset, nextPageOffset);

        const handleChange = (e) => {
            this.setState({
                name: e.target.value.trim()
            })
        }

        const onFormSubmit = (e) => {
            e.preventDefault();
            const name = this.state.name;
            console.log(name)
            this.props.onSearchAttraction(name);
        }

        return (
            <div className="container attractions-con text-center mt-3">
                <div className="divider"><span/><span>TOURIST ATTRACTIONS</span><span/></div>
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto">
                        <div className="bg-white p-5 rounded shadow">
                            <form onSubmit={onFormSubmit}>
                                <div className="row mb-4">
                                    <div className="form-group col-md-9">
                                        <input id="searchFormControl" type="text"
                                               placeholder="Enter attraction's name..."
                                               className="form-control form-control-underlined"
                                               onChange={handleChange}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <button type="submit"
                                                className="btn btn-primary rounded-pill btn-block shadow-sm" id="searchBtn">Search
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                        <blockquote className="quote-box">
                            <p className="quotation-mark">
                                “
                            </p>
                            <p className="quote-text">
                                Ohrid Lake is the oldest and one of the deepest lakes in Europe.
                                It is estimated to be around 4 million years old and has 200 endemic species.
                            </p>
                            <div className="blog-post-actions">
                                <p className="blog-post-bottom pull-left">
                                    Something about Macedonia
                                </p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <blockquote className="quote-box-2">
                            <p className="quotation-mark">
                                “
                            </p>
                            <p className="quote-text">
                                Kokino is one of the world’s oldest observatories,
                                as recognised by NASA and dating back to the 19th century BC.
                            </p>
                            <div className="blog-post-actions">
                                <p className="blog-post-bottom pull-left">
                                    Something about Macedonia
                                </p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                        <blockquote className="quote-box">
                            <p className="quotation-mark">
                                “
                            </p>
                            <p className="quote-text">
                                The country is old! The ancient kingdom of Macedon dates back to
                                808BC and Skopje is said be around 7,000 years old.
                            </p>
                            <div className="blog-post-actions">
                                <p className="blog-post-bottom pull-left">
                                    Something about Macedonia
                                </p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                        <blockquote className="quote-box-2">
                            <p className="quotation-mark">
                                “
                            </p>
                            <p className="quote-text">
                                It has more mountains and mountain peaks than any other country in the world.
                                Macedonia has around 34 mountain peaks.
                            </p>
                            <div className="blog-post-actions">
                                <p className="blog-post-bottom pull-left">
                                    Something about Macedonia
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>

                {/*ATTRACTIONS*/}
                <div className="row text-center mt-5">
                    {attractions}
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

    getAttractionsPage = (offset, nextPageOffset) => {
        return this.props.attractions.map((term, index) => {
            return (
                <TouristAttractionTerm term={term}
                                       onSelect={this.props.onSelect}/>
            );
        }).filter((route, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default AttractionList;