<script setup>
import ASide from "@/components/SideNav/ASide.vue"
</script>

<template>
<div>
  <el-container>
    <el-aside>
      <a-side></a-side>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<style scoped>

</style>