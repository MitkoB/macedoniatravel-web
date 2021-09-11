import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import RouteCard from '../RouteTerm/RouteMainCardItem/routeMainCardItem'
import RouteTerm from '../RouteTerm/RouteCardItem/routeCardItem'
import '../RouteList/routesCss.css'
import Carousel from "react-grid-carousel";
import RouteService from "../../../repository/routeRepository";


class RouteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 6,
            name: "",
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.routes.length / this.state.size);
        const routes = this.getRoutesPage(offset, nextPageOffset);


        const handleChange = (e) => {
            this.setState({
                name: e.target.value.trim()
            })
        }

        const onFormSubmit = (e) => {
            e.preventDefault();
            const name = this.state.name;
            this.props.onSearchRoute(name);
        }

        const pdfExportClick = (e) => {
          RouteService.exportRoutes().then(response => {
                const blob = new Blob([response.data], {
                    type: 'application/pdf',
                });
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = url;
              a.download = "routes.pdf";
              a.click();
            });
        }



        return (
            <div className="container routes-con text-center mt-5">
                <div className="divider"><span/><span>ROUTES</span><span/></div>
                <Link type="submit"
                      to={"/routes"}
                      onClick={pdfExportClick}
                      className="btn btn-primary mt-3  shadow-sm"
                      id="pdfButton">Export Pdf</Link>
                <div className="row mt-3 mb-5">
                    <div className="col-lg-8 mx-auto">
                        <div className="bg-white p-5 rounded shadow">
                            <form onSubmit={onFormSubmit}>
                                <div className="row mb-4">
                                    <div className="form-group col-md-9">
                                        <input id="searchFormControl" type="text"
                                               placeholder="Enter route's name..."
                                               className="form-control form-control-underlined"
                                               onChange={handleChange}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <button type="submit"
                                                className="btn btn-primary rounded-pill btn-block shadow-sm"
                                                id="searchBtn">Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/*POPULAR SECTION*/}
                <div className="row">
                <h4 id="popularSectionTitle" className="text-start mx-4">Top rated</h4>
                <Carousel cols={3} rows={1} gap={10} loop>
                    {this.props.topRoutes.map((term) => {
                      return  <Carousel.Item><RouteTerm term={term} onSelect={this.props.onSelect}/></Carousel.Item>
                    })}
                </Carousel>
                </div>
                <hr id="h_line"/>

                {/*ROUTES*/}
                <div className="row text-center mt-5">
                    {routes}
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

    getRoutesPage = (offset, nextPageOffset) => {
        return this.props.routes.map((term, index) => {
            return (
                <RouteCard term={term}
                           onSelect={this.props.onSelect} />
            );
        }).filter((route, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default RouteList;