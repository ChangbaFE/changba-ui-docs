<script>
import get from 'lodash/get';

export default {
  name: 'DocTable',

  props: {
    data: {
      type: [Array, Object],
      default() {
        return [];
      }
    },

    hover: {
      type: Boolean,
      default: true
    },

    striped: {
      type: Boolean,
      default: true
    },

    bordered: {
      type: Boolean,
      default: false
    },

    condensed: {
      type: Boolean,
      default: false
    },

    emptyText: {
      type: String,
      default: '暂无内容'
    },

    rowKey: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      columnNum: 0
    }
  },

  computed: {
    classList() {
      return {
        'table-striped': this.striped,
        'table-hover': this.hover,
        'table-bordered': this.bordered,
        'table-condensed': this.condensed
      };
    }
  },

  created() {
  },

  mounted() {
    this.update();
  },

  updated() {
    this.update();
  },

  methods: {
    update() {
      this.columnNum = this.$refs?.thead?.querySelectorAll(':scope > th').length ?? 0;
    }
  },

  render(createElement) {
    const emptyTr = createElement('tr', [
      createElement('td', { attrs: { colspan: this.columnNum } }, this.emptyText)
    ]);

    const innerElements = [];
    let dataElements = [];

    if (this.$slots.header) {
      innerElements.push(createElement('thead', [
        createElement('tr', { ref: "thead" }, this.$slots.header)
      ]));
    }

    if (Array.isArray(this.data)) {
      // 是数组
      if (this.data.length > 0) {
        dataElements = this.data.map((item, index) => createElement(
          'tr',
          { key: this.rowKey ? get(item, this.rowKey) : index },
          [this.$scopedSlots.default({ index, item })]
        ));
      }
      else if (this.columnNum > 0) {
        dataElements = [emptyTr];
      }
    }
    else {
      const keys = Object.keys(this.data);

      if (keys.length > 0) {
        dataElements = keys.map((key) => createElement('tr', { key }, [this.$scopedSlots.default({ index: key, item: this.data[key] })]));
      }
      else if (this.columnNum > 0) {
        dataElements = [emptyTr];
      }
    }

    innerElements.push(createElement('tbody', dataElements));

    return createElement('table', {
      staticClass: 'doc-table cb-table table',
      class: this.classList
    }, innerElements);
  }
}
</script>
