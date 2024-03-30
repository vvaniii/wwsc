
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
        //总数量 所有项的count总和
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
        //总价 所有项的count*price 之和
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

        return {
            cartList,
            addCart,
            delCart,
            allCount,
            allPrice,

        }
    },
    {
        persist: true
    }
)