<template>
  <div class="doc-home">
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-menu">
            <span class="sr-only">Toggle navigation</span>
            <i class="fa fa-bars"></i>
          </button>
          <router-link to="/" class="navbar-brand">
            <span>Changba UI</span>
          </router-link>
        </div>

        <div class="collapse navbar-collapse" id="collapse-menu">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link :to="`/guide/install${postfix}`">组件</router-link>
            </li>
            <li>
              <a href="https://github.com/ChangbaFE/changba-ui" target="_blank">
                <img src="~@/assets/github.svg" class="github" alt="github">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="main-content">
      <div class="container">
        <img src="~@/assets/logo.png" alt="" class="main-image">
        <h1 class="title">Changba UI</h1>
        <p class="desc">一套基于 AdminLTE 的 Vue 组件库</p>
        <router-link :to="`/guide/quick-start${postfix}`">
          <button type="button" class="action">快速上手</button>
        </router-link>
      </div>
    </div>

    <div class="features-menu">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-css3"></i>
              <h4>HTML5 &amp; CSS3</h4>

              <p>
                遵循 HTML5 和 CSS3 规范
              </p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-mobile"></i>
              <h4>响应式设计</h4>

              <p>
                移动优先。适配多种分辨率，从桌面端到移动端设备
              </p>
            </div>
          </div>

          <div class="clearfix visible-sm"></div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-rocket"></i>
              <h4>1000+ 图标</h4>

              <p>
                支持 Font Awesome、Ion Icons 和 Glyphicons 系列图标
              </p>
            </div>
          </div>

          <div class="clearfix visible-md visible-lg"></div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-paint-brush"></i>
              <h4>6 套皮肤</h4>

              <p>
                选择你喜欢的皮肤风格
              </p>
            </div>
          </div>

          <div class="clearfix visible-sm"></div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-globe"></i>
              <h4>兼容主流浏览器</h4>

              <p>
                支持大多数主流浏览器，包括 Safari、IE9+、Chrome、FF 和 Opera
              </p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="feature-item animated fadeInUp delay-3">
              <i class="fa fa-th"></i>
              <h4>组件丰富</h4>

              <p>
                大约 30 个组件或功能插件，并且使用方便
              </p>
            </div>
          </div>

          <div class="clearfix visible-sm visible-md visible-lg"></div>
          <div class="clearfix visible-sm"></div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        MIT Licensed | Copyright © 2020-2021 <b>Changba UI</b>.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DocHome',

  computed: {
    postfix() {
      return process.env.NODE_ENV === 'production' ? '/index.html' : '';
    }
  }
}
</script>

<style lang="scss" scoped>
.doc-home {
  .navbar-default {
    background: transparent;
    margin-bottom: 0;

    .github {
      width: 18px;
    }

    .navbar-brand {
      color: #333;
      font-weight: bold;
    }
  }

  .main-content {
    $color: #ea1d16;

    text-align: center;
    padding-top: 50px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    background: no-repeat url(~@/assets/bg.svg);
    background-size: 100% 100%;
    font-size: 16px;

    .main-image {
      height: 350px;
    }

    .action {
      margin-top: 40px;
      margin-bottom: 2px;
      background-color: #fff;
      padding: 15px 40px;
      text-align: center;
      text-decoration: none;
      color: $color;
      border: 2px solid $color;
      font-size: 24px;
      display: inline-block;
      border-radius: 7px;
      transition: all 0.2s ease-in-out;
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        height: 100%;
        width: 72px;
        display: block;
        position: absolute;
        top: 0;
        left: -108px;
        transform: skewX(-45deg) translateX(0);
        transition: none;
      }

      &:hover {
        background-color: $color;
        color: #fff;
        border-bottom: 4px solid darken($color, 10%);
        margin-bottom: 0;

        &:before {
          transform: skewX(-45deg) translateX(324px);
          transition: all 0.5s ease-in-out;
        }
      }
    }

    @keyframes sheen {
      0% {
        transform: skewY(-45deg) translateX(0);
      }

      100% {
        transform: skewY(-45deg) translateX(12.5em);
      }
    }
  }

  .features-menu {
    padding-bottom: 50px;

    .feature-item {
      margin-bottom: 40px;
      text-align: center;
    }

    .feature-item .fa {
      font-size: 30px;
      border-radius: 5px;
      color: #ddd;
      display: block;
      margin: 0 auto 22px auto;
    }

    .feature-item h4 {
      color: #555;
      font-weight: 500;
      font-size: 20px;
    }

    .feature-item p {
      color: #555;
      font-size: 16px;
    }
  }

  .footer {
    padding: 10px 0;
    background: #222;
    color: #fff;
    text-align: center;
  }
}
</style>
