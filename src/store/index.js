import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Users: [],
    SelectedUser: [],
    Base_Url: "https://dummyapi.io/data/api",
    App_Id: "601254f919e7373300b904c1",
  },
  getters: {
    Users(state) {
      return state.Users;
    },
    SelectedUser(state) {
      return state.SelectedUser;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.Users = users;
    },
    setSelectedUser(state, user) {
      state.SelectedUser = user;
    },
  },
  actions: {
    getUsers({ commit, state }) {
      axios.get(`${state.Base_Url}/user`, { headers: { "app-id": state.App_Id } })
        .then((res) => {
          commit("setUsers", res.data.data);
        })
        .catch(console.error);
    },
    getSelectedUser({ commit, state } , id) {
      axios.get(`${state.Base_Url}/user/${id}`, {
          headers: { "app-id": state.App_Id },
        })
        .then((res) => {
          commit("setSelectedUser", res.data);
          console.log(res.data)
        })
        .catch(console.error);
    },
  },
  modules: {},
});
