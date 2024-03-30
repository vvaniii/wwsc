


export const useCartStore = defineStore(
    'cart',
    () => {
        const cartList = ref([])
        const userStore = useUserStore()
        const isLogin = computed(() => userStore.userInfo.token)
        //获取登录后最新购物车列表action
        const updateLoginCartList = async () => {
            const res = await findNewCartListAPI()
            cartList.value = res.result
        }
        const addCart = async (goods) => {
            if (isLogin.value) {
                await insertCartAPI(goods)
                await updateLoginCartList()

            } else {
                //判断商品是否在购物车
                const findItem = cartList.value.find(item => goods.skuId === item.sku)
                if (findItem) {
                    findItem.count += goods.count
                } else {
                    cartList.value.push(goods)
                }

            }

        }
        // 删除购物项
        const delCart = async (skuId) => {
            if (isLogin.value) {
                //登录之后加入购物车逻辑
                await delCartAPI([skuId])
                await updateLoginCartList()
            } else {

                const idx = cartList.value.findIndex((item) => skuId === item.skuId)
                cartList.value.splice(idx, 1)
            }
        }
        //全选功能
        const checKAll = (selected) => {
            cartList.value.forEach(item => item.selected = selected)
        }
        //清除购物车
        const clearCart = () => {
            cartList.value = []
        }
        //修改购物项
        const updateCart = async (goods) => {
            const { skuId, count, selected } = goods
            if (isLogin.value) {
                await updateCartItem(skuId, { count, selected })
            }
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
            updateLoginCartList,
            clearCart,
            updateCart,

        }
    },
    {
        persist: true
    }
)