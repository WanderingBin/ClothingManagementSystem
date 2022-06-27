import { reqInbound, reqOutbound } from "../../api"

export default {
    namespaced: true,
    state() {
        return {
            inboundData: [],
            outboundData: [],

        }
    },
    getters: {

    },
    mutations: {
        getInbound(state, data) {
            state.inboundData = data
        },
        findInbound(state, data) {
            state.inboundData = data
        },
        getOutbound(state, data) {
            state.outboundData = data
        },
        findOutbound(state, data) {
            state.outboundData = data
        },
    },
    actions: {
        async getInboundActions(store, payload) {
            let result = await reqInbound(payload)
            if (result.flag == true) {
                store.commit('getInbound', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async findInboundActions(store, payload) {
            let result = await reqInbound(payload)
            if (result.flag == true) {
                store.commit('findInbound', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async getOutboundActions(store, payload) {
            let result = await reqOutbound(payload)
            if (result.flag == true) {
                store.commit('getOutbound', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async findOutboundActions(store, payload) {
            let result = await reqOutbound(payload)
            if (result.flag == true) {
                store.commit('findOutbound', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }
        }
    }
}