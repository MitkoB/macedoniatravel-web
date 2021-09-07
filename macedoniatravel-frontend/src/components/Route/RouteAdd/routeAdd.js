import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import RouteService from "../../../repository/routeRepository";
import '../../Attraction/AttractionEdit/attractionEditCss.css'

const RouteAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        pictures: "",
        routeStatus: 0,
        touristAttractions: [],
        price: ""
    })

    const {id} = useParams();
    const [constructorHasRun, setConstructorHasRun] = React.useState(false);
    const [route, setRoute] = React.useState(props.route);
    const constructor = () => {
        if (constructorHasRun) return;
        RouteService.getRoute(id).then((data) => {
            setRoute(data.data);
        })
        setConstructorHasRun(true);
    };
    constructor();

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const handleChangeAttractions = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        formData.touristAttractions = value
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const description = formData.description;
        const startDate = formData.startDate;
        const endDate = formData.endDate;
        const pictures = formData.pictures;
        const routeStatus = formData.routeStatus;
        const touristAttractions = formData.touristAttractions;
        const price = formData.price;

        props.onAddRoute(name, description, startDate, endDate, pictures, routeStatus, touristAttractions, price);
        history.push("/routes");
    }
    return (
        <body className="body-1">
        <div className="container mt-5 mb-5 edit-con">
            <div className="row" id="creationRow">
                <div className="creation-form mt-5">
                    <div className="creation-bg">
                        <div className="form-header">
                            <h2>Add Travel Route</h2>
                            <p> Macedonia is probably one of the most fascinating tourist destinations in Europe.
                                Add new travel route with valid information.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={onFormSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Route name</span>
                                    <input type="text"
                                           className="form-control"
                                           id="name"
                                           name="name"
                                           required
                                           placeholder="Enter route name"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-inline">
                                <div className="form-group">
                                    <span className="form-label">Start date</span>
                                    <input type="text"
                                           className="form-control"
                                           id="startDate"
                                           name="startDate"
                                           required
                                           placeholder="Enter start date in format YYYY-MM-DD hh:mm"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-md-6 d-inline">
                                <div className="form-group">
                                    <span className="form-label">End date</span>
                                    <input type="text"
                                           className="form-control"
                                           id="endDate"
                                           name="endDate"
                                           required
                                           placeholder="Enter route end date in format YYYY-MM-DD hh:mm"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-inline">
                                <div className="form-group">
                                    <span className="form-label">Route status</span>
                                    <select name="routeStatus" className="form-control" onChange={handleChange}
                                            required>
                                        {props.routeStatuses.map((term) => {
                                             return <option value={term}>{term}</option>
                                        })}
                                    </select>
                                    <span className="select-arrow"/>
                                </div>
                            </div>
                            <div className="col-md-6 d-inline">
                                <div className="form-group">
                                    <span className="form-label">Route price</span>
                                    <input type="text"
                                           className="form-control"
                                           id="price"
                                           name="price"
                                           required
                                           placeholder="Enter route price"
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Route picture</span>
                                    <input type="text"
                                           className="form-control"
                                           id="pictures"
                                           name="pictures"
                                           required
                                           placeholder="Enter route picture"
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <span className="form-label">Route attractions</span>
                                <select name="touristAttractions" className="form-control"
                                        onChange={handleChangeAttractions} multiple={true} required>
                                    {props.attractions?.map((term) =>
                                        <option value={term.id}>{term.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Route description</span>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        required
                                        placeholder="Enter route description"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-btn">
                            <button className="submit-btn" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </body>
    )
}
export default RouteAdd;
