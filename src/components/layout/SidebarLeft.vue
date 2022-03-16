<template>
  <div>
    <div class="container">
      <div class="brand">
        <div class="zmp_navbar">
          <button class="zmp-btn">
            <div class="logo_zing"></div>
          </button>
        </div>
      </div>
      <div class="zmp_navbar-main">
        <ul class="zmp_menu">
          <li class="zmp_menu-item is_active" >
            <a href="" class="section" title="Cá nhân ">
              <i class="fas fa-music icon"></i>
              <div class="text">Cá nhân </div>
            </a>
          </li>
          <li class="zmp_menu-item">
            <a href="" class="section" title="Cá nhân ">
              <i class="fas fa-compact-disc icon"></i>
              <div class="text">Khám phá</div>
            </a>
          </li>
          <li class="zmp_menu-item">
            <a href="" class="section" title="Cá nhân ">
              <i class="fas fa-chart-line icon"></i>
              <div class="text">#zingchart</div>
            </a>
          </li>
          <li class="zmp_menu-item">
            <a href="" class="section" title="Cá nhân ">
              <i class="fas fa-broadcast-tower icon"></i>
              <div class="text">Radio</div>
            </a>
          </li>
          <li class="zmp_menu-item">
            <a href="" class="section" title="Cá nhân ">
              <i class="fas fa-credit-card icon"></i>
              <div class="text">Theo dõi</div>
            </a>
          </li>
        </ul>
        <div class="sidebar-divide">
          <span class="divide"></span>
        </div>
      </div>
      <div class="zmp_menu_footer">
        <div class="zmp_sidebar_scrollbar">
          <nav class="zmp_nav-footer">
            <ul class="zmp_footer">
              <li class="zmp_footer-item">
                <a href="" class="section" title="Cá nhân ">
                  <i class="far fa-file-audio icon"></i>
                  <div class="text">Nhac mới</div>
                </a>
              </li>
              <li class="zmp_footer-item">
                <a href="" class="section" title="Cá nhân ">
                  <i class="fas fa-headphones-alt icon"></i>
                  <div class="text">Thể loại</div>
                </a>
              </li>
              <li class="zmp_footer-item">
                <a href="" class="section" title="Cá nhân ">
                  <i class="far fa-star icon"></i>
                  <div class="text">Top 100</div>
                </a>
              </li>
              <li class="zmp_footer-item">
                <a href="" class="section" title="Cá nhân ">
                  <i class="fas fa-tv icon"></i>
                  <div class="text">MV</div>
                </a>
              </li>
            </ul>
          </nav>
          <div class="login-nav-container">
            <div class="text">Đăng nhâp để khám phá playlist dành riêng cho bạn</div>
            <button class="zm-btn">
              <span>Đăng nhập </span>
            </button>
          </div>
          <div id="vip" class="login-nav-container">
            <div class="text">Nghe nhạc không quảng cáo cùng kho nhạc VIP</div>
            <button class="zm-btn" style="background-color: #ffdb00; border-color: #ffdb00">
              <span style="color: #000">Đăng nhập </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SidebarLeft",
    data() {
      return {
        menus: [{ id:1,name: "Cá Nhân" }, { id:2,name: "Khám phá" }, {id:3, name: "#zingchart" }, { id:4,name: "Radio" }, {id:5, name: "Theo dõi" }]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .brand {
      .zmp_navbar {
        width: 188px;
        background-color: #231b2e;
        height: 70px;
        position: fixed;
        top: 0;
        padding: 0 25px 0 28px;
        display: flex;
        align-items: center;
        z-index: 1000;
        .zmp-btn {
          font-size: 14px;
          border: none;
          line-height: normal;
          border: 0;
          background-color: #231b2e;
          font-weight: 400;
          text-transform: none;
          text-align: center;
          cursor: pointer;
          position: relative;
          .logo_zing {
            width: 120px;
            height: 40px;
            display: inline-block;
            background: url("https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg") 50% / contain no-repeat;
          }
        }
      }
    }
    .zmp_navbar-main {
      width: 100%;
      position: relative;
      margin-bottom: 15px;
      margin-top: 70px;
      ul {
        margin: 0;
        padding: 0;
      }

      .zmp_menu-item {
        font-weight: 700;
        border-left: 3px solid transparent;
        color: #dadada;
        padding: 10px;
        .section {
          display: flex;
          padding-left: 26px;
          align-items: center;
          .icon {
            width: 24px;
            height: 24px;
            font-size: 24px;
            margin-right: 10px;
            border-radius: 4px;
            color: #dadada;
            flex-shrink: 0;
          }
          .text {
            font-weight: 500;
            margin-left: 10px;
            font-size: 16px;
          }
        }
      }
      .is_active {
        background-color: hsla(0, 0%, 100%, 0.1);
        color: #fff;
        border-left: 3px solid #7200a1;
      }
      .sidebar-divide {
        position: relative;
        height: 1px;
        .divide {
          content: "";
          border-top: 1px solid hsla(0, 14%, 95%, 0.1);
          position: absolute;
          left: 25px;
          right: 25px;
          top: 0;
        }
      }
    }
    .zmp_menu_footer {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      .zmp_sidebar_scrollbar {
        //position: absolute;
        inset: 0px;
        overflow: hidden scroll;
        margin-right: -6px;
        margin-bottom: 0px;
        margin-top: 10px;

        .zmp_nav-footer {
          position: relative;
          width: 100%;
          margin-bottom: 0 !important;
          margin-top: 5px !important;
          .zmp_footer-item {
            font-weight: 700;
            color: #dadada;
            border-left: 3px solid transparent;
            padding: 10px;

            .section {
              display: flex;
              padding-left: 26px;
              align-items: center;
              .icon {
                width: 24px;
                height: 24px;
                font-size: 24px;
                margin-right: 10px;
                border-radius: 4px;
                color: #dadada;
                flex-shrink: 0;
              }
              .text {
                font-weight: 500;
                margin-left: 10px;
                font-size: 16px;
              }
            }
          }
        }
        .login-nav-container {
          padding: 15px 8px;
          border-radius: 8px;
          margin: 10px 20px;
          text-align: center;
          color: var(--white);
          background-color: #7200a1;
          margin-top: 15px;
          .text {
            font-size: 12px;
            margin-bottom: 10px;
            font-weight: 600;
            text-align: center;
            color: #fff;
          }
          .zm-btn {
            border-color: #fff;
            color: #fff;
            padding: 6px 35px;
            font-size: 12px;
            font-weight: 600;
            font-size: 14px;
            border-radius: 999px;
            line-height: normal;
            border: 1px solid hsla(0, 0%, 100%, 0.1);
            display: inline-block;
            text-transform: none;
            text-align: center;
            cursor: pointer;
            position: relative;
            background-color: hsla(0, 0%, 100%, 0.1);
          }
        }
        #vip {
          background-image: linear-gradient(117deg, #5a4be7, #c86dd7 102%);
        }
      }
    }
  }
</style>
