
export const useCartStore = defineStore(
    'cart',
    () => {
        const cartList = ref([])
        const addCart = (goods) => {
            //判断商品是否在购物车
            const findItem = cartList.value.find(item => goods.skuId === item.sku)
            if (findItem) {
                findItem.count += goods.count
            } else {
                cartList.value.push(goods)
            }
        }
        const delCart = (skuId) => {
            const index = cartList.value.findIndex(item => skuId === item.sku)
            cartList.value.splice(index, 1)
        }
        //全选功能
        const checKAll = (selected) => {
            cartList.value.forEach(item => item.selected = selected)

        }
        //总数量 所有项的count总和
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
        //总价 所有项的count*price 之和
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
        //是否全选计算属性
        const isAll = computed(() => cartList.value.every(item => item.selected))
        //已选择的数量
        const selectedCount =
            computed(() => cartList.value.filter(item => item.selected)
                .reduce((a, c) => a + c.count, 0))
        //已选商品价格合计
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected)
            .reduce((a, c) => a + c.count * c.price, 0))
        return {
            //属性
            cartList,
            allCount,
            allPrice,
            isAll,
            selectedCount,
            selectedPrice,
            //方法
            addCart,
            delCart,
            checKAll,

        }
    },
    {
        persist: true
    }
)