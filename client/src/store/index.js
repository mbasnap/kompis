import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import post from './post'
import menu from './menu'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {ui, post, menu}
 })