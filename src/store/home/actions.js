import axios from "axios";

export default {
    async ACTIONS_GET_PACKAGES_WITH_QUERY({ state, commit }, { search, from } ) {
        commit('SET_LOADING', true)
        try {
            const response = await axios.get(`http://registry.npmjs.com/-/v1/search?text=${search}&size=10&from=${from}`)
            commit('SET_ITEMS', response.data)
            return response.data
        } catch (e) {
            console.log(e)
        } finally {
            commit('SET_LOADING', false)
        }
    }
}
