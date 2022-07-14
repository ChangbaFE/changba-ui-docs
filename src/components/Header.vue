<template>
  <header class="doc-header main-header">
    <router-link to="/" class="logo">
      <span class="logo-lg"><b>Changba UI</b></span>
    </router-link>

    <nav class="navbar navbar-static-top" role="navigation">
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li>
            <a href="https://github.com/ChangbaFE/changba-ui" target="_blank">Fork</a>
          </li>
          <li>
            <a href="https://github.com/ChangbaFE" target="_blank">ChangbaFE</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DocHeader',

  methods: {
    clickToggle() {
      this.$emit('push-menu');
    }
  }
}
</script>

<style lang="scss">
.doc-header {
  border-bottom: 1px solid #eaecef;
  box-shadow: 0 2px 8px #f0f1f2;
  @media (max-width: 767px) {
    &.main-header .navbar .navbar-custom-menu .dropdown-menu li a {
      color: #777;

      &:hover {
        color: #333;
        background-color: #e1e3e9;
      }
    }
  }

  // &.main-header {
  //   .logo {
  //     text-align: left;
  //     cursor: pointer;
  //   }
  // }

  // .navbar {
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  //   padding-right: 50px;

  //   a {
  //     margin-right: 20px;
  //   }

  //   .inner-link {
  //     line-height: 1.5;
  //     color: #2c3e50;

  //     &:hover,
  //     &.router-link-active,
  //     &.link-active {
  //       border-bottom: 2px solid red;
  //     }
  //   }
  // }

  // .external-link {
  //   img {
  //     width: 20px;
  //   }

  //   img.highlight {
  //     display: none;
  //   }

  //   &:hover {
  //     img {
  //       display: none;

  //       &.highlight {
  //         display: inline-block;
  //       }
  //     }
  //   }
  // }
}
</style>
