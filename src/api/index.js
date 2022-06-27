import requests from "./request";
//测试请求
export const test = () => requests({ url: '/test', method: 'post', })
    //登录请求
export const reqUserLogin = (data) => requests({ url: '/user/login', data, method: 'post' })
    //获取所有的用户
export const reqUser = (data) => requests({ url: '/user/all', data, method: 'post' })
    // 禁用用户
export const forbiddenUser = (data) => requests({ url: '/user/disable', data, method: 'post' })
    // 启用用户
export const enableUser = (data) => requests({ url: '/user/enable', data, method: 'post' })
    // 查询用户
export const findUser = (data) => requests({ url: '/user/findByTel', data, method: 'post' })
    // 添加用户
export const addUser = (data) => requests({ url: '/user/add', data, method: 'post' })
    //修改用户信息
export const updateUser = (data) => requests({ url: '/user/change', data, method: 'post' })
    // 获取仓库信息
export const reqWarehouse = (data) => requests({ url: '/warehouse/find', data, method: 'post' })
    // 获取仓库库存
export const reqInventory = (data) => requests({ url: '/warehouse/getnum', data, method: 'post' })
    //获取商品信息
export const reqGoods = (data) => requests({ url: '/shop/find', data, method: 'post' })
    //修改商品信息
export const updateGood = (data) => requests({ url: '/shop/change', data, method: 'post' })
    // 禁用商品
export const forbiddenGood = (data) => requests({ url: '/shop/disable', data, method: 'post' })
    // 启用商品
export const enableGood = (data) => requests({ url: '/shop/enable', data, method: 'post' })
    // 添加商品
export const addGood = (data) => requests({ url: '/shop/add', data, method: 'post' })
    // 获取权限信息
export const getRole = () => requests({ url: '/role/showall', method: 'get' })
    //修改权限
export const changeRole = (data) => requests({ url: '/role/change', data, method: 'post' })
    //入库单查询
export const reqInbound = (data) => requests({ url: '/input/show', data, method: 'post' })
    // 出库单查询
export const reqOutbound = (data) => requests({ url: '/output/show', data, method: 'post' })
    // 入库单增加
export const inputAdd = (data) => requests({ url: '/input/add', data, method: 'post' })
    // 入库明细增加
export const inputmessageAdd = (data) => requests({ url: '/inputmessage/add', data, method: 'post' })
    //出库增加
export const outputAdd = (data) => requests({ url: '/output/add', data, method: 'post' })
    // 入库明细增加
export const outputmessageAdd = (data) => requests({ url: '/outputmessage/add', data, method: 'post' })