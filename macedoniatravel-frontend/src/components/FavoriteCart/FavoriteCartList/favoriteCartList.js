import React from "react";
import ReactPaginate from 'react-paginate';
import FavoriteCartItem from '../FavoriteCartTerm/favoriteCartTerm';
import '../FavoriteCartList/favoriteCartCss.css'
import RouteService from "../../../repository/routeRepository";

class FavoriteCartList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 6,
            favoriteCartItems:props.items

        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.state.favoriteCartItems / this.state.size);
        const items = this.getFavoriteCartPage(offset, nextPageOffset);

        return (
            <div className="container favorite-con text-center mt-5">
                <div className="divider"><span/><span>FAVORITE CART</span><span/></div>
                <div className={"row"}>
                    <div className={"table-responsive mt-5"} id="tableFav">
                        <table className={"table table-bordered"}>
                            <thead>
                            <tr>
                                <th scope={"col"}/>
                                <th scope={"col"}>Route</th>
                                <th scope={"col"}>Description</th>
                                <th scope={"col"}>Start Date</th>
                                <th scope={"col"}>End Date</th>
                                <th scope={"col"}>Route Status</th>
                                <th scope={"col"}>Price</th>
                                <th scope={"col"}/>
                            </tr>
                            </thead>
                            <tbody>
                            {items}
                            </tbody>
                        </table>
                    </div>
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

    getFavoriteCartPage = (offset, nextPageOffset) => {
        return this.state.favoriteCartItems.map((term, index) => {
            return (
                <FavoriteCartItem term={term} onRemove={this.props.onRemove}/>
            );
        }).filter((item, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
    loadFavoriteCartItems = () => {
        RouteService.fetchFavoriteCartItems()
            .then((data) => {
                this.setState({
                    favoriteCartItems: data.data
                })
            });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.items != this.props.items) {
            this.loadFavoriteCartItems();
        }
    }
}
export default FavoriteCartList;