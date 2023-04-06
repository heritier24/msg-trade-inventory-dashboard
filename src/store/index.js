import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamId: "",
    employeeName: "",
    plateNumber: "",
    status: "",
    inventory: "",
    product: "",
  },
  getters: {
    getReloadInventory(state) {
      return state.inventory
    },
    getReloadProduct(state) {
      return state.product
    }
  },
  mutations: {
    setTeamId(state, teamId) {
      state.teamId = teamId
    },
    setEmployeeName(state, employeeName) {
      state.employeeName = employeeName
    },
    setPlateNumber(state, plateNumber) {
      state.plateNumber = plateNumber
    },
    setStatus(state, status) {
      state.status = status
    },
    setReloadInventory(state, inventory) {
      state.inventory = inventory
    },
    setReloadProduct(state, product) {
      state.product = product
    }
  },
  actions: {
  },
  modules: {
  }
})
