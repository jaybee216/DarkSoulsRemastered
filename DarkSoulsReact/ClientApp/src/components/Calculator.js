import React, { Component } from 'react';
import { SelectInput } from './SelectInput';
import {WeaponDetails} from './WeaponDetails';
import {AttackRatingDisplay} from './AttackRatingDisplay';

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
            selectedUpgrade: null,
            loading: true,
            weaponDetails: null,
            totalPhysical: 0,
            totalMagic: 0,
            totalFire: 0,
            totalLightning: 0
        };

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

    calculateAttackRating() {
        const weapon = this.state.weaponDetails;
        const upgrade = this.state.selectedUpgrade;

        if (!weapon || !upgrade) {
            return;
        }

        //Weapon: Base Damage
        const physBase = weapon.PhysicalDamage;
        const magicBase = weapon.MagicDamage;
        const fireBase = weapon.FireDamage;
        const lightBase = weapon.LightningDamage;

        //Weapon: Scaling Modifiers
        const strScaling = weapon.CorrectStrengthRate;
        const dexScaling = weapon.CorrectAgility;
        const intScaling = weapon.CorrectMagic;
        const fthScaling = weapon.CorrectFaith;

        //Weapon: Correction values
        const str = this.props.str;
        const dex = this.props.dex;
        const int = this.props.int;
        const fth = this.props.fth;

        var strCorrection = this.calculateCorrectionValuesForStat(str, breakpoints);
        var dexCorrection = this.calculateCorrectionValuesForStat(dex, breakpoints);
        var intCorrection = this.calculateCorrectionValuesForStat(int, breakpoints);
        var fthCorrection = this.calculateCorrectionValuesForStat(fth, breakpoints);

        //Upgrade: Base Damage Modifiers
        const upgradePhysMod = upgrade.PhysicsAtkRate;
        const upgradeMagicMod = upgrade.MagicAtkRate;
        const upgradeFireMod = upgrade.FireAtkRate;
        const upgradeLightMod = upgrade.LightningAtkRate;

        //Upgrade: Scaling Modifiers
        const upgradeStrMod = upgrade.CorrectStrengthRate;
        const upgradeDexMod = upgrade.CorrectAgilityRate;
        const upgradeIntMod = upgrade.CorrectMagicRate;
        const upgradeFthMod = upgrade.CorrectFaithRate;

        var strBonus = strScaling * upgradeStrMod * (strCorrection / 100);
        var dexBonus = dexScaling * upgradeDexMod * (dexCorrection / 100);
        var intBonus = intScaling * upgradeIntMod * (intCorrection / 100);
        var fthBonus = fthScaling * upgradeFthMod * (fthCorrection / 100);
    
        var totalPhysical = (physBase * upgradePhysMod) 
                            + (physBase * upgradePhysMod * strBonus)
                            + (physBase * upgradePhysMod * dexBonus);

        var totalMagic = (magicBase * upgradeMagicMod) 
                            + (magicBase * upgradeMagicMod * intBonus)
                            + (magicBase * upgradeMagicMod * fthBonus);   
                            
        var totalFire = (fireBase * upgradeFireMod) 
                            + (fireBase * upgradeFireMod * intBonus)
                            + (fireBase * upgradeFireMod * fthBonus);  
        
        var totalLightning = (lightBase * upgradeLightMod) 
                            + (lightBase * upgradeLightMod * intBonus)
                            + (lightBase * upgradeLightMod * fthBonus); 
                            
        this.setState({
            totalPhysical: totalPhysical,
            totalMagic: totalMagic,
            totalFire: totalFire,
            totalLightning: totalLightning
        });
    }

    calculateCorrectionValuesForAttribute(attribute, breakpoints) {
        var currentStageMaxVal;
        var prevStageMaxVal;
        var currentStageMaxGrowVal;
        var prevStageMaxGrowVal;

        if (0 <attribute && attribute <= breakpoints.stageMaxVal1) {
            currentStageMaxVal = breakpoints.stageMaxVal1;
            prevStageMaxVal = breakpoints.stageMaxVal0;
            currentStageMaxGrowVal = breakpoints.stageMaxGrowVal1;
            prevStageMaxGrowVal = breakpoints.stageMaxGrowVal0;
        }
        else if (breakpoints.stageMaxVal1 < attribute && attribute <= breakpoints.stageMaxVal2)
        {
            currentStageMaxVal = breakpoints.stageMaxVal2;
            prevStageMaxVal = breakpoints.stageMaxVal1;
            currentStageMaxGrowVal = breakpoints.stageMaxGrowVal2;
            prevStageMaxGrowVal = breakpoints.stageMaxGrowVal1;
        }
        else if (breakpoints.stageMaxVal2 < attribute && attribute <= breakpoints.stageMaxVal3)
        {
            currentStageMaxVal = breakpoints.stageMaxVal3;
            prevStageMaxVal = breakpoints.stageMaxVal2;
            currentStageMaxGrowVal = breakpoints.stageMaxGrowVal3;
            prevStageMaxGrowVal = breakpoints.stageMaxGrowVal2;
        }
        else if (breakpoints.stageMaxVal3 < attribute && attribute <= breakpoints.stageMaxVal4)
        {
            currentStageMaxVal = breakpoints.stageMaxVal4;
            prevStageMaxVal = breakpoints.stageMaxVal3;
            currentStageMaxGrowVal = breakpoints.stageMaxGrowVal4;
            prevStageMaxGrowVal = breakpoints.stageMaxGrowVal3;
        }

        var correction = prevStageMaxVal + 
            (currentStageMaxGrowVal - prevStageMaxGrowVal) / (currentStageMaxVal - prevStageMaxVal) *
            (attribute - prevStageMaxVal);

        return correction;
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCalculator();

        return (
            <div>
                {contents}
            </div>
        );
    }

    renderCalculator() {
        return (
            <div>
                <div>
                    <p>STR: {this.props.str}</p>
                    <p>DEX: {this.props.dex}</p>
                    <p>INT: {this.props.int}</p>
                    <p>FTH: {this.props.fth}</p>
                </div>
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
                    <AttackRatingDisplay totalPhysical={this.state.totalPhysical}
                        totalMagic={this.state.totalMagic}
                        totalFire={this.state.totalFire}
                        totalLightning={this.state.totalLightning} />
                </div>
                <div>
                    <WeaponDetails weapon={this.state.weaponDetails} />
                </div>
            </div>
        );
    }
}