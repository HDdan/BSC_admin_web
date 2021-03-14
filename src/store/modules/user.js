import {
  login,
  getUsers,
  getPageLogs
} from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  // token: getToken()
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { action,loginname, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({
        action:action,
        loginname: loginname,
        password: password
      })
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data);
          setToken(data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit("SET_TOKEN", "");
          removeToken();
          // resetRouter()

          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      // commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
  