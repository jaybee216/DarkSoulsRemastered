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
                <span class="physical">{totalPhysical}</span>
                &nbsp;/&nbsp;
                <span class="magic">{totalMagic}</span>
                &nbsp;/&nbsp;
                <span class="fire">{totalFire}</span>
                &nbsp;/&nbsp;
                <span class="lightning">{totalLightning}</span>
                &nbsp;/&nbsp;
            </div>
        );
    }
}