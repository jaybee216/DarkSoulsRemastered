import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {Calculator} from './Calculator';
import { SelectInput } from './SelectInput';

export class CalculatorForm extends Component {
displayName = CalculatorForm.name

    constructor(props) {
        super(props);
        this.state = {
            STR: 1,
            DEX: 1,
            INT: 1,
            FTH: 1,
            baseWeapons: [],
            selectedBaseWeapon: null,
            infusions: [],
            selectedInfusion: null,
            upgrades: [],
            selectedUpgrade: null,
            loading: true
        }

        this.handleChange = this.handleChange.bind(this);

        this.handleBaseWeaponChange = this.handleBaseWeaponChange.bind(this);
        this.handleInfusionChange = this.handleInfusionChange.bind(this);
        this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
    }

    componentWillMount() {
        fetch('api/Weapons/BaseWeapons')
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    baseWeapons: data, 
                    selectedBaseWeapon: data[0], 
                    loading: false 
                });
            });
    }

    //TODO: Ensure only a valid integer within [1, 99]
    //Implement custom control with +/- arrows to change value rather than plain inputs
    handleChange(e) {
        var previousValue = this.state[e.target.name];
        var value = (e.target.validity.valid) ? e.target.value : this.state[e.target.name];
        value = value === "" ? previousValue : value;
        this.setState({[e.target.name]: value });
    }

    handleBaseWeaponChange(id) {
        if (this.state.selectedBaseWeapon && 
            this.state.selectedBaseWeapon.id === id &&
            this.state.infusions.length > 0) {
            return;
        }

        var baseWeapon = this.state.baseWeapons.find(w => w.id === parseInt(id, 0));

        fetch(`api/Weapons/${id}/Infusions`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    selectedBaseWeapon: baseWeapon, 
                    infusions: data, 
                    selectedInfusion: data[0],
                    upgrades: [],
                    selectedUpgrade: null
                });
            });
    }

    //Why does this get called multiple times when changing weapon?
    handleInfusionChange(id) {
        if (this.state.selectedInfusion && 
            this.state.selectedInfusion.id === id &&
            this.state.upgrades.length > 0) {
            return;
        }

        var infusion = this.state.infusions.find(i =>i.id === parseInt(id, 0));

        //Get the compatible weapon upgrades for this Infusion type
        fetch(`api/Weapons/Infusions/${id}/Upgrades`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    selectedInfusion: infusion, 
                    upgrades: data, selectedUpgrade: data[0] 
                });
            });
    }

    handleUpgradeChange(id) {
        if (this.state.selectedUpgrade && this.state.selectedUpgrade.id === id) {
            return;
        }

        var upgrade = this.state.upgrades.find(u => u.id === parseInt(id, 0));

        this.setState({
            selectedUpgrade: upgrade
        });
    }


    render() {
        //TODO: Use bootstrap components, not fieldset + legend
        return (
            <div>
            <h1>AR Calculator</h1>
            <Row>
                <Col sm={3}>
                    <fieldset>
                        <legend>STR:</legend>
                            <input name="STR"
                                type="number" min="1" max="99"
                                value={this.state.STR}
                                onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>DEX:</legend>
                            <input name="DEX"
                                type="number" min="1" max="99"
                                value={this.state.DEX}
                                onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>INT:</legend>
                            <input name="INT"
                                type="number" min="1" max="99"
                                value={this.state.INT}
                                onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>FTH:</legend>
                            <input name="FTH"
                                type="number" min="1" max="99"
                                value={this.state.FTH}
                                onChange={this.handleChange} />
                    </fieldset>
                </Col>
                <Col sm={9}>
                <SelectInput name="baseWeapon"
                    options={this.state.baseWeapons}
                    selectedOption={this.state.selectedBaseWeapon}
                    onSelectOptionChange={this.handleBaseWeaponChange} />
                <SelectInput name="infusion"
                    options={this.state.infusions}
                    selectedOption={this.state.selectedInfusion}
                    onSelectOptionChange={this.handleInfusionChange} />
                <SelectInput name="upgrade"
                    options={this.state.upgrades}
                    selectedOption={this.state.selectedUpgrade}
                    onSelectOptionChange={this.handleUpgradeChange} />
                <Calculator  selectedBaseWeapon={this.state.selectedBaseWeapon}
                selectedInfusion={this.state.selectedInfusion}
                                selectedUpgrade={this.state.selectedUpgrade}
                                str={this.state.STR}
                                dex={this.state.DEX}
                                int={this.state.INT}
                                fth={this.state.FTH} />
                </Col>
            </Row>
            </div>
        )
    }
}