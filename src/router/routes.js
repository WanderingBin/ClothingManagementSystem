const routes = [{
        //重定向
        path: '/',
        redirect: '/home',
    },
    {
        name: 'home',
        path: '/home',
        component: () =>
            import ('../pages/Home.vue')
    },
    {
        name: 'warehouse',
        path: '/warehouse',
        component: () =>
            import ('../pages/Warehouse.vue')

    },
    {
        name: 'goods',
        path: '/goods',
        component: () =>
            import ('../pages/Goods.vue')
    },
    {
        name: 'user',
        path: '/user',
        component: () =>
            import ('../pages/User.vue')
    },
    {
        name: 'inventory',
        path: '/inventory',
        component: () =>
            import ('../pages/Inventory.vue')

    },
    {
        name: 'character',
        path: '/character',
        component: () =>
            import ('../pages/Character.vue')
    },
    {
        name: 'auxiliary',
        path: '/auxiliary',
        component: () =>
            import ('../pages/Auxiliary.vue')
    },
    {
        name: 'login',
        path: '/login',
        component: () =>
            import ('../pages/Login.vue')
    },
    {
        name: 'center',
        path: '/center',
        component: () =>
            import ('../pages/Center.vue')
    },
    {
        name: 'inBound',
        path: '/inBound',
        component: () =>
            import ('../pages/InBound.vue')
    },
    {
        name: 'addInBound',
        path: '/addInBound',
        component: () =>
            import ('../pages/AddInBound.vue')
    },
    {
        name: 'outBound',
        path: '/outBound',
        component: () =>
            import ('../pages/OutBound.vue')
    },
    {
        name: 'addOutBound',
        path: '/addOutBound',
        component: () =>
            import ('../pages/AddOutBound.vue')
    },
    {
        name: 'addGoods',
        path: '/addGoods',
        component: () =>
            import ('../pages/AddGoods.vue')
    },
    {
        name: 'updateGoods',
        path: '/updateGoods',
        component: () =>
            import ('../pages/UpdateGoods.vue')
    },
    {
        name: 'updateRole',
        path: '/updateRole',
        component: () =>
            import ('../pages/UpdateRole.vue')
    }
]

export default routes