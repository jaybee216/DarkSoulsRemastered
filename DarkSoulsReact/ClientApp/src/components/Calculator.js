import React, { Component } from 'react';
import { SelectInput } from './SelectInput';

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
            loading: true
        }

        this.handleBaseWeaponChange = this.handleBaseWeaponChange.bind(this);
        this.handleInfusionChange = this.handleInfusionChange.bind(this);
        this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
    }

    componentWillMount() {
        fetch('api/Weapons/BaseWeapons')
            .then(response => response.json())
            .then(data => {
                this.setState({ baseWeapons: data, loading: false });
            });
    }

    handleBaseWeaponChange(event) {
        const target = event.target;
        const baseWeaponId = target.value;

        this.setState({
            selectedBaseWeapon: baseWeaponId
        });

        fetch(`api/Weapons/${baseWeaponId}/Infusions`)
            .then(response => response.json())
            .then(data => {
                this.setState({ infusions: data });
            });
    }

    handleInfusionChange(event) {
        const target = event.target;
        const infusionId = target.value;

        this.setState({
            selectedInfusion: infusionId
        });

        fetch(`api/Weapons/Infusions/${infusionId}/Upgrades`)
            .then(response => response.json())
            .then(data => {
                this.setState({ upgrades: data });
            });
    }

    handleUpgradeChange(event) {
        this.setState({
            selectedUpgrade: event.target.value
        });
    }

    renderCalculator() {
        return (
            //<div>
            //    <select value={this.state.selectedBaseWeapon} onChange={this.handleBaseWeaponChange}>
            //        {this.state.baseWeapons.map(weapon =>
            //            <option key={weapon.baseWeaponId} value={weapon.baseWeaponId}>
            //                {weapon.name}
            //            </option>
            //        )}
            //    </select>
            //    <select value={this.state.selectedInfusion} onChange={this.handleInfusionChange}>
            //        {this.state.infusions.map(infusion =>
            //            <option key={infusion.infusionId} value={infusion.infusionId}>
            //                {infusion.name}
            //            </option>
            //        )}
            //    </select>
            //    <select value={this.state.selectedUpgrade} onChange={this.handleUpgradeChange}>
            //        {this.state.upgrades.map(upgrade =>
            //            <option key={upgrade.weaponUpgradeId} value={upgrade.weaponUpgradeId}>
            //                {upgrade.name}
            //            </option>
            //        )}
            //    </select>
            //</div>
            <div>
                <SelectInput name="baseWeapon"
                    options={this.state.baseWeapons}
                    selectedOption={this.state.selectedBaseWeapon.baseWeaponId}
                    onSelectOptionChange={this.handleBaseWeaponChange} />
                <SelectInput name="infusion"
                    options={this.state.infusions}
                    selectedOption={this.state.selectedInfusion.infusionId}
                    onSelectOptionChange={this.handleInfusionChange} />
                <SelectInput name="upgrade"
                    options={this.state.upgrades}
                    selectedOption={this.state.selectedUpgrade.weaponUpgradeId}
                    onSelectOptionChange={this.handleUpgradeChange} />
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCalculator();

        return (
            <div>
                <h1>Weapons</h1>
                {contents}
            </div>
        );
    }
}