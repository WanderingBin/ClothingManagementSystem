import { createStore } from 'vuex'

import user from './modules/user.js'
import warehouse from './modules/warehouse.js'
import goods from './modules/goods'
import inventory from './modules/inventory.js'

export default createStore({
    modules: {
        user,
        warehouse,
        goods,
        inventory
    }
})