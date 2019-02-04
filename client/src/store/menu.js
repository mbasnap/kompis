import DataBase from '@/db'
const mainMenu = new DataBase('Menu', {category: 'main'})

const state = {
    main: {}
}
const getters = {
    main: ({main}) => Object.keys(main).map(key => main[key])
}
const mutations = {
    main: (state, v) => {
        state.main = v
    },
    // update: (state, {name, v}) => state.menu = {... state.menu, [name]: v}
}
const actions = {
    getAll: ({commit}) => {
        return mainMenu.getAll().then(res => commit('main', res))
    }, 
    // update: (context, {page, content}) => {
    //     let commit = res => context.commit('update', {name: page.name, res})
    //     query('updatePage', {page, content}).then(commit)       
    // }
}

export default {
namespaced: true,
state,
getters,
mutations,
actions
}