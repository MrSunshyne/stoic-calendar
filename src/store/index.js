import Vue from "vue";
import Vuex from "vuex";
import { weeksBetween } from "../helpers/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // age: null,
    age: 628646400000,
  },
  getters: {
    getAge: (state) => state.age,
    weeksCount: (state) => {
      let dob = new Date(state.age);
      let today = new Date();
      return weeksBetween(dob, today);
    },
    getDob: (state) => {
      return new Date(state.age).toDateString();
    },
  },
  mutations: {
    SET_AGE(state, payload) {
      state.age = payload;
    },
  },
  actions: {
    setAge({ commit }, payload) {
      commit("SET_AGE", payload);
    },
  },
  modules: {},
});
