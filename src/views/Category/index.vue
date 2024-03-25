<script setup>
const { categoryData } = useCateGory();

//轮播图
const { bannerList } = useBanner();
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
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 分类 -->
      <!-- 分类产品图片 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink to="/">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- 分类产品列表 -->
      <div
        class="ref-goods"
        v-for="item in categoryData.children"
        :key="item.id"
      >
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodItem v-for="good in item.goods" :good="good" :key="good.id">
          </GoodItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: relative;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}

.sub-list {
  background: #fff;
  margin-top: 20px;

  h3 {
    font-size: 30px;
    font-weight: normal;
    text-align: center;
  }
  ul {
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    li {
      padding: 20px;
      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }
      img {
        height: 150px;
        width: 150px;
      }
    }
  }
}

.ref-goods {
  background: #fff;
  margin-top: 20px;
  .head {
    text-align: center;
    h3 {
      font-size: 30px;

      font-weight: normal;
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
}
</style>
