<template>
  <doc-page-section>
    <p>
      用于醒目的显示一些文案。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-callout theme="danger" title="标题" text="内容" />
        <cb-callout theme="info" title="标题" text="内容" />
        <cb-callout theme="warning" title="标题" text="内容" />
        <cb-callout theme="success" title="标题" text="内容" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-callout theme="danger" title="标题" text="内容" />
<cb-callout theme="info" title="标题" text="内容" />
<cb-callout theme="warning" title="标题" text="内容" />
<cb-callout theme="success" title="标题" text="内容" />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">自定义</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-callout theme="info">
          <template #title>
            <h4><cb-icon name="bullhorn" /> 自定义标题</h4>
          </template>
          <h5>自定义内容</h5>
        </cb-callout>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-callout theme="info">
  <template #title>
    <h4><cb-icon name="bullhorn" /> 自定义标题</h4>
  </template>
  <h5>自定义内容</h5>
</cb-callout>
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

    <h2 class="doc-page-header">插槽</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="slot">
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
  name: 'DemoOtherCallout',

  data() {
    return {
      prop: [
        {
          name: 'theme',
          desc: '风格',
          type: 'string',
          value: 'success / info / warning / danger',
          default: '—'
        },
        {
          name: 'title',
          desc: '标题',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'text',
          desc: '内容',
          type: 'string',
          value: '—',
          default: '—'
        }
      ],

      slot: [
        {
          name: 'title',
          desc: '用于自定义标题。'
        }
      ]
    }
  }
}
</script>
