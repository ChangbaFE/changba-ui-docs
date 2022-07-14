<template>
  <pre ref="code" class="doc-highlight" :class="'language-' + language"><slot></slot></pre>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css';

export default {
  name: 'DocHighlight',

  props: {
    language: {
      type: String,
      default: 'html'
    }
  },

  mounted() {
    hljs.configure({
      ignoreUnescapedHTML: true
    });

    const el = this.$refs.code.querySelector('textarea');
    let code;

    if (el) {
      code = el.value;
    }
    else {
      code = this.$refs.code.innerText;
    }

    const result = hljs.highlightAuto(code.trim(), [this.language]);

    this.$refs.code.innerHTML = result.value;
  }
}
</script>

<style lang="scss" scoped>
</style>
