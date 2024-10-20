<script>
export default {
  data() {
    return {
    //   从router中拿数据
      homeRoutes: []
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getHomeRoutes() {
      const layoutRoute = this.$router.options.routes.find(route => route.name === 'layout')
      if (layoutRoute && layoutRoute.children) {
        this.homeRoutes = layoutRoute.children
            .map(child => ({ name: child.name, path: child.path }))
      }
      console.log(this.homeRoutes)
    },
    handleNavItemClick(path) {
      const direction = '/' + path
      // 判断当前路由与跳转路由是否一致
      if (this.$route.path !== direction) {
        this.$router.push(direction)
      }
    }
  },
  mounted() {
    this.getHomeRoutes()
  }
}
</script>

<template>
  <el-col>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <h3>通用后台管理系统</h3>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item v-for="item in homeRoutes" :index="item.name" :key="item.name" @click="handleNavItemClick(item.path)" >
        <i class="el-icon-menu"></i>
        <span slot="title">主页页面({{ item.name }})</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<style scoped>
::-webkit-scrollbar {display: none;}
.el-menu {
  height: 100vh;
  overflow: hidden; /* 超过300px时, 横向滚动条隐藏 */
  border-right: none;
  h3 {
    background: rgb(121 133 146);
    border-radius: 8px;
    margin: 15px 10px;
    padding: 10px;
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>