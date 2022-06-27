import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 判断有没有登录
    if (!sessionStorage.getItem('u_ID')) {
        if (to.name == "login" || to.name == "home" || to.name == "warehouse" || to.name == "goods") {
            next();
        } else {
            alert('您还没有权限，请先登录')
            router.push('login')
        }
    } else {
        if (sessionStorage.getItem('u_RID') == 1) {
            if (to.name == "login" || to.name == "home" || to.name == "user" || to.name == "character" || to.name == "center" || to.name == 'auxiliary' || to.name == 'updateRole') {
                next();
            } else {
                alert('您是超级管理员，只能查看用户管理和角色管理页面')
            }
        } else if (sessionStorage.getItem('u_RID') == 2) {
            if (to.name == "login" || to.name == "home" || to.name == "inventory" || to.name == "center" || to.name == "warehouse" || to.name == "goods" || to.name == 'auxiliary' || to.name == 'inBound' || to.name == 'addInBound' || to.name == 'outBound' || to.name == 'addOutBound' || to.name == 'addGoods' || to.name == 'updateGoods') {
                next();
            } else {
                alert('您是仓库主管，没有权限查看用户管理和角色管理页面')
            }
        } else if (sessionStorage.getItem('u_RID') == 3) {
            if (to.name == "login" || to.name == "home" || to.name == "inventory" || to.name == "center" || to.name == "warehouse" || to.name == 'auxiliary' || to.name == 'inBound' || to.name == 'addInBound' || to.name == 'outBound' || to.name == 'addOutBound') {
                next();
            } else {
                alert('您是仓库管理员，没有权限查看商品管理、用户管理和角色管理页面')
            }
        }
    }
});
export default router