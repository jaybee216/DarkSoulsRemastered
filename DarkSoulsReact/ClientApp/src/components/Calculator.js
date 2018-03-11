import React, { Component } from 'react';
import { SelectInput } from './SelectInput';
import {WeaponDetails} from './WeaponDetails';

export class Calculator extends Component {
    displayName = Calculator.name

    constructor(props) {
        super(props);
        this.state = {
            baseWeapons: [],
            selectedBaseWeapon: '',
            infusions: [],
            selectedInfusion: '',
            upgrades: [],
            selectedUpgrade: '',
            loading: true,
            weaponDetails: null
        }

        this.handleBaseWeaponChange = this.handleBaseWeaponChange.bind(this);
        this.handleInfusionChange = this.handleInfusionChange.bind(this);
        this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
    }

    componentWillMount() {
        fetch('api/Weapons/BaseWeapons')
            .then(response => response.json())
            .then(data => {
                this.setState({ baseWeapons: data, selectedBaseWeapon: data[0], loading: false });
                this.handleBaseWeaponChange(data[0].id);
            });
    }

    handleBaseWeaponChange(id) {
        var baseWeapon = this.state.baseWeapons.find(w => w.id === parseInt(id, 0));

        this.setState({
            selectedBaseWeapon: baseWeapon
        });

        fetch(`api/Weapons/${id}/Infusions`)
            .then(response => response.json())
            .then(data => {
                this.setState({ infusions: data, selectedInfusion: data[0]});
                this.handleInfusionChange(data[0].Id);
            });
    }

    handleInfusionChange(id) {
        var infusion = this.state.infusions.find(i =>i.id === parseInt(id, 0));

        this.setState({
            selectedInfusion: infusion
        });

        //Get the compatible weapon upgrades for this Infusion type
        fetch(`api/Weapons/Infusions/${id}/Upgrades`)
            .then(response => response.json())
            .then(data => {
                this.setState({ upgrades: data, selectedUpgrade: data[0] });
                this.handleUpgradeChange(data[0].Id);
            });

        //Retrieve the stats for this Base Weapon + Infusion combination
        fetch(`api/Weapons/${this.state.selectedBaseWeapon.id}/Infusions/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ weaponDetails: data });
            });
    }

    handleUpgradeChange(id) {
        var upgrade = this.state.upgrades.find(u => u.id === parseInt(id, 0));

        this.setState({
            selectedUpgrade: upgrade
        });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCalculator();

        return (
            <div>
                <h1>AR Calculator</h1>
                {contents}
            </div>
        );
    }

    renderCalculator() {
        return (
            <div>
                <div>
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
                </div>
                <div>
                    <WeaponDetails weapon={this.state.weaponDetails} />
                </div>
            </div>
        );
    }
}