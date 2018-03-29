<template>
  <div>
    <select v-model="selectedBaseWeapon">
      <option v-for="baseWeapon in baseWeapons" v-bind:value="baseWeapon.id" v-bind:key="baseWeapon.id">
        {{ baseWeapon.name }}
      </option>
    </select>
    <span>Selected: {{ selectedBaseWeapon }}</span>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
              selectedBaseWeapon: null
            }
        },

        computed: {
            ...mapState({
              baseWeapons: state => state.baseWeapons
            })
        },

        methods: {
            ...mapActions(['getBaseWeapons']),
        },

        created() {
          this.getBaseWeapons();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
