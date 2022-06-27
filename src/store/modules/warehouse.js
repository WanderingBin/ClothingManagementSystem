import { reqWarehouse } from "../../api"

export default {
    namespaced: true,
    state() {
        return {
            warehouse: []
        }
    },
    getters: {

    },
    mutations: {
        getDate(state, data) {
            state.warehouse = data
        }
    },
    actions: {
        async getDateAction(store, payload) {
            let result = await reqWarehouse(payload == undefined ? '' : `W_name=${payload}`)
            if (result.flag == true) {
                store.commit('getDate', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }

        }
    }
}