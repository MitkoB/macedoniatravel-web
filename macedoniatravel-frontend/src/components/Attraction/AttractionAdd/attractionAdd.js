import React from 'react';
import {useHistory} from 'react-router-dom';
import '../AttractionEdit/attractionEditCss.css'

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

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const latitude = formData.latitude;
        const longitude = formData.longitude;
        const location = formData.location;
        const description = formData.description;
        const pictures = formData.pictures;
        const attractionType = formData.attractionType;

        props.onAddAttraction(name,latitude,longitude,location, description, pictures, attractionType);
        history.push('/attractions');
    }
    return (
        <body className="body-1">
        <div className="container mt-5 mb-5 edit-con">
            <div className="row" id="creationRow">
                <div className="creation-form mt-5">
                    <div className="creation-bg">
                        <div className="form-header">
                            <h2>Add Tourist Attraction</h2>
                            <p> Macedonia is probably one of the most fascinating tourist destinations in Europe.
                                Add tourist attraction with valid information.
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
                                           placeholder="Enter attraction name"
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
                                           placeholder="Enter attraction latitude"
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
                                           placeholder="Enter attraction longitude"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="form-label">Attraction type</span>
                            <select name="attractionType" className="form-control" onChange={handleChange} required>
                                {props.attractionTypes.map((term) => {
                                     return <option value={term}>{term}</option>
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
                                           placeholder="Enter attraction location"
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
                                           placeholder="Enter attraction picture"
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Attraction description</span>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        required
                                        placeholder="Enter description"
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
