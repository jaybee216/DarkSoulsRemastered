import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as types from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseWeapons: []
  },
  actions: {
    getBaseWeapons: function ({ commit }) {
      axios.get('https://localhost:5001/api/weapons/baseWeapons').then((response) => {
        commit([types.SET_BASE_WEAPON_LIST], { baseWeapons: response.data });
      }, (err) => {
        console.log(err);
      });
    }
  },
  mutations: {
    [types.SET_BASE_WEAPON_LIST]: (state, { baseWeapons }) => {
      state.baseWeapons = baseWeapons;
    }
  },
  getters: {
    baseWeapons: state => {
      return state.baseWeapons;
    }
  }
});

export default store;
