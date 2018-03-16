import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';

export class Footer extends Component {
    displayName = Footer.name

render() {
    return (
        <footer className="navbar-fixed-bottom">
            <p>&copy; 2018 negator13 &nbsp;&nbsp;&nbsp;&nbsp; <Link to={'https://www.reddit.com/message/compose/?to=negator13&subject=calculator'} target='blank'>Feedback</Link></p>
        </footer>
        );
    }
}