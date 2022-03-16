<template>
  <div class="container">
    <div class="now_playing-bar">
      <div class="player_queue">
        <div class="player-queue_container">
          <div class="player-queue__header">
            <div class="level">
              <div class="tab-bars">
                <div class="level_item" :class="{ is_active: isActive }" @click="isActive = !isActive">
                  <h6>Danh sách phát</h6>
                </div>
                <div class="level_item">
                  <h6>Nghe gần đây</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="player-queue_scroll">
            <div class="player_all">
              <div class="queue_scroll">
                <div style="top: 0px; position: absolute; height: 100%; width: 100%">
                  <div class="player_queue-list">
                    <div style="z-index: 1065">
                      <div class="list_item">   
                        <div class="media">
                          <i class="fas fa-play icon_play"></i>
                          <div class="media_item">
                            <div class="song_thumb">
                              <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/covers/d/4/d4b0130963b63a7428b0408f52da3985_1497603367.jpg" alt="" />
                              <div class="opacity"></div>
                            </div>
                            <div class="card_infor">
                              <div class="title-wrapper">
                                <span class="item_title">
                                  <span> Bụi hoa giấy </span>
                                </span>
                              </div>
                              <h3 class="sub_title">
                                <a href="" class="is_ghost">Trang</a>
                              </h3>
                          </div>
                            </div>
                        </div>
                            <div class="zmp_actions__container"></div>
                      </div>
                      <div class="list_item">   
                        <div class="media">
                          <i class="fas fa-play icon_play"></i>
                          <div class="media_item">
                            <div class="song_thumb">
                              <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_webp/covers/d/4/d4b0130963b63a7428b0408f52da3985_1497603367.jpg" alt="" />
                              <div class="opacity"></div>
                            </div>
                            <div class="card_infor">
                              <div class="title-wrapper">
                                <span class="item_title">
                                  <span> Bụi hoa giấy </span>
                                </span>
                              </div>
                              <h3 class="sub_title">
                                <a href="" class="is_ghost">Trang</a>
                              </h3>
                          </div>
                            </div>
                        </div>
                            <div class="zmp_actions__container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SidebarRight",
    data() {
      return {
        isActive: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  .now_playing-bar {
    // position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 70px;
    z-index: 1000;
    .player_queue {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 90px;
      width: 330px;
      border-bottom: none;
      border-left: 1px solid hsla(0, 0%, 100%, 0.1);
      .player-queue_container {
        height: calc(100vh - 90px);
        max-height: calc(100vh - 90px);
        bottom: 0;
        right: 0;
        position: relative;
        border-radius: inherit;
        display: flex;
        flex-direction: column;
        .player-queue__header {
          padding: 14px 0;
          position: relative;
          .level {
            padding: 0 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .tab-bars {
              flex: 1 1;
              border-radius: 999px;
              background-color: hsla(0, 0%, 100%, 0.1);
              padding: 3px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              height: 25px;
              .level_item {
                align-items: center;
                display: flex;
                flex-basis: auto;

                flex-shrink: 0;
                justify-content: center;
                border-radius: 999px;
                padding: 5px 0;
                cursor: pointer;
                flex-grow: 1;

                h6 {
                  color: #dadada;
                  font-size: 12px;
                }
              }
              .is_active {
                box-shadow: 0 1px 3px 0;
                background-color: hsla(0, 0%, 100%, 0.3);
                color: #fff;
                height: 15px;
              }
            }
          }
        }
        .player-queue_scroll {
          flex: 1 1;
          .player_all {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            .queue_scroll {
              position: absolute;
              inset: 0px;
              overflow: hidden scroll;
              margin-right: -6px;
              margin-bottom: 0px;
              .player_queue-list {
                position: relative;
                padding: 0 8px 15px;
               
                .list_item {
                  border-radius: 4px;
                  .media {
                    align-items: center;
                    display: flex;
                    text-align: left;
                   
                    border-radius: 5px;
                    user-select: none;
                    padding: 8px;
                    .icon_play {
                      top: 30px;
                      color: #fff;
                      position: absolute;
                      left: 30px;
                      display: none;
                    }
                    .media_item {
                      display: flex;
                      width: 50%;
                      flex-grow: 1;
                      flex-shrink: 1;
                      margin-right: 10px;
                      flex-basis: auto;
                      align-items: center;
                      .song_thumb {
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                        flex-shrink: 0;
                        display: block;
                        position: relative;
                        //overflow: hidden;
                        border-radius: 4px;
                        opacity: 0.6;
                        cursor: pointer;
                        figure {
                          background-color: hsla(0, 0%, 100%, 0.1);
                        }
                        img {
                          width: 40px;
                          height: 40px;
                          position: absolute;
                          top: 0;
                          left: 0;
                          bottom: 0;
                          right: 0;
                        }
                      }
                      .card_infor {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        opacity: 0.6;
                        .title-wrapper {
                          color: #fff;
                          max-width: 100%;
                          display: flex;
                          align-items: center;
                            margin-top: 10px;
                          .item_title {
                            display: flex;
                            align-items: center;
                            flex: 1 1;
                            line-height: 1.3;
                            text-transform: none;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            max-width: 100%;
                            vertical-align: top;
                          }
                        }

                        .sub_title {
                          color: hsla(0, 0%, 100%, 0.6);
                          line-height: 1.33;
                          display: block;
                          font-size: 12px;
                          margin-top: 3px;
                          white-space: nowrap;
                          text-overflow: ellipsis;
                          overflow: hidden;
                          max-width: 100%;
                        }
                      }
                      .card_infor:hover {
                        opacity: 1;
                      }
                    }
                  }
                  .media:hover .icon_play{
                      display: block;
                  }
                  .media:hover{
                      background-color: hsla(0, 0%, 100%, 0.1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
