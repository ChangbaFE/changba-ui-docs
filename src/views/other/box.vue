<template>
  <doc-page-section>
    <p>
      将信息聚合于 Box 组件中展示。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-box theme="default" title="Box 标题">
          <p>Box 正文</p>
        </cb-box>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-box theme="default" title="Box 标题">
  <p>Box 正文</p>
</cb-box>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">可折叠的</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-box title="Box 标题" collapsable>
          <p>Box 正文</p>
        </cb-box>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-box title="Box 标题" collapsable>
  <p>Box 正文</p>
</cb-box>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">Solid 风格</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-box title="Box 标题" solid>
          <p>Box 正文</p>
        </cb-box>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-box title="Box 标题" solid>
  <p>Box 正文</p>
</cb-box>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">附带操作按钮</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-box title="Box 标题" collapsable>
          <template #tools>
            <cb-button theme="box-tool"><cb-icon name="edit" /></cb-button>
          </template>
          <p>Box 正文</p>
        </cb-box>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-box title="Box 标题" collapsable>
  <template #tools>
    <cb-button theme="box-tool"><cb-icon name="edit" /></cb-button>
  </template>
  <p>Box 正文</p>
</cb-box>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">自定义头部内容</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-box>
          <template #header>
            <h3 class="box-title"><cb-icon name="edit" />自定义头部内容<cb-icon name="chrome" /></h3>
          </template>
          <p>Box 正文</p>
        </cb-box>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-box>
  <template #header>
    <h3 class="box-title"><cb-icon name="edit" />自定义头部内容<cb-icon name="chrome" /></h3>
  </template>
  <p>Box 正文</p>
</cb-box>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">自定义标题内容</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-box>
          <template #title>
            <cb-icon name="edit" />自定义标题内容<cb-icon name="chrome" />
          </template>
          <p>Box 正文</p>
        </cb-box>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-box>
  <template #title>
    <cb-icon name="edit" />自定义标题内容<cb-icon name="chrome" />
  </template>
  <p>Box 正文</p>
</cb-box>
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
  name: 'DemoOtherBox',

  data() {
    return {
      prop: [
        {
          name: 'theme',
          desc: '风格',
          type: 'string',
          value: 'default / primary / success / info / warning / danger',
          default: 'default'
        },
        {
          name: 'title',
          desc: '标题',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'icon',
          desc: '标题图标名称，图标名称请参考图标组件的文档。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'collapsable',
          desc: '是否是可折叠的 Box。',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'collapsed',
          desc: '如果是可折叠的 Box，默认是否折叠起来。',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'solid',
          desc: '是否是 solid 风格的 Box。',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'header-border',
          desc: '头部区域是否带下边框。',
          type: 'boolean',
          value: '—',
          default: 'true'
        },
        {
          name: 'header-class',
          desc: '头部附加样式 class。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'body-class',
          desc: '主体附加样式 class。',
          type: 'string',
          value: '—',
          default: '—'
        }
      ],

      slot: [
        {
          name: 'header',
          desc: '头部内容。'
        },
        {
          name: 'title',
          desc: '头部里的标题内容。'
        },
        {
          name: 'tools',
          desc: '头部里的右侧区域内容。'
        },
        {
          name: 'addition-header',
          desc: '附加的头部内容，一般用于有多个头部的时候。'
        },
        {
          name: 'footer',
          desc: '尾部内容。'
        },
        {
          name: 'addition',
          desc: '尾部后面的附加内容。'
        }
      ]
    }
  }
}
</script>
