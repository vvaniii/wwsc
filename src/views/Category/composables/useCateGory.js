export function useCateGory() {
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id) => {
        try {
            const res = await getTopCategoryAPI(id);
            categoryData.value = res.result;
        } catch (error) {
            console.error("错误：", error);
        }
    };
    onMounted(() => {
        return getCategory(route.params?.id);
    });

    watch(
        () => route.params,
        async (newParams, oldParams) => {
            if (newParams.id !== oldParams.id) {
                await nextTick();
                getCategory(newParams.id);
            }
        }
    );

    return {
        categoryData
    }
}