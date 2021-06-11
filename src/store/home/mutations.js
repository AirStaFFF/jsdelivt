export default {
    SET_ITEMS(state, payload) {
        state.items = { ...payload }
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    }
}
