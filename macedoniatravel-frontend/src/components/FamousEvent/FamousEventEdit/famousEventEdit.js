import React from 'react';
import {useHistory} from 'react-router-dom';

const FamousEventEdit = (props) => {

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
        const title = formData.title !== "" ? formData.title : props.famousEvent.title;
        const description = formData.description !== "" ? formData.description : props.famousEvent.description;
        const start = formData.start !== "" ? formData.start : props.famousEvent.start;
        const end = formData.title !== "" ? formData.end : props.famousEvent.end;
        const picture = formData.picture !== "" ? formData.picture : props.famousEvent.picture;
        const location = formData.location !== "" ? formData.location : props.famousEvent.location;



        props.onEditFamousEvent(props.famousEvent.id, title,description,start,end, picture, location);
        history.push("/famous-events");
    }
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Event title</label>
                        <input type="text"
                               className="form-control"
                               id="title"
                               name="title"
                               required
                               placeholder={props.famousEvent.title}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            required
                            placeholder={props.famousEvent.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Start date</label>
                        <input type="text"
                               className="form-control"
                               id="start"
                               name="start"
                               required
                               placeholder={props.famousEvent.start}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">End date</label>
                        <input type="text"
                               className="form-control"
                               id="end"
                               name="end"
                               required
                               placeholder={props.famousEvent.end}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Event picture url</label>
                        <input type="text"
                               className="form-control"
                               id="picture"
                               name="picture"
                               required
                               placeholder={props.famousEvent.picture}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Event location</label>
                        <input type="text"
                               className="form-control"
                               id="location"
                               name="location"
                               required
                               placeholder={props.famousEvent.location}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FamousEventEdit;
