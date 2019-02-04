
import DataBase from '@/db'
// const menu = new DataBase('Menu',{groupe: 'main'})
// const newsDB = new DataBase('News')
// const menuDB = new DataBase('Menu')

const state = {
    company: {},
    menu: {},
    news: {},
    pages: {},
    sideBarMenu: []
}
const getters = {
    mainMenu: ({menu}) => [...menu],
    lastNews: ({news}) => Object.values(news),
    page: ({pages}) => pages,
    company({company}) {
        return company || {}
    },
    companyPhones(state, {company}) {
        return   company.phones || []
    },
    companyMailes(state, {company}) {
        return company.mailes || []
    },
    companyAddress(state, {company}) {
        return company.address || {}
    }
}
const mutations = {
    menu: (state, v) => state.menu = v,
    news: (state, v) => state.news = v,
}
const actions = {
    init: ({commit}) => {
        // menuDB.get().then(res => commit('menu', res))
        // newsDB.query('getLast').then(res => commit('news', res))
    },
    loadPage: ({commit, getters}, name) => {
        getters.page
        pageDB.get({name}).then(res => commit('menu', res))
    }
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}