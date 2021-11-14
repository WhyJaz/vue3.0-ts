import { createStore } from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules
})
