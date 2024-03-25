import http from "@/utils/http";

/**
 * @description: 根据id获得一级分类对象信息
 * @param {*} id 分类id
 * @return {*}
 */
export function getTopCategoryAPI(id) {
    return http.get('/category', { params: { id } });
}

export function getCategoryFilterAPI(id) {
    return http.get('/category/sub/filter', { params: { id } })


}