<template>
  <doc-page-section>
    <p>
      用于展示多条结构类似的数据。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-table :data="list">
          <cb-table-column label="index">
            <template #default="{ index }">
              {{ index }}
            </template>
          </cb-table-column>
          <cb-table-column label="ID" data-key="id" />
          <cb-table-column label="名称" data-key="name" />
          <cb-table-column label="操作" width="100">
            <template #default>
              <cb-button block small>编辑</cb-button>
            </template>
          </cb-table-column>
        </cb-table>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
          <textarea>
<cb-table :data="list">
  <cb-table-column label="index">
    <template #default="{ item, index }">
      {{ test1 }}
    </template>
  </cb-table-column>
  <cb-table-column label="ID" data-key="id" />
  <cb-table-column label="名称" data-key="name" />
  <cb-table-column label="操作" width="100">
    <template #default>
      <cb-button block small>编辑</cb-button>
    </template>
  </cb-table-column>
</cb-table>
          </textarea>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <cb-table :data="prop">
        <cb-table-column label="参数" data-key="name" />
        <cb-table-column label="说明" data-key="desc" />
        <cb-table-column label="类型" data-key="type" />
        <cb-table-column label="可选值" data-key="value" />
        <cb-table-column label="默认值" data-key="default" />
      </cb-table>
    </cb-box>

    <h2 class="doc-page-header">cb-table-column 属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <cb-table :data="columnProp">
        <cb-table-column label="参数" data-key="name" />
        <cb-table-column label="说明" data-key="desc" />
        <cb-table-column label="类型" data-key="type" />
        <cb-table-column label="可选值" data-key="value" />
        <cb-table-column label="默认值" data-key="default" />
      </cb-table>
    </cb-box>

    <h2 class="doc-page-header">cb-table-column 插槽</h2>

    <cb-box body-class="table-responsive no-padding">
      <cb-table :data="columnSlot">
        <cb-table-column label="名称" data-key="name" />
        <cb-table-column label="说明" data-key="desc" />
      </cb-table>
    </cb-box>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoDataTable',

  data() {
    return {
      list: [
        { id: 1, name: '名字1' },
        { id: 2, name: '名字2' },
        { id: 3, name: '名字3' },
        { id: 4, name: '名字4' }
      ],
      test1: '{{ index }}',

      prop: [
        {
          name: 'data',
          desc: '列表数据',
          type: 'array / object',
          value: '—',
          default: '—'
        },
        {
          name: 'empty-text',
          desc: '内容为空的时候显示的文案',
          type: 'string',
          value: '—',
          default: '暂无内容'
        },
        {
          name: 'row-key',
          desc: '行数据的 Key，用来优化 Table 的渲染。只用于列表数据是数组的情况下，其默认值为数组索引。如有多层对象，可以使用 a.b.c.d 的方式。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'hover',
          desc: 'hover 风格的表格',
          type: 'boolean',
          value: '—',
          default: 'true'
        },
        {
          name: 'striped',
          desc: 'striped 风格的表格',
          type: 'boolean',
          value: '—',
          default: 'true'
        },
        {
          name: 'bordered',
          desc: 'bordered 风格的表格',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'condensed',
          desc: 'condensed 风格的表格',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ],

      columnProp: [
        {
          name: 'label',
          desc: '列头标题',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'data-key',
          desc: '此列数据的对象 key，如果数据有多层对象，可以使用 a.b.c.d 的方式',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'width',
          desc: '此列宽度，单位像素',
          type: 'string / number',
          value: '—',
          default: '—'
        },
        {
          name: 'type',
          desc: '表格显示数据的方式，如为 image 则会使用 <img> 标签显示数据',
          type: 'string',
          value: 'text / image',
          default: 'text'
        },
        {
          name: 'data-css-class',
          desc: '给此列单元格包裹一个 div 并使用此值设置 class 属性',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'prefix',
          desc: '显示单元格内容的时候附加的前缀字符串',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'postfix',
          desc: '显示单元格内容的时候附加的后缀字符串',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'array-separator',
          desc: '用于设置单元格显示数组时候的分隔符',
          type: 'string',
          value: '—',
          default: ','
        },
        {
          name: 'show-array-by-line',
          desc: '设置是否按行显示数组（用 <p> 标签包裹每个数组元素）',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'replace',
          desc: '用于替换单元格内容，与 replace 函数一样，数组第一个元素为要替换的内容（支持正则），数组第二个元素为替换成的内容',
          type: 'array',
          value: '—',
          default: '—'
        },
        {
          name: 'default-text',
          desc: '用于当前单元格没有内容的时候默认显示的文本',
          type: 'string',
          value: '—',
          default: '—'
        }
      ],

      columnSlot: [
        {
          name: 'label',
          desc: '用于自定义表头内容。'
        },
        {
          name: 'default',
          desc: '作用域插槽，用于自定义单元格内容，插槽提供 item 和 index，index 表示行索引，item 表示当前行数据。'
        }
      ]
    }
  },

  methods: {
    refresh(page = 1) {
      this.$notify.success(`你按了搜索或分页，当前页：${page}`);
    },

    testRefresh() {
      this.$refs.search.$emit('refresh');
    }
  }
}
</script>
