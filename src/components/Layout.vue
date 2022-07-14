<template>
  <div class="wrapper">
    <doc-header />

    <doc-navigation ref="nav" />

    <div class="content-wrapper" :style="{ 'min-height': minHeight}">
      <section class="content-header">
        <h1>
          {{ $route.meta.title }}
          <small v-if="$route.meta && $route.meta.description">{{ $route.meta.description }}</small>
        </h1>
      </section>

      <router-view />
    </div>
  </div>
</template>

<script>
import DocHeader from '@/components/Header.vue';
import DocNavigation from '@/components/Navigation.vue';
import $ from 'jquery';

export default {
  name: 'DocLayout',

  components: {
    DocHeader,
    DocNavigation
  },

  data() {
    return {
      minHeight: '100%'
    }
  },

  mounted() {
    this.update();
  },

  methods: {
    update() {
      this.minHeight = `${$(this.$refs.nav.$el).height()}px`;
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: #f9f9f9;
  color: #454545;

  > .content::v-deep {
    > p {
      font-size: 16px;
    }

    > .doc-chapter {
      > p {
        font-size: 16px;
      }
    }
  }
}
</style>
