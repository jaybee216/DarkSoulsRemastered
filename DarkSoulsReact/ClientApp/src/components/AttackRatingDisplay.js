import React, { Component } from 'react';
import { FormGroup, Checkbox, Button } from 'react-bootstrap';

export class AttackRatingDisplay extends Component {
    displayName = AttackRatingDisplay.name

    constructor(props) {
        super(props);
        this.state = {
            showScalingPercentages : false
        }

        this.toggleScalingPercentages = this.toggleScalingPercentages.bind(this);
    }

    toggleScalingPercentages(e) {
        this.setState({ showScalingPercentages: !this.state.showScalingPercentages});
    }

    render() {
        const totalPhysical = this.props.totalPhysical;
        const totalMagic = this.props.totalMagic;
        const totalFire = this.props.totalFire;
        const totalLightning = this.props.totalLightning;
        const totalAttackRating = this.props.totalPhysical + this.props.totalMagic + this.props.totalFire + this.props.totalLightning;

        let scalingDisplay = this.state.showScalingPercentages ? 
            this.renderScalingPercentages() :
            this.renderScalingGrades();

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
                {scalingDisplay}
            </div>
        );
    }
    
    renderScalingPercentages() {
        const strScaling = this.props.strScaling;
        const dexScaling = this.props.dexScaling;
        const intScaling = this.props.intScaling;
        const fthScaling = this.props.fthScaling;

        return (
            <div>
            <h3>
                Scaling&nbsp;&nbsp;
                <Button bsStyle="primary" bsSize="xsmall" onClick={this.toggleScalingPercentages}>Show Letter Grades</Button>
            </h3>
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

    renderScalingGrades() {
        const strScaling = this.convertToLetterGrade(this.props.strScaling);
        const dexScaling = this.convertToLetterGrade(this.props.dexScaling);
        const intScaling = this.convertToLetterGrade(this.props.intScaling);
        const fthScaling = this.convertToLetterGrade(this.props.fthScaling);

        return (
            <div>
            <h3>
                Scaling&nbsp;&nbsp;
                <Button bsStyle="primary" bsSize="xsmall" onClick={this.toggleScalingPercentages}>Show Percentages</Button>
            </h3>
            <span className="physical">{strScaling}</span>
                &nbsp;/&nbsp;
                <span className="physical">{dexScaling}</span>
                &nbsp;/&nbsp;
                <span className="magic">{intScaling}</span>
                &nbsp;/&nbsp;
                <span className="lightning">{fthScaling}</span>
            </div>
        );
    }

    convertToLetterGrade(scaling) {
        if (200 >= scaling && scaling >= 140) {
            return "S";
        }
        else if (139 >= scaling && scaling >= 100) {
            return "A";
        }
        else if (99 >= scaling && scaling >= 75) {
            return "B";
        }
        else if (74 >= scaling && scaling >= 50) {
            return "C";
        }
        else if (49 >= scaling && scaling >= 25) {
            return "D";
        }
        else if (24 >= scaling && scaling >= 1) {
            return "E";
        }
        else {
            return "-";
        }
    }
}