import React, { Component } from 'react';
import { SelectInput } from './SelectInput';
import { WeaponDetails } from './WeaponDetails';
import { AttackRatingDisplay } from './AttackRatingDisplay';

export class AttackRatingCalculation extends Component {
    displayName = AttackRatingCalculation.name

    constructor(props) {
        super(props);
        this.state = {
            weaponDisplayName: '',
            totalPhysical: 0,
            totalMagic: 0,
            totalFire: 0,
            totalLightning: 0
        };

        //TODO: Not sure if we need to bind these or not
        this.calculateAttackRating = this.calculateAttackRating.bind(this);
        this.calculateCorrectionValuesForAttribute = this.calculateCorrectionValuesForAttribute.bind(this);
    }

    render() {
        return (
        <div>
            <AttackRatingDisplay weaponDisplayName={this.state.weaponDisplayName}
                         totalPhysical={this.state.totalPhysical}
                        totalMagic={this.state.totalMagic}
                        totalFire={this.state.totalFire}
                        totalLightning={this.state.totalLightning} />
        </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.calculateAttackRating(nextProps);
    }

    calculateAttackRating(props) {
        const weapon = props.weapon;
        const upgrade = props.upgrade;

        if (!weapon || !upgrade) {
            return;
        }

        //Weapon: Base Damage
        const physBase = weapon.physicalDamage;
        const magicBase = weapon.magicDamage;
        const fireBase = weapon.fireDamage;
        const lightBase = weapon.lightningDamage;

        //Weapon: Scaling Modifiers
        const strScaling = weapon.correctStrength;
        const dexScaling = weapon.correctAgility;
        const intScaling = weapon.correctMagic;
        const fthScaling = weapon.correctFaith;

        //Weapon: Correction values
        const str = props.str;
        const dex = props.dex;
        const int = props.int;
        const fth = props.fth;

        const breakpoints = weapon.correctionBreakpoints;

        var strCorrection = this.calculateCorrectionValuesForAttribute(str, breakpoints);
        var dexCorrection = this.calculateCorrectionValuesForAttribute(dex, breakpoints);
        var intCorrection = this.calculateCorrectionValuesForAttribute(int, breakpoints);
        var fthCorrection = this.calculateCorrectionValuesForAttribute(fth, breakpoints);

        //Upgrade: Base Damage Modifiers
        const upgradePhysMod = upgrade.physicsAtkRate;
        const upgradeMagicMod = upgrade.magicAtkRate;
        const upgradeFireMod = upgrade.fireAtkRate;
        const upgradeLightMod = upgrade.thunderAtkRate;

        //Upgrade: Scaling Modifiers
        const upgradeStrMod = upgrade.correctStrengthRate;
        const upgradeDexMod = upgrade.correctAgilityRate;
        const upgradeIntMod = upgrade.correctMagicRate;
        const upgradeFthMod = upgrade.correctFaithRate;

        var strBonus = (strScaling / 100) * upgradeStrMod * (strCorrection / 100);
        var dexBonus = (dexScaling / 100) * upgradeDexMod * (dexCorrection / 100);
        var intBonus = (intScaling / 100) * upgradeIntMod * (intCorrection / 100);
        var fthBonus = (fthScaling / 100) * upgradeFthMod * (fthCorrection / 100);

        var fullWeaponName = `${weapon.displayName} ${upgrade.level}`;
    
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
            weaponDisplayName: fullWeaponName,
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

        var correction = prevStageMaxGrowVal + 
            (currentStageMaxGrowVal - prevStageMaxGrowVal) / (currentStageMaxVal - prevStageMaxVal) *
            (attribute - prevStageMaxVal);

        return correction;
    }
}