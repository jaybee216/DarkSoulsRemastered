import React, { Component } from 'react';
import { FormGroup, Checkbox, Button } from 'react-bootstrap';

export class RequirementsNotMetDisplay extends Component {
    displayName = RequirementsNotMetDisplay.name
    
    render() {
        const requiredStrength = this.props.requiredStrength;
        const requiredDexterity = this.props.requiredDexterity;
        const requiredIntelligence = this.props.requiredIntelligence;
        const requiredFaith = this.props.requiredFaith;
        
        return (
            <div>
                <h2>{this.props.weaponDisplayName}</h2>
                <h3>Requirements Not Met</h3>
                <span className="physical">{requiredStrength}</span>
                &nbsp;/&nbsp;
                <span className="physical">{requiredDexterity}</span>
                &nbsp;/&nbsp;
                <span className="magic">{requiredIntelligence}</span>
                &nbsp;/&nbsp;
                <span className="lightning">{requiredFaith}</span>
            </div>
        );
    }
}