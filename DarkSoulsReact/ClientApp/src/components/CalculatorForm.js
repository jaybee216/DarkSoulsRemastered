import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Calculator } from './Calculator';
import { SelectInput } from './SelectInput';

export class CalculatorForm extends Component {
    displayName = CalculatorForm.name

    constructor(props) {
        super(props);
        this.state = {
            startingClasses: [],
            selectedStartingClass: null,
            str: 1,
            dex: 1,
            int: 1,
            fth: 1,
            baseWeapons: [],
            selectedBaseWeapon: null,
            infusions: [],
            selectedInfusion: null,
            upgrades: [],
            selectedUpgrade: null,
            cachedUpgrades: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleStartingClassChange = this.handleStartingClassChange.bind(this);
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
                    selectedBaseWeapon: data[0]
                });
            });

        fetch('api/Weapons/StartingClasses')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    startingClasses: data,
                    selectedStartingClass: data[0]
                });
            });
    }

    //TODO: Ensure only a valid integer within [1, 99]
    //Implement custom control with +/- arrows to change value rather than plain inputs
    handleChange(e) {
        var previousValue = this.state[e.target.name];
        var value = (e.target.validity.valid) ? e.target.value : this.state[e.target.name];
        value = value === "" ? previousValue : value;
        this.setState({ [e.target.name]: value });
    }

    handleStartingClassChange(id) {
        var startingClass = this.state.startingClasses.find(c => c.id === parseInt(id, 0));

        this.setState({
            selectedStartingClass: startingClass,
            str: startingClass.strength,
            dex: startingClass.dexterity,
            int: startingClass.intelligence,
            fth: startingClass.faith
        });
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
    
    handleInfusionChange(id) {
        if (this.state.selectedInfusion &&
            this.state.selectedInfusion.id === id &&
            this.state.upgrades.length > 0) {
            return;
        }

        var infusion = this.state.infusions.find(i => i.id === parseInt(id, 0));

        var cachedUpgrades = this.state.cachedUpgrades;

        //Get the compatible weapon upgrades for this Infusion type
        var upgrades = cachedUpgrades[id];

        if (!upgrades) {
            //If the weapon upgrades for this Infusion do not exist in the cache yet,
            //retrieve them from the API
            fetch(`api/Weapons/Infusions/${id}/Upgrades`)
            .then(response => response.json())
            .then(data => {
                cachedUpgrades[id]=data;
                this.setState({
                    selectedInfusion: infusion,
                    cachedUpgrades: cachedUpgrades,
                    upgrades: data, selectedUpgrade: data[0]
                });
            });
        } 
        else {
            this.setState({
                selectedInfusion: infusion,
                upgrades: upgrades, selectedUpgrade:upgrades[0]
            });
        }
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
        return (
            <div>
                <h1>AR Calculator</h1>
                <Row>
                    <Col sm={2}>
                        <Row>
                            <Col sm={12}>
                                <FormGroup>
                                    <ControlLabel>Starting Class</ControlLabel>
                                    <SelectInput name="startingClass"
                                        displayName="Starting Class"
                                        options={this.state.startingClasses}
                                        selectedOption={this.state.selectedStartingClass}
                                        onSelectOptionChange={this.handleStartingClassChange}
                                    />
                                </FormGroup>
                                <Form horizontal>
                                    <FormGroup controlId="strInput">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            STR
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl
                                                name="str"
                                                type="number" min="1" max="99"
                                                value={this.state.str}
                                                onChange={this.handleChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="dexInput">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            DEX
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl
                                                name="dex"
                                                type="number" min="1" max="99"
                                                value={this.state.dex}
                                                onChange={this.handleChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="intInput">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            INT
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl
                                                name="int"
                                                type="number" min="1" max="99"
                                                value={this.state.int}
                                                onChange={this.handleChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="fthInput">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            FTH
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl
                                                name="fth"
                                                type="number" min="1" max="99"
                                                value={this.state.fth}
                                                onChange={this.handleChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <Col sm={3}>
                                <FormGroup>
                                    <ControlLabel>Weapon</ControlLabel>
                                    <SelectInput name="baseWeapon"
                                        displayName="Weapon"
                                        options={this.state.baseWeapons}
                                        selectedOption={this.state.selectedBaseWeapon}
                                        onSelectOptionChange={this.handleBaseWeaponChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <ControlLabel>Infusion</ControlLabel>
                                    <SelectInput name="infusion"
                                        displayName="Infusion"
                                        options={this.state.infusions}
                                        selectedOption={this.state.selectedInfusion}
                                        onSelectOptionChange={this.handleInfusionChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <ControlLabel>Upgrade</ControlLabel>
                                    <SelectInput name="upgrade"
                                        displayName="Upgrade"
                                        options={this.state.upgrades}
                                        selectedOption={this.state.selectedUpgrade}
                                        onSelectOptionChange={this.handleUpgradeChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Calculator selectedBaseWeapon={this.state.selectedBaseWeapon}
                                    selectedInfusion={this.state.selectedInfusion}
                                    selectedUpgrade={this.state.selectedUpgrade}
                                    str={this.state.str}
                                    dex={this.state.dex}
                                    int={this.state.int}
                                    fth={this.state.fth}
                                />
                            </Col>
                        </Row>
                    </Col >
                </Row >
            </div >
        )
    }
}