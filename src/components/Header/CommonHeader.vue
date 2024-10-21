<script>
export default {
  methods: {
    handleSideNavCollapse() {
      // 提交action
      this.$store.dispatch('setCollapse')
    }
  }
}
</script>

<template>
<div class="header-container">
  <div class="left-content">
    <el-button icon="el-icon-s-operation" size="small" @click="handleSideNavCollapse"></el-button>
    <!-- 面包屑 -->
    <span class="breadcrumb-text">首页</span>
  </div>
  <div class="right-content">
    <el-dropdown>
  <span class="el-dropdown-link">
    <img src="../../assets/logo.png" alt="" class="user">
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-bell">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<style lang="less" scoped>
.header-container {
  background: #4b4b4b;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .breadcrumb-text {
    font-size: 15px;
    color: white;
    margin-left: 10px;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;

  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>