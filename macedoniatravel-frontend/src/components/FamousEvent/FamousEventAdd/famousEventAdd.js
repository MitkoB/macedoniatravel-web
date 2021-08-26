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
                               placeholder="Enter event title"
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
                               placeholder="Enter event description"
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
                               placeholder="Enter start date"
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
                               placeholder="Enter end date"
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
                               placeholder="Enter event picture"
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
                               placeholder="Enter event location"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FamousEventAdd;
