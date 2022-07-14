<template>
  <aside class="doc-navigation main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li v-for="group in menus" :key="group.path">
          <div class="menu-item">
            <span>{{ group.meta.title }}</span>
          </div>
          <ul class="treeview-menu" v-if="group.children">
            <li v-for="item in group.children" :key="item.path" :class="{ active: isActive(group, item) }">
              <router-link :to="`${group.meta.sourcePath}/${item.meta.sourcePath}${postfix}`">
                {{ item.meta.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import { routes } from '@/router';

export default {
  name: 'DocNavigation',

  computed: {
    menus() {
      const menus = routes.filter(item => !item.hidden);
      return menus;
    },
    postfix() {
      return process.env.NODE_ENV === 'production' ? '/index.html' : '';
    }
  },

  methods: {
    isActive(groupRoute, subRoute) {
      const regexp = new RegExp(`^${groupRoute.meta.sourcePath}/${subRoute.meta.sourcePath}(?:(?:/index.html)?|/?)$`);
      return regexp.test(this.$route.path);
    }
  }
}
</script>

<style lang="scss" scoped>
.doc-navigation {
  .sidebar {
    padding-top: 10px;
    padding-bottom: 40px;
    padding-left: 10px;
    font-size: 16px;

    .sidebar-menu>li>.menu-item {
      padding: 15px 5px 12px 15px;
      display: block;
      color: #444;
      font-weight: 600;
      font-size: 18px;
    }

    .sidebar-menu>li>.treeview-menu {
      background-color: transparent;
    }

    .sidebar-menu .treeview-menu {
      display: block;
    }

    .treeview-menu>li>a {
      font-size: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 20px;
    }
  }
}
</style>
