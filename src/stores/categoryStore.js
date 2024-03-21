
//pinia 数据的共享
export const usecategoryStore = defineStore('category', () => {
  const categoryList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };
  onMounted(() => getCategory());

  return { categoryList, getCategory }
})
