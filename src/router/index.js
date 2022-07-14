import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout.vue'
import Home from '@/views/home.vue'
import doc from './doc'

Vue.use(VueRouter)

const _import = file => () => import('@/views/' + file + '.vue');
// const _require = file => require('@/views/' + file + '.vue').default;

const buildRouterComponent = (routerMap) => {
  routerMap.forEach((item) => {
    if (!item.meta) {
      item.meta = {};
    }

    item.meta.sourcePath = item.path;

    if (item.path !== '/') {
      item.path = `${item.path}(/index.html)?`;
    }
    else {
      item.path = `${item.path}(index.html)?`;
    }

    if (item.children?.length > 0) {
      item.component = Layout;

      buildRouterComponent(item.children);
    }
    else {
      if (typeof item.component === 'string') {
        item.component = _import(item.component);
      }
    }
  });
};

const routes = [
  { path: '/',  component: Home, hidden: true },
  ...doc
]

// 预处理路由对象
buildRouterComponent(routes);

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/changba-ui/' : '/',
  scrollBehavior: () => ({ x: 0, y: 0, behavior: 'smooth' }),
  routes
})

export default router
export { routes }
