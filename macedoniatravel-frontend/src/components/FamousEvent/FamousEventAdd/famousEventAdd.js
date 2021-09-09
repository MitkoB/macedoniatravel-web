import React from 'react';
import {useHistory} from 'react-router-dom';

const FamousEventAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        title: "",
        description:"",
        start: "",
        end: "",
        picture:"",
        location:""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const title = formData.title;
        const description = formData.description;
        const start = formData.start;
        const end = formData.end;
        const picture = formData.picture;
        const location = formData.location;

        props.onAddFamousEvent(title,description,start,end, picture, location);
        history.push("/famous-events");
    }
    return (
        <body className="body-1">
        <div className="container mt-5 mb-5 edit-con">
            <div className="row" id="creationRow">
                <div className="creation-form mt-5">
                    <div className="creation-bg">
                        <div className="form-header">
                            <h2>Add Famous Event</h2>
                            <p> Macedonia is probably one of the most fascinating tourist destinations in Europe.
                                Add famous event with valid information.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={onFormSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Event name</span>
                                    <input type="text"
                                           className="form-control"
                                           id="title"
                                           name="title"
                                           required
                                           placeholder="Enter famous event name"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-inline">
                                <div className="form-group">
                                    <span className="form-label">Event start date</span>
                                    <input type="text"
                                           className="form-control"
                                           id="start"
                                           name="start"
                                           required
                                           placeholder="Enter famous event start date"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col d-inline mx-3">
                                <div className="form-group">
                                    <span className="form-label">Event end date</span>
                                    <input type="text"
                                           className="form-control"
                                           id="end"
                                           name="end"
                                           required
                                           placeholder="Enter famous event end date"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Event location</span>
                                    <input type="text"
                                           className="form-control"
                                           id="location"
                                           name="location"
                                           required
                                           placeholder="Enter event location"
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Event picture</span>
                                    <input type="text"
                                           className="form-control"
                                           id="picture"
                                           name="picture"
                                           required
                                           placeholder="Enter event picture"
                                           onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <span className="form-label">Event description</span>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        required
                                        placeholder="Enter event description"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-btn">
                            <button className="submit-btn" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </body>
    )
}
export default FamousEventAdd;
