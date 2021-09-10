import React from "react";
import Chart from "react-google-charts";
import {Link, useParams} from 'react-router-dom';
import TokenService from "../../../repository/tokenRepository";
import RouteService from "../../../repository/routeRepository";
import '../RouteTerm/routeTermCss.css'
import Carousel from "react-grid-carousel";
import AttractionCard from '../../Attraction/AttractionTerm/attractionCardItem'


const RouteDetail = (props) => {
    const currentUser = TokenService.getUser().username;
    const isAdmin = TokenService.getUser().roles;
    const {id} = useParams();
    const [constructorHasRun, setConstructorHasRun] = React.useState(false);
    const [route, setRoute] = React.useState(props.route);
    const [reviews, setReviews] = React.useState(props.reviews);
    const [reviewComment, setComment] = React.useState({
        comment: ""
    });
    const [rating, setRating] = React.useState(0);
    const [selection, setSelection] = React.useState(0);
    const [grades, setGrades] = React.useState([])

    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute('data-star-id'))
            val = event.target.getAttribute('data-star-id');
        setSelection(val);
    };

    React.useEffect(() => {
        if (props.route.name !== undefined) {
            setRoute(props.route);
        }
        setReviews(props.reviews)
        RouteService.fetchGrades(id).then((data) => {
            setGrades(data.data);
        })
    },[props.route, props.reviews])

    const constructor = () => {
        if (constructorHasRun) return;
        RouteService.getRoute(id).then((data) => {
            setRoute(data.data);
        })

        RouteService.fetchRouteReviews(id).then((data) => {
            setReviews(data.data)
        })
        RouteService.fetchGrades(id).then((data) => {
            setGrades(data.data);
        })
        setConstructorHasRun(true)
    };
    constructor();


    const handleChange = (e) => {
        setComment({
            ...reviewComment,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const comment = reviewComment.comment;
        const grade = rating;
        document.getElementById("comment").value="";
        setRating(0);
        props.onAddReview(id, comment, grade);
    }


    return (
        <section className="mb-5 container" id="routeDetails">
            <div className="row firstRouteTermRow">
                <div className="col">
                    <h2>{route?.name}</h2>
                    <p className="mb-2 text-muted text-uppercase small">Tour</p>
                    <p className="pt-1">Rating: <b>{(grades[0] * 1 + grades[1] * 2 + grades[2] * 3
                        + grades[3] * 4 + grades[4] * 5) / (reviews.length) || 0}</b></p>
                    <p><span className="mr-1"><strong>$ {route?.price}</strong></span></p>
                    <p className="pt-1">{route?.description}</p>
                    <div className="table-responsive">
                        <table className="table table-sm table-borderless mb-0">
                            <tbody>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>Organized by:</strong></th>
                                <td>{route?.user?.email}</td>
                            </tr>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>Start date:</strong></th>
                                <td>{route?.startDate?.split("T")[0]} {route?.startDate?.split("T")[1]}</td>
                            </tr>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>End date:</strong></th>
                                <td>{route?.endDate?.split("T")[0]} {route?.endDate?.split("T")[1]}</td>
                            </tr>

                            {isAdmin == "ROLE_ADMIN" && (
                                <tr>
                                    <td>
                                        <Link type="button" className="btn btn-danger"
                                              onClick={() => props.onDelete(id)}
                                              to={"/routes"}>Delete</Link>
                                    </td>
                                    <td>
                                        <Link type="button" className="btn btn-info mx-5"
                                              onClick={() => props.onEdit(id)}
                                              to={`/routes/edit/${route.id}`}>Edit</Link>
                                    </td>
                                </tr>)
                            }

                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <Link to={`/favorite-cart`}
                          onClick={() => props.onAddItemInFavoriteCart(id)}
                          type="button" className="btn btn-primary btn-md mr-1 mb-2" id="searchBtn">Add to chart
                    </Link>
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                    <div id="mdb-lightbox-ui"/>
                    <div className="mdb-lightbox">
                        <div className="row product-gallery mx-1">
                            <div className="col-12 mb-0">
                                <figure className="view overlay rounded z-depth-1 imgRouteFigure">
                                    <img className="imgRoute" src={route?.pictures} alt={"img"}/>
                                </figure>
                            </div>
                            <div className="col-12">
                                <h6 className="mx-4">Included attractions in this route:</h6>
                                <Carousel cols={3} rows={1} gap={10} loop>
                                    {route?.attractions?.map((term) => {
                                        return <Carousel.Item><AttractionCard term={term} onSelect={props?.onSelect}/></Carousel.Item>
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="p-3 bg-light rowContainer">
                        <h4 className="text-left">Add a review</h4>
                        <hr className="h_line"/>
                        <form className="text-center" onSubmit={onFormSubmit}>
                            <textarea
                                name="comment"
                                id="comment"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Write your comment here..."
                                required/>
                            <span className="d-inline float-start mt-2">Rate:</span>
                            <div className="d-inline mx-5"
                                 onMouseOut={() => hoverOver(null)}
                                 onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
                                 onMouseOver={hoverOver}>
                                {Array.from({length: 5}, (v, i) => (
                                    <Star
                                        starId={i + 1}
                                        key={`star_${i + 1}`}
                                        marked={selection ? selection >= i + 1 : rating >= i + 1}
                                    />
                                ))}
                            </div>
                            <button type="submit"
                                    className="btn btn-success text-white d-inline mt-2 float-end submitReview">
                                Submit
                            </button>
                        </form>
                        <hr className="h_line"/>
                        <h2 className="text-left mt-2">Reviews</h2>
                        <hr className="h_line"/>
                        {reviews?.map((term) => {
                            return (
                                <div className="media p-2 container mb-5">
                                    <div className="media-body text-start">
                                        <h5 className="d-inline font-weight-bold">{term?.user?.email}</h5>
                                        <span className="d-inline small"> on </span>
                                        <span
                                            className="d-inline small">{term?.timeCreated?.split("T")[0]} in {term?.timeCreated?.split("T")[1]}h</span>
                                        <br/>
                                        <span className="insertGrade">Rating: <b>{term?.grade}</b></span>
                                        <p>Comment: {term?.comment}</p>
                                        {currentUser == term?.user?.email && (
                                            <button type="submit"
                                                    className="btn btn-link btn-md text-white  btn-danger d-inline float-start"
                                                    onClick={() => props.onRemoveReview(term?.id, id)}>Delete
                                            </button>
                                        )}
                                        {isAdmin == "ROLE_ADMIN" && (
                                            <button type="submit"
                                                    className="btn btn-link btn-md text-white  btn-danger d-inline float-end"
                                                    onClick={() => props.onRemoveReview(term?.id, id)}>Admin Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col">
                    <Chart
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Review Chart</div>}
                        data={[
                            ['Review', 'Rating'],
                            ['Excellent', grades[4]],
                            ['Very good', grades[3]],
                            ['Good', grades[2]],
                            ['Poor', grades[1]],
                            ['Very poor', grades[0]],
                        ]}
                        options={{
                            title: 'Route Review',
                            is3D: true,
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
                </div>
            </div>
        </section>
    )
}
export default RouteDetail;
const Star = ({marked, starId}) => {
    return (
        <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
    );
};