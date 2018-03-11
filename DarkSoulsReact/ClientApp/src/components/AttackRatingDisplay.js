import React, { Component } from 'react';

export class AttackRatingDisplay extends Component {
    displayName = AttackRatingDisplay.name

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const totalPhysical = this.props.totalPhysical;
        const totalMagic = this.props.totalMagic;
        const totalFire = this.props.totalFire;
        const totalLightning = this.props.totalLightning;
        return (
            <div>
                <h2>{this.props.weaponDisplayName}</h2>
                <span class="physical">{totalPhysical.toFixed(0)}</span>
                &nbsp;/&nbsp;
                <span class="magic">{totalMagic.toFixed(0)}</span>
                &nbsp;/&nbsp;
                <span class="fire">{totalFire.toFixed(0)}</span>
                &nbsp;/&nbsp;
                <span class="lightning">{totalLightning.toFixed(0)}</span>
            </div>
        );
    }
}