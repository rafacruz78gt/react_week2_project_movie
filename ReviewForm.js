import React from 'react';
import ReviewComponent from './ReviewComponent'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            review: '',
            rating: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "radio" ? this.setState({
            [name]: checked }) : this.setState({[name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const reviewData = {
            name: this.name.value,
            review: this.review.value,
            rating: this.rating.value,
        }
        return reviewData;
    }

    render() {
       return (
           <ReviewComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
        )
    }
}


export default ReviewForm;
