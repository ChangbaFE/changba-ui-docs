<template>
  <doc-page-section>
    <p>
      加载数据时显示动效。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-table :data="list" v-cb-loading="loading">
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
<cb-table :data="list" v-cb-loading="loading">
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

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoNoticeLoading',

  data() {
    return {
      loading: false,
      list: [
        { id: 1, name: '名字1' },
        { id: 2, name: '名字2' },
        { id: 3, name: '名字3' },
        { id: 4, name: '名字4' }
      ],
      test1: '{{ index }}',

      prop: [
        {
          name: 'v-cb-loading',
          desc: '在需要加载动画的组件上使用 v-cb-loading 指令，通过传入的变量控制是否显示加载动画，true 显示，false 不显示。',
          type: '—',
          value: '—',
          default: '—'
        },
        {
          name: 'loading-text',
          desc: '设置自定义加载文案。',
          type: 'string',
          value: '—',
          default: '—'
        }
      ]
    }
  },

  created() {
    this.loading = true;
  }
}
</script>
