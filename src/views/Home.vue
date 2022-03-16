<template>
  <div class="home">
    <div>
      <banner :listBanner1="listBanner1" />
    </div>
    <div>
      <playlist :playlistToday="playlistToday" />
    </div>
    <div>
      <corner :listCorner="listCorner"/>
    </div>
     <div class="container">
      <span class="zmp_title">Lựa chọn hôm nay</span>

      <div class="zmp_card__wrapper">
        <div class="zmp_card" v-for="item in listNew" :key="item.encodeId">
          <div style="width: 100%">
            <a href="">
              <div class="zmp_img__card">
                <figure class="img_card">
                  <img :src="item.thumbnail" alt="" />
                </figure>
                <div class="card_list__icon">
                  <div class="card_icon__item">
                    <i class="far fa-heart icon_card"></i>
                  </div>
                  <div class="card_icon__item">
                    <i class="far fa-play-circle icon_card"></i>
                  </div>
                  <div class="card_icon__item">
                    <i class="fas fa-ellipsis-h icon_card"></i>
                  </div>
                </div>
              </div>
              <div class="zmp_content_card">
                <h4 class="title">{{ item.title }}</h4>
                <h3 class="sub_title">
                  <span>{{ item.sortDescription }}</span> <br />
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import Base from "../components/base/Base";

  import getRepository from "../service";
  import banner from "../components/base/Banner.vue";
  import playlist from "../components/base/Playlist.vue";
  import corner from "../components/base/Corner.vue";

  const apiHome = getRepository("home");
  export default {
    name: "Home",
    components: { banner, playlist, corner },
    data() {
      return {
        listBanner1: {},
        page: 1,
        data: []
      };
    },
    mounted() {
      this.init();
    },

    computed: {
      listBanner() {
        const banner = this.data.filter(item => item.sectionType === "banner");
        if (banner.length) {
          return banner[0].items;
        }

        return [];
      },

      playlistToday() {
        const listItem = this.data.filter(item => item.sectionId === "hAutoTheme1");
        if (listItem.length) {
          return listItem[0].items;
        }
        return [];
      },
      listCorner() {
        const corner = this.data.filter(item => item.sectionId === "hXone");
        if (corner.length) {
          return corner[0].items;
        }
        return [];
      },
      listNew(){
        const corner = this.data.filter(item => item.sectionId === "hAutoTheme2");
        if (corner.length) {
          return corner[0].items;
        }
        return [];
      }
    },
    methods: {
      async init() {
        // goi api xong gan vao 1 bien data, de truyen vao component con
        // khi scroll xuong, tang page + 1, sau do goi api
        this.data = await apiHome.getListHome({ page: this.page });
        this.listBanner1 = this.data[0].items;
      },

      async loadmore() {
        this.page += 1;
        const result = await apiHome.getListHome({ page: this.page });
        this.data = [...this.data, ...result];
      }
    }
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
  .home {
    .container {
      position: relative;

      overflow: hidden;
      margin: 0 -15px;
      width: 100%;
      margin-top: 40px;
      .zmp_title {
        color: #fff;
        font-weight: 700;
        margin: 14px 14px;
        font-size: 24px;
        flex: 1;
      }
      .zmp_card__wrapper {
        display: flex;
        margin-top: 20px;
        .zmp_card {
          display: flex;

          width: 18%;
          padding-left: 14px;
          padding-right: 14px;
          position: relative;
          .zmp_img__card {
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            flex-shrink: 0;
            .img_card {
              line-height: 0;
              height: 0;
              padding-bottom: 100%;
              border-radius: 5px;
              overflow: hidden;
              margin: 0;
              img {
                height: auto;
                width: 100%;
                transition: 0.3s ease-in-out;
              }
            }
            .img_card:hover img {
              transform: scale(1.1);
              opacity: 0.6;
            }
          }
          .zmp_content_card {
            margin-top: 8px;
            .title {
              text-transform: none;
              display: block;
              white-space: nowrap;
              font-size: 14px;
              font-weight: 700;
              line-height: 1.36;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 5px;
            }
            .sub_title {
              text-transform: none;
              display: block;
              white-space: nowrap;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.36;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 0;
            }
          }
        }
        .card_list__icon {
          position: absolute;
          display: none;
          top: 50%;
          left: 25%;
          .card_icon__item {
            color: #fff;
            .icon_card {
              padding-left: 10px;
              font-size: 24px;
            }
          }
        }
      }
    }
    .zmp_card:hover .card_list__icon {
      display: flex;
    }
  }
</style>
