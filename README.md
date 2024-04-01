# 电商平台

## 前言

本项目跟着[b站up主]( https://www.bilibili.com/video/BV1sj411y7XK/?share_source=copy_web&vd_source=5d19091a1d300655bd4b9b3228394642) 视频完成，目的是整合自己学习过的前端知识。项目没有后端及服务器相关内容。后端接口采用[柴柴老师项目接口](https://apifox.com/apidoc/shared-c05cb8d7-e591-4d9c-aff8-11065a0ec1de)  

## 项目

### 项目技术

项目技术栈： Vue3 

构建工具： Vite

数据状态管理： Pinia

组件库：ElementPlus

开发框架：Vue3 组合式API

路由管理： Vue-Router

数据交互：Axios

实用函数：VueUse

### 功能模块

项目分为 home页、一级分类页、二级分类页、商品详情页、登录页、购物车、结算支付、会员中心

### 项目结构

结构如下

> ![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-15-52-52-image.png)

项目根目录指向 layout下的index.vue

```js
 path: '/',
      component: () => import('@/views/Layout/index.vue'),
```



<router-view>中的内容

```js
  children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/subCategory/index.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: 'cartlist',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: 'checkout',
          component: () => import('@/views/Checkout/index.vue')

        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: 'paycallback',
          component: () => import('@/views/Pay/PayBack.vue')
        },
        {
          path: 'member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: '',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              component: () => import('@/views/Member/components/UserOrder.vue')
            }
          ]
        }
      ],
```

## 页面截图

![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-00-48-image.png)

![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-02-20-image.png)

![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-05-04-image.png)

![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-05-52-image.png)



![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-06-51-image.png)

![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-07-36-image.png)

![](C:\Users\wei\AppData\Roaming\marktext\images\2024-04-01-16-08-33-image.png)



## 使用



```
git clone https://github.com/vvaniii/wwsc.git    


npm install


```
