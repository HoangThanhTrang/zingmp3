<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in listBanner1" :key="item.encodeId">
        <a :href="item.link">
          <img class="medium" :src="item.banner" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "banner",
    
    props: {
      listBanner1: {
        required: true,
        type: Object
      }
    },
    // created() {
    //   console.log('1', this.listBanner1);
    // },
  };
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>

