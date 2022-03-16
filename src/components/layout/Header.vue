<template>
  <div class="header">
    <div class="zm_header">
      <div class="level">
        <div class="level_header">
          <button class="zmp_button">
            <i class="fas fa-arrow-left icon ic_back"></i>
          </button>
          <button class="zmp_button">
            <i class="fas fa-arrow-right icon"></i>
          </button>
          <form action="" class="search">
            <div class="search_container">
              <div class="zmp_button">
                <i class="fas fa-search icon"></i>
              </div>
              <div class="input_wrapper">
                <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…" class="form_control" name="" id="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  };
</script>

<style lang="scss" scoped>

  .header {
    .zm_header {
      display: flex;
      align-items: center;
      position: fixed;
      left: 240px;
      top: 0;
      right: 0;
      height: 70px;
      padding: 0 30px;
      z-index: 99;
      min-width: 660px;
      .level {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .level_header {
          margin-right: 10px;
          display: flex;
          align-items: center;
          width: 1000px;
          .zmp_button {
            display: flex;
            align-items: center;
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
            font: inherit;
            color: inherit;
            background-color: transparent;
            word-break: normal;
            padding: 0;
            .icon {
              line-height: 66%;
              display: inline-block;
              font-size: 24px;
              color: #fff;
            }
            .ic_back {
              margin-right: 30px;
            }
          }
          .search {
            position: relative;
            width: 100%;
            max-width: 740px;
            .search_container {
              position: relative;
              border-radius: 20px;
              height: 40px;
              background-color: hsla(0,0%,100%,0.1);
              display: flex;
              padding-left: 10px;
              margin-left: 25px;
              .zmp_button {
                display: flex;
                align-items: center;
                font-size: 14px;
                border-radius: 999px;
                line-height: normal;
                border: 0;
                font-weight: 400;
                text-transform: none;
                text-align: center;
                cursor: pointer;
                position: relative;
                padding-right: 55px;
                .icon {
                  position: absolute;
                  cursor: pointer;
                  font-size: 20px;
                  left: 10px;
                  color: #dadada;
                  display: inline-block;
                }
              }
              .input_wrapper {
                //position: absolute;
                top: 0;
                left: 38px;
                right: 10px;
                bottom: 0;
                width: 100%;
                input {
                  margin: 0;
                  display: inline-block;
                  width: 95%;
                  font-size: 14px;
                  color: #eee;
                  background-clip: padding-box;
                  border: 0;
                  position: relative;
                  top: 2px;
                  height: 34px;
                  line-height: 34px;
                  background-color: transparent;
                  outline: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
