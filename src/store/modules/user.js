import { findUser, reqUser, reqUserLogin } from "../../api"
export default {
    namespaced: true,
    state() {
        return {
            userData: {},
            allUser: [],
            user: []
        }
    },
    getters: {},
    mutations: {
        login(state, data) {
            state.userData = data
                //持久化处理

        },
        getUser(store, data) {
            store.allUser = data
        },
        findUser(store, data) {
            store.user[0] = data
        }
    },
    actions: {
        async loginActions(store, payload) {
            let result = await reqUserLogin(payload)
            sessionStorage.clear()
            sessionStorage.u_ID = result.data.u_ID
            sessionStorage.u_RID = result.data.u_RID
            sessionStorage.u_Tel = result.data.u_Tel
            sessionStorage.u_name = result.data.u_name
            sessionStorage.u_email = result.data.u_email
            sessionStorage.u_state = result.data.u_status
            sessionStorage.u_password = result.data.u_psw
            console.log(result.data);
            if (result.flag == true) {
                store.commit('login', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async getUserActions(store, payload) {
            let result = await reqUser(payload)
            if (result.flag == true) {
                store.commit('getUser', result.data)
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        async findUserActions(store, payload) {
            let result = await findUser(`U_Tel=${payload.U_Tel}`)
            if (result.flag == true) {
                store.commit('findUser', result.data)
            } else {
                return Promise.reject(new Error('faile'))

            }
        }
    }
}