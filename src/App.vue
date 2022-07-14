<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
.doc-page-header {
  font-size: 20px;
}

.doc-chapter {
  margin-top: 40px;
  margin-bottom: 40px;

  .doc-page-header {
    margin-bottom: 20px;
  }
}
</style>
