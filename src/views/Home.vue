<script setup>
import ASide from "@/components/SideNav/ASide.vue"
import CommonHeader from "@/components/Header/CommonHeader.vue";
</script>

<template>
<div>
  <el-container>
    <el-aside>
      <a-side></a-side>
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<style scoped>
.el-header {
  padding: 0;
}
</style>