import Vue from "vue";
import Vuex from "vuex";
import { weeksBetween, isValidDate } from "../helpers/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    age: null,
    // age: 628646400000,
    enabled: false,
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
    isEnabled: (state) => state.enabled,
  },
  mutations: {
    SET_AGE(state, payload) {
      console.log("setting age to", payload);
      if (isValidDate(payload)) {
        state.enabled = true;
      }
      state.age = payload;
    },
    TOGGLE_ENABLED(state, payload) {
      state.enabled = payload;
    },
  },
  actions: {
    setAge({ commit }, payload) {
      commit("SET_AGE", payload);
    },
  },
  modules: {},
});
