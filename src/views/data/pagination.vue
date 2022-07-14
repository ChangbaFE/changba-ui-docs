<template>
  <doc-page-section>
    <p>
      当数据量过多时，使用分页分解数据。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-pagination :pager="pager" @change="pageChange" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<template>
  <cb-pagination :pager="pager" @change="pageChange" />
&lt;/template>

&lt;script>
export default {
  methods: {
    pageChange(page = 1) {
      this.pager.current = page;
      this.$notify.success(`你按了页码，当前页：${page}`);
    }
  }
}
&lt;/script>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="prop">
        <template slot="header">
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </template>

        <template slot-scope="{ item }">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.default }}</td>
        </template>
      </doc-table>
    </cb-box>

    <h2 class="doc-page-header">事件</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="event">
        <template slot="header">
          <th>名称</th>
          <th>说明</th>
        </template>

        <template slot-scope="{ item }">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
        </template>
      </doc-table>
    </cb-box>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoDataPagination',

  data() {
    return {
      pager: {
        current: 1,
        total: 4
      },

      prop: [
        {
          name: 'pager',
          desc: '分页数据（常规分页）',
          type: 'object',
          value: '{ current: 当前页数, total: 总页数 }',
          default: '—'
        },
        {
          name: 'pager',
          desc: '分页数据（没有总页数的分页），同时需要把 num-links 设置为 0',
          type: 'object',
          value: '{ current: 当前页数, count: 当前获取的记录数 }',
          default: '—'
        },
        {
          name: 'pager',
          desc: '分页数据（基于主键的分页），要一并设置 primary-key 为 true',
          type: 'object',
          value: '{ key: 当前主键 key, reset: 是否要复位分页组件 }',
          default: '—'
        },
        {
          name: 'num-links',
          desc: '用于分页，表示放在你当前页码的前面和后面的“数字”链接的数量。比如说值为 2 就会在每一边放置两个数字链接。',
          type: 'number',
          value: '—',
          default: '5'
        },
        {
          name: 'primary-key',
          desc: '用于分页，表示是否为主键类型的分页',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'per-page',
          desc: '用于分页，表示每页显示多少条数据',
          type: 'number',
          value: '—',
          default: '20'
        },
        {
          name: 'max-length',
          desc: '在没有总页数的分页情况下，设置最大的数据条数',
          type: 'number',
          value: '—',
          default: '5000'
        }
      ],

      event: [
        {
          name: 'change',
          desc: '页码变更时触发的事件，事件处理函数会传递一个页码参数，页码变更后不会自动高亮当前页码，需要手动赋值当前页码的属性值。'
        }
      ]
    }
  },

  methods: {
    pageChange(page = 1) {
      this.pager.current = page;
      this.$notify.success(`你按了页码，当前页：${page}`);
    }
  }
}
</script>
