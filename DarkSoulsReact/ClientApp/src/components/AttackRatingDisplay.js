import React, { Component } from 'react';

export class AttackRatingDisplay extends Component {
    displayName = AttackRatingDisplay.name

    render() {
        const totalPhysical = this.props.totalPhysical;
        const totalMagic = this.props.totalMagic;
        const totalFire = this.props.totalFire;
        const totalLightning = this.props.totalLightning;

        const strScaling = this.props.strScaling;
        const dexScaling = this.props.dexScaling;
        const intScaling = this.props.intScaling;
        const fthScaling = this.props.fthScaling;

        const totalAttackRating = this.props.totalPhysical + this.props.totalMagic + this.props.totalFire + this.props.totalLightning;

        return (
            <div>
                <h2>{this.props.weaponDisplayName}</h2>
                <h3>{Math.floor(totalAttackRating)}</h3>
                <span className="physical">{Math.floor(totalPhysical)}</span>
                &nbsp;/&nbsp;
                <span className="magic">{Math.floor(totalMagic)}</span>
                &nbsp;/&nbsp;
                <span className="fire">{Math.floor(totalFire)}</span>
                &nbsp;/&nbsp;
                <span className="lightning">{Math.floor(totalLightning)}</span>
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