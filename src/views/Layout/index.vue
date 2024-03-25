<script setup></script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayouNav></LayouNav>
  <LayoutHeader></LayoutHeader>
  <!-- <RouterView :key="$route.fullPath" /> -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>
