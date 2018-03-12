import React, { Component } from 'react';

export class AttackRatingDisplay extends Component {
    displayName = AttackRatingDisplay.name

    constructor(props) {
        super(props);
        this.state = {};
    }

    calculate() {
        
    }

    render() {
        const totalPhysical = this.props.totalPhysical;
        const totalMagic = this.props.totalMagic;
        const totalFire = this.props.totalFire;
        const totalLightning = this.props.totalLightning;

        const strScaling = this.props.strScaling;
        const dexScaling = this.props.dexScaling;
        const intScaling = this.props.intScaling;
        const fthScaling = this.props.fthScaling;

        return (
            <div>
                <h2>{this.props.weaponDisplayName}</h2>
                <span className="physical">{totalPhysical.toFixed(0)}</span>
                &nbsp;/&nbsp;
                <span className="magic">{totalMagic.toFixed(0)}</span>
                &nbsp;/&nbsp;
                <span className="fire">{totalFire.toFixed(0)}</span>
                &nbsp;/&nbsp;
                <span className="lightning">{totalLightning.toFixed(0)}</span>
                <h3>Scaling</h3>
                <span className="physical">{strScaling.toFixed(0)}%</span>
                &nbsp;/&nbsp;
                <span className="physical">{dexScaling.toFixed(0)}%</span>
                &nbsp;/&nbsp;
                <span className="magic">{intScaling.toFixed(0)}%</span>
                &nbsp;/&nbsp;
                <span className="lightning">{fthScaling.toFixed(0)}%</span>
            </div>
        );
    }
}