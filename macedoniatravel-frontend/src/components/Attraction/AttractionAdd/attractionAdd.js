import React from 'react';
import {useHistory} from 'react-router-dom';

const AttractionAdd = (props) => {

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
        history.push("/attractions");
    }
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Attraction name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter attraction name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Attraction latitude</label>
                        <input type="text"
                               className="form-control"
                               id="latitude"
                               name="latitude"
                               required
                               placeholder="Enter attraction latitude"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Attraction longitude</label>
                        <input type="text"
                               className="form-control"
                               id="longitude"
                               name="longitude"
                               required
                               placeholder="Enter attraction longitude"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Attraction location</label>
                        <input type="text"
                               className="form-control"
                               id="location"
                               name="location"
                               required
                               placeholder="Enter attraction location"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Attraction description</label>
                        <textarea
                               className="form-control"
                               id="description"
                               name="description"
                               required
                               placeholder="Enter attraction description"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Attraction pictures url</label>
                        <input type="text"
                               className="form-control"
                               id="pictures"
                               name="pictures"
                               required
                               placeholder="Enter attraction pictures"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Attraction Type</label>
                        <select name="attractionType" className="form-control" onChange={handleChange}>
                            {props.attractionTypes.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AttractionAdd;
