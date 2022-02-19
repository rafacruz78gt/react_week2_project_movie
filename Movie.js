import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

import 'bootstrap/dist/css/bootstrap.css';

//import Container from 'react-bootstrap/Container';
//import Container from '../container';

//import Col from '../react-bootstrap/Col';
//import Row from '/react-bootstrap/Row';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container';

//component for movie data, pull data from movieData array
function Movie(props) {
    return (
        
        <div className="movie-card">
            <h3>Movie Title: {props.title}</h3>
            <Container>
                <Row>
                    <Col sm={5}><img src={props.imageUrl} /></Col>
                    <Col sm={7}>
                        <Row>
                            <span className="aveRating">{props.rating}</span>
                        </Row>
                        <Row>
                            <p className="summary">Synopsis: {props.synopsis}</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
            
            <div className="reviewForm">
                <ReviewForm />
            </div>
            <div className="reviewList">
                <ReviewList /> 
            </div>
            
        </div>
    ) 
}

export default Movie;
