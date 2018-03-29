<template>
  <div>
    <span>STR Scaling: {{ strScaling }}</span>
    <span>DEX Scaling: {{ dexScaling }}</span>
    <span>INT Scaling: {{ intScaling }}</span>
    <span>FTH Scaling: {{ fthScaling }}</span>
    <span>AR: {{ totalAttackRating }}</span>
    <span>Physical: {{ totalPhysical }}</span>
    <span>Fire: {{ totalFire }}</span>
    <span>Magic: {{ totalMagic }}</span>
    <span>Lightning: {{ totalLightning }}</span>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
              str: state => state.str,
              dex: state => state.dex,
              int: state => state.int,
              fth: state => state.fth,
              humanity: state => state.humanity,
              upgrade: state => state.selectedUpgrade,
              weaponFormula: state => state.weaponFormula
            }),
            requirementsMet: function() {
                return this.weaponFormula.requiredStrength <= this.str &&
                        this.weaponFormula.requiredAgility <= this.dex &&
                        this.weaponFormula.requiredMagic <= this.int &&
                        this.weaponFormula.requiredFaith <= this.fth;
            },
            strScaling: function() { return this.weaponFormula.correctStrength / 100 },
            dexScaling: function() { return this.weaponFormula.correctAgility / 100 },
            intScaling: function() { return this.weaponFormula.correctMagic / 100 },
            fthScaling: function() { return this.weaponFormula.correctFaith / 100 },
            strCorrection: function() {
                return this.calculateCorrectionValuesForAttribute(this.str, this.weaponFormula.correctionBreakpoints);
            },
            dexCorrection: function() {
                return this.calculateCorrectionValuesForAttribute(this.dex, this.weaponFormula.correctionBreakpoints);
            },
            intCorrection: function() {
                return this.calculateCorrectionValuesForAttribute(this.int, this.weaponFormula.correctionBreakpoints);
            },
            fthCorrection: function() {
                return this.calculateCorrectionValuesForAttribute(this.fth, this.weaponFormula.correctionBreakpoints);
            },
            totalPhysical: function() {
                const physBase = this.weaponFormula.physicalDamage;
                const upgradePhysMod = this.upgrade.physicsAtkRate;
                const upgradeStrMod = this.upgrade.correctStrengthRate;
                const upgradeDexMod = this.upgrade.correctAgilityRate;
                var strBonus = this.strScaling * upgradeStrMod * this.strCorrection;
                var dexBonus = this.dexScaling * upgradeDexMod * this.dexCorrection;
                const chaosPhysicalBonus = 0; //TODO
                var result = (physBase * upgradePhysMod) +
                (physBase * upgradePhysMod * strBonus) +
                (physBase * upgradePhysMod * dexBonus) +
                (physBase * upgradePhysMod * chaosPhysicalBonus);
                return result;
            },
            totalMagic: function() {
                const magicBase = this.weaponFormula.magicDamage;
                const upgradeMagicMod = this.upgrade.magicAtkRate;
                const upgradeIntMod = this.upgrade.correctMagicRate;
                const upgradeFthMod = this.upgrade.correctFaithRate;
                var intBonus = this.intScaling * upgradeIntMod * this.intCorrection;
                var fthBonus = this.fthScaling * upgradeFthMod * this.fthCorrection;
                var result = (magicBase * upgradeMagicMod) +
                (magicBase * upgradeMagicMod * intBonus) +
                (magicBase * upgradeMagicMod * fthBonus);
                return result;
            },
            totalFire: function() {
                const fireBase = this.weaponFormula.fireDamage;
                const upgradeFireMod = this.upgrade.fireAtkRate;
                const upgradeIntMod = this.upgrade.correctMagicRate;
                const upgradeFthMod = this.upgrade.correctFaithRate;
                var intBonus = this.intScaling * upgradeIntMod * this.intCorrection;
                var fthBonus = this.fthScaling * upgradeFthMod * this.fthCorrection;
                const chaosFireBonus = 0; //TODO
                var result = (fireBase * upgradeFireMod) +
                (fireBase * upgradeFireMod * intBonus) +
                (fireBase * upgradeFireMod * fthBonus) +
                (fireBase * upgradeFireMod * chaosFireBonus);
                return result;
            },
            totalLightning: function() {
                const lightningBase = this.weaponFormula.lightningDamage;
                const upgradeLightningMod = this.upgrade.lightningAtkRate;
                const upgradeIntMod = this.upgrade.correctMagicRate;
                const upgradeFthMod = this.upgrade.correctFaithRate;
                var intBonus = this.intScaling * upgradeIntMod * this.intCorrection;
                var fthBonus = this.fthScaling * upgradeFthMod * this.fthCorrection;
                var result = (lightningBase * upgradeLightningMod) +
                (lightningBase * upgradeLightningMod * intBonus) +
                (lightningBase * upgradeLightningMod * fthBonus);
                return result;
            },
            totalAttackRating: function() {
                return this.totalPhysical + this.totalMagic + this.totalFire + this.totalLightning;
            }
        },

        methods: {
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

                return correction / 100;
            }
        },

        created() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
