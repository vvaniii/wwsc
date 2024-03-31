export function loginAPI(user) {
    return http.post('login', user)

}



/**
 * @description: 获取用户可能喜欢的商品列表
 * @param {{ limit = 4 }}
 * @return {*}
 */
export const getLikeListAPI = ({ limit = 4 }) => {
    return http.get('/goods/relevant', { params: { limit } });
}