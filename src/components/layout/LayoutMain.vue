<template>
  <el-container class="main-layout">
    <el-aside class="sidebar-left" style="width: 240px">
      <!-- sidebar left viết ở đây -->
      <SidebarLeft />
    </el-aside>
    <el-container class="main-content">
      <el-header class="be-flex main-header" style="height: 70px">
        <div class="be-flex-item">
          <!-- component header viết ở đây -->
          <Header />
        </div>
      </el-header>
      <el-main class="main-center">
        <router-view />
      </el-main>
    </el-container>
    <el-aside class="sidebar-right" style="width: 320px">
      <!-- sidebar right -->
      <SidebarRight />
    </el-aside>
    <!-- component player bar ở đây -->
    <Player/>
    <!-- coding here...-->
    <!--  -->
  </el-container>
</template>

<script>
  import SidebarLeft from "../layout/SidebarLeft";
  import SidebarRight from "../layout/SidebarRight";
  import Header from "../layout/Header";
  import Player from "../layout/Player.vue";

  export default {
    components: {
      SidebarLeft,
      SidebarRight,
      Header,
      Player,
    }
  };
</script>

<style lang="scss" scoped>
  .main-layout {
    position: relative;
    background-color: var(--background-color);
    height: 100vh;
    .sidebar-left {
      background-color: var(--background-sidebar-color);
    }
    .main-content {
      padding-top: 15px;
      .main-header {
        padding: 0 40px;
      }
      .main-center {
        padding: 20px 40px;
      }
    }
    .sidebar-right {
      padding-top: 15px;
      // border-left: 1px solid hsl(0deg 0% 100% / 10%);
      overflow: hidden;
    }
  }
  .show-player {
    .sidebar-left {
      height: calc(100vh - 90px);
    }
    .main-content {
      height: calc(100vh - 90px);
    }
    .sidebar-right {
      height: calc(100vh - 90px);
    }
  }
</style>
