
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

        return {
            cartList,
            addCart,
        }
    },
    {
        persist: true
    }
)