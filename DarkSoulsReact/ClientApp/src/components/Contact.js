import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export class Contact extends Component {
    displayName = Contact.name

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <p>I'd love to hear your feedback! Comments, bug reports and ideas for features are all welcomed.</p>
                <p>Please use <Link to={'https://www.reddit.com/message/compose/?to=negator13&subject=calculator'} target='blank'>this link</Link> to send me feedback.</p>

                <Link to={'https://www.reddit.com/message/compose/?to=negator13&subject=calculator'} target='blank'><Button bsStyle="primary" bsSize="large">Feedback</Button></Link>
            </div>
        );
    }
}
