import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import '../AttractionEdit/attractionEditCss.css'
import RouteService from "../../../repository/routeRepository";

const AttractionEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        latitude: "",
        longitude: "",
        location:"",
        description:"",
        pictures:"",
        attractionType:0
    })
    const {id} = useParams();
    const [constructorHasRun, setConstructorHasRun] = React.useState(false);
    const [attraction, setAttraction] = React.useState(props.attraction);
    const constructor = () => {
        if (constructorHasRun) return;
        RouteService.getAttraction(id).then((data) => {
            setAttraction(data.data);
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
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : attraction.name;
        const latitude = formData.latitude !== "" ? formData.latitude : attraction.latitude;
        const longitude = formData.longitude !== "" ? formData.longitude : attraction.longitude;
        const location = formData.location !== "" ? formData.location : attraction.location;
        const description = formData.description !== "" ? formData.description : attraction.description;
        const pictures = formData.pictures !== "" ? formData.pictures : attraction.pictures;
        const attractionType = formData.attractionType !== 0 ? formData.attractionType : attraction.attractionType;

        props.onEditAttraction(attraction.id,name,latitude,longitude,location, description, pictures, attractionType);
        history.push(`/attractions/${attraction.id}`);
    }
    return (
              <body className="body-1">
                <div className="container mt-5 mb-5 edit-con">
                    <div className="row" id="creationRow">
                        <div className="creation-form mt-5">
                            <div className="creation-bg">
                                <div className="form-header">
                                    <h2>Edit Tourist Attraction</h2>
                                    <p> Macedonia is probably one of the most fascinating tourist destinations in Europe.
                                        Edit current tourist attraction with new, valid information.
                                    </p>
                                </div>
                            </div>
                            <form onSubmit={onFormSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <span className="form-label">Attraction name</span>
                                            <input type="text"
                                                   className="form-control"
                                                   id="name"
                                                   name="name"
                                                   required
                                                   placeholder={attraction.name}
                                                   onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Latitude</span>
                                            <input type="text"
                                                   className="form-control"
                                                   id="latitude"
                                                   name="latitude"
                                                   required
                                                   placeholder={attraction.latitude}
                                                   onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <span className="form-label">Longitude</span>
                                            <input type="text"
                                                   className="form-control"
                                                   id="longitude"
                                                   name="longitude"
                                                   required
                                                   placeholder={attraction.longitude}
                                                   onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Attraction type</span>
                                    <select name="attractionType" className="form-control" onChange={handleChange} required>
                                        {props.attractionTypes.map((term) => {
                                            if (attraction.attractionType !== 0 &&
                                                attraction.attractionType === term)
                                                return <option selected={attraction.attractionType}
                                                               value={term}>{term}</option>
                                            else return <option value={term}>{term}</option>
                                        })}
                                    </select>
                                    <span className="select-arrow"/>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <span className="form-label">Attraction location</span>
                                            <input type="text"
                                                   className="form-control"
                                                   id="location"
                                                   name="location"
                                                   required
                                                   placeholder={attraction.location}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <span className="form-label">Attraction picture</span>
                                            <input type="text"
                                                   className="form-control"
                                                   id="pictures"
                                                   name="pictures"
                                                   required
                                                   placeholder={attraction.pictures}
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
export default AttractionEdit;
