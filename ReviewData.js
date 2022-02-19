import React from 'react'

//create array to house reviews per movie
class ReviewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            reviews: [], 
        };
    }

    onAddItem = () => {
        this.setState(state => {
            const reviews = state.reviews.concat(state.value);
            return {
                reviews,
                value: "",
            };
        });
    };

    render() {
        return(
            <div>
                <ul>
                    {this.state.reviews.map(item => (
                        <li key={item}>{item}</li> 
                    ))}
                </ul>
            </div>
        );
    }    
}

export default ReviewData;

