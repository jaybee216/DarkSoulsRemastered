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
                <p>This app is a work in progress. Expect new features to be added, bugs to be fixed, data corrections to be made, and for the look and feel to evolve over time.</p>
                
                <Link to={'/calculator'}><Button bsStyle="primary" bsSize="large">Go to Calculator</Button></Link>
                
                <h2>Known Issues (Updated 3/15/18)</h2>
                <ul>
                    <li>AR is not always immediately shown for the default-selected weapon on page load</li>
                    <li>AR calculations for Bows and Crossbows do not yet account for the Arrow/Bolt equipped</li>
                    <li>Magic Adjust is not being calculated for Staves and Talismans</li>
                </ul>
                <h2>Planned Features/Additions (Updated 3/16/18)</h2>
                <ul>
                    <li>Implement ability to select multiple weapons and compare their damage stats</li>
                    <li>Allow the user to filter and sort the Weapon list</li>
                    <li>Add ability to filter weapons by category</li>
                    <li>Add ability to toggle between showing basic or detailed damage information</li>
                    <li>Display an infographic showing scaling corrections for STR/DEX/INT/FTH from 1-99</li>
                    <li>Add ability to choose Arrow/Bolt for Bows and Crossbows</li>
                </ul>
                <h2>Changelog</h2>
                <h3>v0.1.4 - 3/19/18</h3>
                <ul>
                    <li>Added option to two-hand weapon</li>
                    <li>Added option to display scaling as letter grades or percentages</li>
                    <li>Implemented Humanity scaling for Chaos weapons and for Quelaag's Furysword</li>
                    <li>Minimum attribute requirements are now respected</li>
                </ul>
                <h3>v0.1.3 - 3/16/18</h3>
                <ul>
                    <li>Fixed a bug that was preventing the user from temporarily clearing the input fields for character attributes (very annoying for Mobile)</li>
                    <li>Weapon list is now sorted A-Z</li>
                </ul>
                <h3>v0.1.2 - 3/15/18</h3>
                <ul>
                    <li>Corrected calculations for Demon (Boss), Special, and Dragon weapons</li>
                    <li>Corrected calculations for Crossbows and Bows (does not include damage for Arrows/Bolts)</li>
                </ul>
                <h3>v0.1.1 - 3/14/18</h3>
                <ul>
                    <li>Corrected calculations for Clubs</li>
                    <li>Show correct Infusions + Upgrades for Crossbows (AR calculations still incorrect)</li>
                </ul>
                <h3>v0.1.0 - 3/13/18: Initial Release</h3>
            </div>
        );
    }
}
