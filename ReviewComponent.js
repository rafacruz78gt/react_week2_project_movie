import React from 'react';
import Rating from './Rating'


function ReviewComponent(props) {
    return (
        <div className="flex-container">
            <form onSubmit={props.handleSubmit}>
                <label>Name:
                    <input 
                        type="text"
                        value={props.name} 
                        onChange={props.handleChange} 
                        name="name" 
                        placeholder="Please enter your name"
                    />
                </label>    
                <br />
                <label>Review:
                    <textarea 
                        type="textarea"
                        value={props.review} 
                        onChange={props.handleChange} 
                        name="review" 
                        placeholder="Please enter your comments here"
                    />
                </label>    
                <br />
                <div className="rating"> 
                    <Rating 
                        value={props.rating} 
                        onChange={props.handleChange}
                        name="rating"  
                    />
                </div> 
                <br />
                <button>Submit</button>
            </form>
        </div>
    ) 
}

export default ReviewComponent
