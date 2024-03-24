<script setup>
const categoryData = ref({});
const route = useRoute();
const getCategory = async () => {
  // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
  console.log(route.params.id);
  const res = await getTopCategoryAPI(route.params.id);

  categoryData.value = res.result;
};
onMounted(() => getCategory());
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>
