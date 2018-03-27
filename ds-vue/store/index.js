import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseWeapons: []
  },
  actions: {
    GET_BASE_WEAPON_LIST: function ({ commit }) {
      axios.get('/api/weapons/baseWeapons').then((response) => {
        commit('SET_BASE_WEAPON_LIST', { baseWeapons: response.data });
      }, (err) => {
        console.log(err);
      });
    }
  },
  mutations: {
    SET_BASE_WEAPON_LIST: (state, { baseWeapons }) => {
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
