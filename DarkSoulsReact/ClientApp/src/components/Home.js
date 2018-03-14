import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>
                <h1>Dark Souls Remastered</h1>
                <p>Welcome to the (unofficial) <Link to={'/calculator'}>AR Calculator</Link> for Dark Souls Remastered.</p>
                <p>This app is a work in progress. Expect to see new features to be added, bugs to be fixed, data corrections to be made, and for the look and feel to evolve over time.</p>
                
                <Link to={'/calculator'}><Button bsStyle="primary" bsSize="large">Go to Calculator</Button></Link>
                
                <h2>Known Issues (Updated 3/14/18)</h2>
                <ul>
                    <li>AR is not always immediately shown for the default-selected weapon on page load</li>
                    <li>AR calculations for Bows and Crossbows are not correct</li>
                    <li>Magic Adjust is not being calculated for Staves and Talismans</li>
                    <li>Humanity damage bonus is not currently accounted for for Chaos Weapons</li>
                </ul>
                <h2>Planned Features/Additions (Updated 3/14/18)</h2>
                <ul>
                    <li>Add ability to filter weapons by category</li>
                    <li>Add option to two-hand weapon</li>
                    <li>Add ability to toggle between showing scaling as percentages or as letter grades</li>
                    <li>Display an infographic showing scaling corrections for STR/DEX/INT/FTH from 1-99</li>
                </ul>
                <h2>Changelog</h2>
                <ul>
                    <li>3/14/18: Corrected calculations for Clubs, show correct Infusions + Upgrades for Crossbows (AR calculations still incorrect)</li>
                    <li>3/13/18: Initial Release</li>
                </ul>
            </div>
        );
    }
}
