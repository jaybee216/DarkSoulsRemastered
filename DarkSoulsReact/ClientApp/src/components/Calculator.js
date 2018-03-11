import React, { Component } from 'react';
import { SelectInput } from './SelectInput';
import {WeaponDetails} from './WeaponDetails';
import {AttackRatingDisplay} from './AttackRatingDisplay';
import { AttackRatingCalculation } from './AttackRatingCalculation';

export class Calculator extends Component {
    displayName = Calculator.name

    constructor(props) {
        super(props);
        this.state = {
            weaponDetails: null
        };

        
    }

    componentWillReceiveProps(nextProps) {
        const baseWeapon = nextProps.selectedBaseWeapon;
        const infusion = nextProps.selectedInfusion;

        if (!baseWeapon || !infusion) {
            return;
        }

        if (this.props.selectedBaseWeapon && this.props.selectedInfusion &&
            baseWeapon.id === this.props.selectedBaseWeapon.id &&
            infusion.id === this.props.selectedInfusion.id) {
            return;
        }

        //Retrieve the stats for this Base Weapon + Infusion combination
        fetch(`api/Weapons/${nextProps.selectedBaseWeapon.id}/Infusions/${nextProps.selectedInfusion.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ weaponDetails: data });
            });
    }

    render() {
        return (
            <div>
                <div>
                    <p>STR: {this.props.str}&nbsp;DEX: {this.props.dex}&nbsp;INT: {this.props.int}&nbsp;FTH: {this.props.fth}</p>
                </div>
                <div>
                
                </div>
                <div>
                    <AttackRatingCalculation str={this.props.str}
                                            dex={this.props.dex}
                                            int={this.props.int}
                                            fth={this.props.fth}
                                            weapon={this.state.weaponDetails}
                                             upgrade={this.props.selectedUpgrade} />
                </div>

                <div>
                    <WeaponDetails weapon={this.state.weaponDetails} />
                </div>
            </div>
        );
    }
}