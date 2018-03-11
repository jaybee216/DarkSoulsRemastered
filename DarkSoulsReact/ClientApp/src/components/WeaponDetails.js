import React, { Component } from 'react';

export class WeaponDetails extends Component {
    displayName = WeaponDetails.name

    constructor(props) {
        super(props);
    }

    render() {
        let contents = !this.props.weapon
            ? <p><em>No weapon selected</em></p>
            : this.renderDetails();

        return (
            <div>
                <h2>Weapon Details</h2>
                {contents}
            </div>
        );
    }

    renderDetails() {
        const weapon = this.props.weapon;

        return (
            <ul>
                <li>
                    Id: {weapon.id}
                </li>
                <li>
                    Name: {weapon.name}
                </li>
            </ul>
        );
    }
}