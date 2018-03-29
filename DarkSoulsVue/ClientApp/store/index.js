import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as types from './mutation-types';

Vue.use(Vuex);

// STATE
const state = {
    isLoadingBaseWeapons: false,
    baseWeapons: [],
    selectedBaseWeapon: null,
    isLoadingInfusions: false,
    infusions: [],
    selectedInfusion: null,
    isLoadingUpgrades: false,
    upgrades: [],
    selectedUpgrade: null,
    str: 1,
    dex: 1,
    int: 1,
    fth: 1,
    humanity: 0,
    weaponFormula: null
};

// MUTATIONS
const mutations = {
    [types.FETCHING_BASE_WEAPON_LIST](state) {
        state.isLoadingBaseWeapons = true;
    },
    [types.SET_BASE_WEAPON_LIST](state, baseWeapons) {
        state.baseWeapons = baseWeapons;
        state.isLoadingBaseWeapons = false;
    },
    ['SET_SELECTED_BASE_WEAPON'](state, id) {
        var baseWeapon = state.baseWeapons.find(w => w.id === parseInt(id, 0));
        state.selectedBaseWeapon = baseWeapon;
    },
    ['FETCHING_INFUSION_LIST'](state) {
        state.isLoadingInfusions = true;
    },
    ['SET_INFUSIONS_LIST'](state, infusions) {
        state.infusions = infusions;
        state.isLoadingInfusions = false;
    },
    ['SET_SELECTED_INFUSION'](state, id) {
        var infusion = state.infusions.find(i => i.id === parseInt(id, 0));
        state.selectedInfusion = infusion;
    },
    ['FETCHING_UPGRADES_LIST'](state) {
        state.isLoadingUpgrades = true;
    },
    ['SET_UPGRADES_LIST'](state, upgrades) {
        state.upgrades = upgrades;
        state.isLoadingUpgrades = false;
    },
    ['SET_SELECTED_UPGRADE'](state, id) {
        var upgrade = state.upgrades.find(u => u.id === parseInt(id, 0));
        state.selectedUpgrade = upgrade;
    },
    ['SET_WEAPON_FORMULA'](state, formula) {
        state.weaponFormula = formula;
    },
    ['SET_ATTRIBUTE'](state, e) {
        var previousValue = state[e.target.name];
        var value = (e.target.validity.valid) ? e.target.value : previousValue;
        var parsedValue = parseInt(value, 0);
        parsedValue = isNaN(parsedValue) ? 0 : parsedValue;
        state[e.target.name] = parsedValue;
        //Ensure the input's value is set to the latest valid value
        e.target.value = parsedValue;
    }
};

// ACTIONS
const actions = ({
    getBaseWeapons: function ({ commit, dispatch }) {
        commit(types.FETCHING_BASE_WEAPON_LIST);
        axios.get('/api/weapons/baseWeapons').then((response) => {
            commit(types.SET_BASE_WEAPON_LIST, response.data);
            dispatch('selectBaseWeapon', response.data[0].id);
        }, (err) => {
          console.log(err);
        });
    },
    selectBaseWeapon: function ({ commit, dispatch }, id) {
        commit('SET_SELECTED_BASE_WEAPON', id);
        commit('FETCHING_INFUSION_LIST');
        axios.get(`/api/weapons/${id}/infusions`).then((response) => {
            commit('SET_INFUSIONS_LIST', response.data);
            dispatch('selectInfusion', response.data[0].id);
        }, (err) => {
            console.log(err);
        });
    },
    selectInfusion: function ({ commit, dispatch }, id) {
        commit('SET_SELECTED_INFUSION', id);
        commit('FETCHING_UPGRADES_LIST');
        axios.get(`/api/weapons/infusions/${id}/upgrades`).then((response) => {
            commit('SET_UPGRADES_LIST', response.data);
            dispatch('selectUpgrade', response.data[0].id);
            dispatch('getWeaponFormula');
        }, (err) => {
            console.log(err);
        });
    },
    selectUpgrade: function ({ commit }, id) {
        commit('SET_SELECTED_UPGRADE', id);
    },
    getWeaponFormula: function( {commit, state }) {
        axios.get(`api/weapons/${state.selectedBaseWeapon.id}/Infusions/${state.selectedInfusion.id}`).then((response) => {
            commit('SET_WEAPON_FORMULA', response.data);
        }, (err) => {
            console.log(err);
        });
    },
    updateAttribute: function ({ commit }, e) {
        commit('SET_ATTRIBUTE', e);
    }
});

const getters = ({
    baseWeapons: state => {
        return state.baseWeapons;
      }
});

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
