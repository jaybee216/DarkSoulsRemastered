<template>
  <div>
    <select v-model="selectedBaseWeapon"
            @change="baseWeaponSelected">
      <option v-for="baseWeapon in baseWeapons"
            v-bind:value="baseWeapon.id"
            v-bind:key="baseWeapon.id">
        {{ baseWeapon.name }}
      </option>
    </select>
    <span>Selected Base Weapon: {{ selectedBaseWeapon }}</span>
    <select v-model="selectedInfusion"
            @change="infusionSelected">
      <option v-for="infusion in infusions"
            v-bind:value="infusion.id"
            v-bind:key="infusion.id">
        {{ infusion.name }}
      </option>
    </select>
    <span>Selected Infusion: {{ selectedInfusion }}</span>
    <select v-model="selectedUpgrade"
            @change="upgradeSelected">
      <option v-for="upgrade in upgrades"
            v-bind:value="upgrade.id"
            v-bind:key="upgrade.id">
        {{ upgrade.name }}
      </option>
    </select>
    <span>Selected Upgrade: {{ selectedUpgrade }}</span>
    <label>STR</label>
    <input name="str"
           type="number" min="1" max="99"
           v-bind:value="str"
           @change="updateAttribute" />
    <label>DEX</label>
    <input name="dex"
           type="number" min="1" max="99"
           v-bind:value="dex"
           @change="updateAttribute" />
    <label>INT</label>
    <input name="int"
           type="number" min="1" max="99"
           v-bind:value="int"
           @change="updateAttribute" />
    <label>FTH</label>
    <input name="fth"
           type="number" min="1" max="99"
           :value="fth"
           @input="updateAttribute" />
    <label>Humanity</label>
    <input name="humanity"
           type="number" min="0" max="99"
           :value="humanity"
           @input="updateAttribute" />
    <div>
        <Calculation/>
    </div>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import Calculation from './Calculation'

    const baseWeapons = baseWeapons;
    const infusions = infusions;
    const upgrades = upgrades;

    export default {
        data() {
            return {
              //selectedBaseWeapon: this.$store.state.selectedBaseWeapon === null ? "" :  this.$store.state.selectedBaseWeapon.id,
              //selectedInfusion: this.$store.state.selectedInfusion === null ? "" :  this.$store.state.selectedInfusion.id,
              //selectedUpgrade: ""
            }
        },
        components: {
            Calculation
        },
        computed: {
            ...mapState({
              baseWeapons: state => {
                  return state.baseWeapons;
              },
              infusions: state => state.infusions,
              upgrades: state => state.upgrades,
              str: state => state.str,
              dex: state => state.dex,
              int: state => state.int,
              fth: state => state.fth,
              humanity: state => state.humanity,
              selectedBaseWeapon: state => (state.selectedBaseWeapon === null ? "" :  state.selectedBaseWeapon.id),
              selectedInfusion: state => (state.selectedInfusion === null ? "" :  state.selectedInfusion.id),
              selectedUpgrade:  state => (state.selectedUpgrade === null ? "" :  state.selectedUpgrade.id),
            }),
            /* humanity: {
                get: function () {
                    return this.$store.state.humanity;
                },
                set: function (newValue) {
                    this.$store.dispatch('updateHumanity', newValue);
                }
            } */
            /* selectedBaseWeapon: {
                get: function() {
                    var weapon = this.$store.state.selectedBaseWeapon;
                    return (weapon ? weapon.name : "");
                },
                set: function(newValue) {

                }
            } */
        },

        methods: {
            ...mapActions(['getBaseWeapons', 'selectBaseWeapon', 'selectInfusion', 'selectUpgrade', 'updateAttribute']),
            baseWeaponSelected(e) {
                const id = e.target.value;
                this.selectBaseWeapon(id);
            },
            infusionSelected(e) {
                const id = e.target.value;
                this.selectInfusion(id);
            },
            upgradeSelected(e) {
                const id = e.target.value;
                this.selectUpgrade(id);
            },
            attributeChanged(e) {
                this.updateAttribute(e);
            }
        },

        created() {
          this.getBaseWeapons();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
