import React, { Component } from 'react';
import { AttackRatingDisplay } from './AttackRatingDisplay';
import { RequirementsNotMetDisplay } from './RequirementsNotMetDisplay';

export class AttackRatingCalculation extends Component {
    displayName = AttackRatingCalculation.name

    constructor(props) {
        super(props);
        this.state = {
            weaponName: '',
            upgradeLevel: '',
            requirementsMet: true,

            physicalBase: 0,
            magicBase: 0,
            fireBase: 0,
            lightningBase: 0,

            strScaling: 0,
            dexScaling: 0,
            intScaling: 0,
            fthScaling: 0,

            strCorrection: 0,
            dexCorrection: 0,
            intCorrection: 0,
            fthCorrection: 0,

            physicalBaseModifier: 0,
            magicBaseModifier: 0,
            fireBaseModifier: 0,
            lightningBaseModifier: 0,

            strScalingModifier: 0,
            dexScalingModifier: 0,
            intScalingModifier: 0,
            fthScalingModifier: 0,

            chaosPhysicalBonus: 0,
            chaosFireBonus: 0
        };
    }

    renderAttackRatingDisplay() {
        const physBase = this.state.physicalBase;
        const magicBase = this.state.magicBase;
        const fireBase = this.state.fireBase;
        const lightBase = this.state.lightningBase;

        const upgradePhysMod = this.state.physicalBaseModifier;
        const upgradeMagicMod = this.state.magicBaseModifier;
        const upgradeFireMod = this.state.fireBaseModifier;
        const upgradeLightMod = this.state.lightningBaseModifier;

        const strCorrection = this.state.strCorrection;
        const dexCorrection = this.state.dexCorrection;
        const intCorrection = this.state.intCorrection;
        const fthCorrection = this.state.fthCorrection;

        const strScaling = this.state.strScaling;
        const dexScaling = this.state.dexScaling;
        const intScaling = this.state.intScaling;
        const fthScaling = this.state.fthScaling;

        const upgradeStrMod = this.state.strScalingModifier;
        const upgradeDexMod = this.state.dexScalingModifier;
        const upgradeIntMod = this.state.intScalingModifier;
        const upgradeFthMod = this.state.fthScalingModifier;

        var strBonus = (strScaling / 100) * upgradeStrMod * (strCorrection / 100);
        var dexBonus = (dexScaling / 100) * upgradeDexMod * (dexCorrection / 100);
        var intBonus = (intScaling / 100) * upgradeIntMod * (intCorrection / 100);
        var fthBonus = (fthScaling / 100) * upgradeFthMod * (fthCorrection / 100);

        const chaosPhysicalBonus = this.state.chaosPhysicalBonus;
        const chaosFireBonus = this.state.chaosFireBonus;

        var totalPhysical = (physBase * upgradePhysMod)
            + (physBase * upgradePhysMod * strBonus)
            + (physBase * upgradePhysMod * dexBonus)
            + (physBase * upgradePhysMod * chaosPhysicalBonus);

        var totalMagic = (magicBase * upgradeMagicMod)
            + (magicBase * upgradeMagicMod * intBonus)
            + (magicBase * upgradeMagicMod * fthBonus);

        var totalFire = (fireBase * upgradeFireMod)
            + (fireBase * upgradeFireMod * intBonus)
            + (fireBase * upgradeFireMod * fthBonus)
            + (fireBase * upgradeFireMod * chaosFireBonus);

        var totalLightning = (lightBase * upgradeLightMod)
            + (lightBase * upgradeLightMod * intBonus)
            + (lightBase * upgradeLightMod * fthBonus);

        var fullWeaponName = `${this.state.weaponName} ${this.state.upgradeLevel}`;

        return (
            <div>
                <AttackRatingDisplay weaponDisplayName={fullWeaponName}
                    totalPhysical={totalPhysical}
                    totalMagic={totalMagic}
                    totalFire={totalFire}
                    totalLightning={totalLightning}
                    strScaling={strScaling * upgradeStrMod}
                    dexScaling={dexScaling * upgradeDexMod}
                    intScaling={intScaling * upgradeIntMod}
                    fthScaling={fthScaling * upgradeFthMod} />
            </div>
        );
    }

    renderRequirementsNotMetDisplay() {
        var fullWeaponName = `${this.state.weaponName} ${this.state.upgradeLevel}`;

        return (
            <div>
                <RequirementsNotMetDisplay weaponDisplayName={fullWeaponName}
                    requiredStrength={this.props.weapon.requiredStrength}
                    requiredDexterity={this.props.weapon.requiredAgility}
                    requiredIntelligence={this.props.weapon.requiredMagic}
                    requiredFaith={this.props.weapon.requiredFaith} />
            </div>
        );
    }

    render() {
        return this.state.requirementsMet ?
            this.renderAttackRatingDisplay() :
            this.renderRequirementsNotMetDisplay();
    }

    componentWillReceiveProps(nextProps) {
        this.calculateAttackRating(nextProps);
    }

    calculateAttackRating(props) {
        const weapon = props.weapon;
        const upgrade = props.upgrade;
        const str = props.str;
        const dex = props.dex;
        const int = props.int;
        const fth = props.fth;
        const humanity = props.humanity;
        const isTwoHand = props.isTwoHand;

        if (!weapon || !upgrade) {
            return;
        }

        this.checkMinimumRequirements(props);

        if (this.props.weapon && this.props.upgrade &&
            weapon.id === this.props.weapon.id &&
            upgrade.id === this.props.upgrade.id &&
            str === this.props.str &&
            dex === this.props.dex &&
            int === this.props.int &&
            fth === this.props.fth &&
            humanity === this.props.humanity &&
            isTwoHand === this.props.isTwoHand) {
                return;
            }

        if (this.props.str !== str || this.props.dex !== dex ||
            this.props.int !== int || this.props.fth !== fth || 
            this.props.humanity !== humanity || this.props.isTwoHand !== isTwoHand) {
            //Character attribute changed. Recalculate Correction values.
            this.updateCorrectionValues(weapon, props);
        } 
        else if (!this.props.weapon || this.props.weapon.id !== weapon.id) {
            //Weapon (BaseWeapon/Infusion combination) changed. Update Weapon, Correction and Upgrade values.
            this.updateWeaponValues(weapon);
            this.updateCorrectionValues(weapon, props);
            this.updateUpgradeValues(upgrade);
        }
        else if (!this.props.upgrade || this.props.upgrade.id !== upgrade.id) {
            //Weapon Upgrade Level changed. Update Upgrade values.
            this.updateUpgradeValues(upgrade);
        }
    }

    checkMinimumRequirements(props) {
        const weapon = props.weapon;
        const str = (props.isTwoHand ? props.str * 1.5 : props.str);
        const dex = props.dex;
        const int = props.int;
        const fth = props.fth;

        var requirementsMet = (weapon.requiredStrength <= str &&
            weapon.requiredAgility <= dex &&
            weapon.requiredMagic <= int &&
            weapon.requiredFaith <= fth);

        this.setState({ requirementsMet: requirementsMet });
        return requirementsMet;
    }

    updateWeaponValues(weapon) {
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

        const displayName = weapon.displayName;

        this.setState({
            physicalBase: physBase,
            magicBase: magicBase,
            fireBase: fireBase,
            lightningBase: lightBase,
            strScaling: strScaling,
            dexScaling: dexScaling,
            intScaling: intScaling,
            fthScaling: fthScaling,
            weaponName: displayName
        });
    }

    updateCorrectionValues(weapon, props) {
        //Weapon: Correction values
        const breakpoints = weapon.correctionBreakpoints;

        const str = (props.isTwoHand ? props.str * 1.5 : props.str);

        var strCorrection = this.calculateCorrectionValuesForAttribute(str, breakpoints);
        var dexCorrection = this.calculateCorrectionValuesForAttribute(props.dex, breakpoints);
        var intCorrection = this.calculateCorrectionValuesForAttribute(props.int, breakpoints);
        var fthCorrection = this.calculateCorrectionValuesForAttribute(props.fth, breakpoints);
        
        this.calculateHumanityBonus(props);

        this.setState({
            strCorrection: strCorrection,
            dexCorrection: dexCorrection,
            intCorrection: intCorrection,
            fthCorrection: fthCorrection
        });
    }

    updateUpgradeValues(upgrade) {
        //Upgrade: Base Damage Modifiers
        const upgradePhysMod = upgrade.physicsAtkRate;
        const upgradeMagicMod = upgrade.magicAtkRate;
        const upgradeFireMod = upgrade.fireAtkRate;
        const upgradeLightMod = upgrade.lightningAtkRate;

        //Upgrade: Scaling Modifiers
        const upgradeStrMod = upgrade.correctStrengthRate;
        const upgradeDexMod = upgrade.correctAgilityRate;
        const upgradeIntMod = upgrade.correctMagicRate;
        const upgradeFthMod = upgrade.correctFaithRate;

        const upgradeLevel = upgrade.level;

        this.setState({
            physicalBaseModifier: upgradePhysMod,
            magicBaseModifier: upgradeMagicMod,
            fireBaseModifier: upgradeFireMod,
            lightningBaseModifier: upgradeLightMod,
            strScalingModifier: upgradeStrMod,
            dexScalingModifier: upgradeDexMod,
            intScalingModifier: upgradeIntMod,
            fthScalingModifier: upgradeFthMod,
            upgradeLevel: upgradeLevel
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

    calculateHumanityBonus(props) {
        const humanity = parseInt(props.humanity, 0);
        const upgrade = props.upgrade;
        const weapon = props.weapon;

        var physModifier = 0;
        var fireModifier = 0;

        //TODO: These hardcoded values should come from the db/API
        if ((parseInt(upgrade.infusionId, 0) !== 900 && 
            parseInt(weapon.baseWeaponId, 0) !== 406) 
            || humanity === 0) {
            physModifier = 0;
            fireModifier = 0;
        }
        else if (humanity === 1) {
            physModifier = 0.24;
            fireModifier = 0.24;
        }
        else if (humanity === 2) {
            physModifier = 0.36;
            fireModifier = 0.36;
        }
        else if (humanity === 3) {
            physModifier = 0.48;
            fireModifier = 0.48;
        }
        else if (humanity === 4) {
            physModifier = 0.56;
            fireModifier = 0.56;
        }
        else if (humanity === 5) {
            physModifier = 0.62;
            fireModifier = 0.62;
        }
        else if (humanity === 6) {
            physModifier = 0.70;
            fireModifier = 0.70;
        }
        else if (humanity === 7) {
            physModifier = 0.76;
            fireModifier = 0.76;
        }
        else if (humanity === 8) {
            physModifier = 0.84;
            fireModifier = 0.86;
        }
        else if (humanity === 9) {
            physModifier = 0.92;
            fireModifier = 0.94;
        }
        else if (humanity >= 10) {
            physModifier = 1;
            fireModifier = 1;
        }

        this.setState({ 
            chaosPhysicalBonus : physModifier * .21,
            chaosFireBonus : fireModifier * .21
        });
    }
}