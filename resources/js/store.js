import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            userDATA: {
                userID: '0'
            }
        }
    },
    actions: {
        changeID(id) {
            commit("CHANGE_UID", id)
        }
    },
    mutations: {
        CHANGE_UID(state, id) {
            state.userDATA.userID = id
        }
    },
    getters: {
        userID() {
            return state.userDATA.userID
        }
    }
})
export { store }
