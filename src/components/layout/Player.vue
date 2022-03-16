<template>
  <div class="player">
    <div class="player_controls">
      <div class="player_control__container">
        <div class="player_control__left">
          <div class="level_item">
            <div class="media">
              <div class="media_left">
                <div class="thumbnail">
                  <figure class="image">
                    <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/3/2/2/3/32233fec314e9ca715a17a471946cc20.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div class="media_content">
                <div class="song_infor">
                  <span class="song-title-item">
                    <a href="">
                      <span class="item-title"> Em Cần Một Người Quan Tâm </span>
                    </a>
                  </span>
                </div>
                <h3 class="subtitle">
                  <a href="">Liz Kim Cương</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="player_control__center">
          <div class="level-item">
            <div class="actions">
              <button class="zmp_btn is_active">
                <i class="fas fa-random"></i>
              </button>

              <button class="zmp_btn">
                <i class="fas fa-step-backward"></i>
              </button>
              <button class="zmp_btn">
                <i class="far fa-play-circle icon"></i>
              </button>
              <button class="zmp_btn">
                <i class="fas fa-step-forward"></i>
              </button>
              <button class="zmp_btn">
                <i class="fas fa-redo"></i>
              </button>
            </div>
          </div>
          <div class="level-item-narrow">
            <span class="time_left"> 00:00 </span>
            <div class="zm-duration-bar">
              <div class="zm-slider-bar"></div>
            </div>
            <span class="time_right">03:47</span>
          </div>
        </div>
        <div class="player_control__right">
          <button class="level-item">
            <i class="fas fa-volume-up icon"></i>
          </button>
          <div class="zm-duration-bar">
            <div class="zm-slider-bar">
              <div tabindex="0" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" draggable="false" role="slider" class="zm-slider-handle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Player"
  };
</script>

<style lang="scss" scoped>
  .player {
    .player_controls {
      position: fixed;
      z-index: 2;
      left: 0;
      width: 100%;
      bottom: 0;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: #170f23;
      .player_control__container {
        height: 90px;
        min-width: 768px;
        padding: 0 20px;
        background-color: rgba(0, 0, 0, 0.2);
        border-top: 1px solid hsla(0, 0%, 100%, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .player_control__left {
          display: flex;
          position: relative;
          width: 30%;
          z-index: 1;
          align-items: center;
          justify-content: flex-start;
          .level_item {
            width: 100%;
            align-items: center;
            display: flex;
            flex-basis: auto;
            flex-grow: 0;
            flex-shrink: 0;
            justify-content: center;
            .media {
              padding: 0;
              transition: transform 0.5s;
              cursor: inherit;
              width: 100%;
              align-items: center;
              display: flex;
              text-align: left;

              border-radius: 5px;
              -webkit-user-select: none;
              -ms-user-select: none;
              user-select: none;
              .media_left {
                flex-basis: auto;
                flex-grow: 0;
                flex-shrink: 0;
                margin-right: 10px;
                @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
                .thumbnail {
                  position: relative;
                  border-radius: 4px;
                  overflow: hidden;
                  animation-name: spin;
                  animation-play-state: paused;
                  animation-iteration-count: infinite;
                  animation-timing-function: linear;
                  .image {
                    width: 64px;
                    height: 64px;
                    border-radius: 4px;
                    overflow: hidden;
                    img {
                      display: inline-block;
                      vertical-align: top;
                      height: auto;
                      width: 100%;
                    }
                  }
                }
              }
              .media_content {
                flex-basis: auto;
                flex-grow: 1;
                flex-shrink: 1;
                text-align: left;
                align-self: center;
                width: 0;
                min-width: 0;
                max-width: max-content;
                .song_infor {
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  flex-basis: auto;
                  flex-grow: 0;
                  flex-shrink: 0;
                  white-space: nowrap;
                  .song-title-item {
                    line-height: 0;
                    padding-right: 10px;
                    color: #fff;
                    .item-title {
                      font-size: 14px;
                      font-weight: 500;
                      line-height: 1.36;
                      text-overflow: clip;
                      overflow: visible;
                      display: flex;
                      align-items: center;
                    }
                  }
                }
                .subtitle {
                  margin-top: 1px;
                  color: hsla(0, 0%, 100%, 0.5);
                  margin-bottom: 0;
                  display: block;
                  font-size: 12px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  max-width: 100%;
                  line-height: normal;
                  font-weight: 400;
                  a {
                    color: hsla(0, 0%, 100%, 0.5);
                    display: inline-block;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
        .player_control__center {
          flex-grow: 1;
          max-width: 40vw;
          .level-item {
            flex-grow: 1;
            margin-bottom: 8px;
            margin-right: 0;
            align-items: center;
            display: flex;
            flex-basis: auto;
            flex-shrink: 0;
            justify-content: center;
            .actions {
              display: flex;
              flex-shrink: 0;
              justify-content: center;
              align-items: center;
              .zmp_btn {
                font-size: 14px;
                border-radius: 999px;
                line-height: normal;
                border: 0;
                display: inline-block;
                font-weight: 400;
                text-transform: none;
                text-align: center;
                cursor: pointer;
                position: relative;
                background-color: transparent;
                word-break: normal;
                margin: 0 7px;
                line-height: 0;
                padding: 3px;
                border: none;
                color: #fff;
                i {
                  font-size: 20px;
                  padding: 5px;
                  border-radius: 50%;
                  line-height: 66%;
                  display: inline-block;
                }
                .icon {
                  font-size: 43px;
                }
              }
              .is_active {
                color: #c662ef;
              }
            }
          }
          .level-item-narrow {
            align-items: center;
            display: flex;
            flex-basis: auto;
            flex-grow: 0;
            flex-shrink: 0;
            justify-content: center;
            .time_left {
              text-align: right;
              margin-right: 10px;
              opacity: 0.5;
              min-width: 45px;
              font-size: 12px;
              color: #fff;
              font-weight: 500;
            }
            .zm-duration-bar {
              display: flex;
              justify-content: center;
              height: 15px;
              width: 100%;
              cursor: pointer;
              .zm-slider-bar {
                border-radius: 4px;
                align-self: center;
                width: 100%;
                height: 3px;
                background: linear-gradient(to right, #fff 0%, #fff 1.84164%, hsla(0, 0%, 100%, 0.3) 1.84164%, hsla(0, 0%, 100%, 0.3) 100%);
              }
            }
            .time_right {
              margin-left: 10px;
              min-width: 45px;
              font-size: 12px;
              color: #fff;
              font-weight: 500;
            }
          }
        }
        .player_control__right {
          display: flex;
          width: 30%;
          align-items: center;
          justify-content: flex-end;
          flex-basis: auto;
          flex-grow: 0;
          flex-shrink: 0;
          .level-item {
            padding: 3px;
            margin: 0 2px;
            border: none;
            color: #fff;
            font-size: 14px;
            border-radius: 999px;
            line-height: normal;
            display: inline-block;
            font-weight: 400;
            text-transform: none;
            text-align: center;
            cursor: pointer;
            position: relative;
            user-select: none;
            word-break: normal;
            background-color: transparent;
            .icon {
              font-size: 16px;
              padding: 5px;
              border-radius: 50%;
              line-height: 66%;
              display: inline-block;
            }
          }
          .zm-duration-bar {
            display: flex;
            justify-content: center;
            width: 70px;
            height: 15px;
            cursor: pointer;
            .zm-slider-bar {
              border-radius: 4px;
              background: linear-gradient(to right, #fff 0%, #fff 100%, #fff 100%, #fff 100%);
              align-self: center;
              width: 100%;
              height: 3px;
            }
          }
        }
      }
    }
  }
</style>
