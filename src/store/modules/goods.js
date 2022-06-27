import { addGood, reqGoods } from "../../api"

export default {
    namespaced: true,
    state() {
        return {
            goodsData: []
        }
    },
    getters: {

    },
    mutations: {
        getGoodsDate(state, data) {
            state.goodsData = data
        }
    },
    actions: {
        async getDateAction(store, payload) {
            let result = await reqGoods({ w_ID: payload.T_WID, s_name: payload.S_name })
            if (result.flag == true) {
                store.commit('getGoodsDate', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }

        },
        async addGoodActions(store, payload) {
            let result = await addGood(payload)
            console.log(result);
            if (result.flag == true) {
                store.commit('getGoodsDate', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }

        }
    }
}