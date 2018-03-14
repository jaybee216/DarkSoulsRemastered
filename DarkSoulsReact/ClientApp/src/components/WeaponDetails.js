import React, { Component } from 'react';

export class WeaponDetails extends Component {
    displayName = WeaponDetails.name

    render() {
        let contents = !this.props.weapon
            ? <p><em>No weapon selected</em></p>
            : this.renderDetails();

        return (
            <div>
                <h3>Weapon Details</h3>
                {contents}
            </div>
        );
    }

    renderDetails() {
        const weapon = this.props.weapon;

        return (
            <ul>
                {/*}
                <li>
                    Id: {weapon.id}
                </li>
                */}
                <li>
                    Requirements: {weapon.requiredStrength} / {weapon.requiredAgility} / {weapon.requiredMagic} / {weapon.requiredFaith}
                </li>
                <li>
                    vs. Occult Modifier: {weapon.occultBonus.toFixed(2)}
                </li>
                <li>
                    vs. Divine Modifier: {weapon.divineBonus.toFixed(2)}
                </li>
                <li>
                    Weight: {weapon.weight.toFixed(1)}
                </li>
                <li>
                    Durability: {weapon.durability}
                </li>
            </ul>
        );
    }
}