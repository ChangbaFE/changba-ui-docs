<template>
  <doc-page-section>
    <p>
      用于展示操作进度，告知用户当前状态和预期。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress v-model="test1" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress v-model="test1" />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">显示进度文本</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress v-model="test1" show-text />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress v-model="test1" show-text />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同颜色</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress theme="success" v-model="test2" />
        <cb-progress theme="info" v-model="test3" />
        <cb-progress theme="warning" v-model="test4" />
        <cb-progress theme="danger" v-model="test5" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress theme="success" v-model="test2" />
<cb-progress theme="info" v-model="test3" />
<cb-progress theme="warning" v-model="test4" />
<cb-progress theme="danger" v-model="test5" />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同尺寸</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress v-model="test2" />
        <cb-progress theme="success" small v-model="test3" />
        <cb-progress theme="warning" tiny v-model="test4" />
        <cb-progress theme="danger" tinier v-model="test5" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress v-model="test2" />
<cb-progress theme="success" small v-model="test3" />
<cb-progress theme="warning" tiny v-model="test4" />
<cb-progress theme="danger" tinier v-model="test5" />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">条纹效果</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress theme="success" striped v-model="test2" />
        <cb-progress theme="info" striped v-model="test3" />
        <cb-progress theme="warning" striped v-model="test4" />
        <cb-progress theme="danger" striped v-model="test5" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress theme="success" striped v-model="test2" />
<cb-progress theme="info" striped v-model="test3" />
<cb-progress theme="warning" striped v-model="test4" />
<cb-progress theme="danger" striped v-model="test5" />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">垂直排列</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress theme="success" vertical v-model="test2" />
        <cb-progress theme="info" vertical small v-model="test3" />
        <cb-progress theme="warning" vertical tiny v-model="test4" />
        <cb-progress theme="danger" vertical tinier v-model="test5" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress theme="success" vertical v-model="test2" />
<cb-progress theme="info" vertical small v-model="test3" />
<cb-progress theme="warning" vertical tiny v-model="test4" />
<cb-progress theme="danger" vertical tinier v-model="test5" />
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">动画效果</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-progress v-model="test6" striped :active="active" />
        <cb-button @click="active = !active">切换动画</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-progress v-model="test6" striped :active="active" />
<cb-button @click="active = !active">切换动画</cb-button>
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

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoDataProgress',

  data() {
    return {
      test1: 60,
      test2: 40,
      test3: 20,
      test4: 60,
      test5: 80,
      test6: 45,
      active: false,

      prop: [
        {
          name: 'v-model',
          desc: '绑定值，表示进度百分比。',
          type: 'number',
          value: '—',
          default: '—'
        },
        {
          name: 'theme',
          desc: '风格',
          type: 'string',
          value: '参考颜色文档',
          default: '—'
        },
        {
          name: 'show-text',
          desc: '是否显示百分比文案',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'text',
          desc: '自定义百分比文案',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'striped',
          desc: '条纹效果',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'vertical',
          desc: '垂直进度条',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'active',
          desc: '动画效果',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'small',
          desc: '小型进度条',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'tiny',
          desc: '超小进度条',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'tinier',
          desc: '微型进度条',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.queue {
  a,
  .cb-button {
    margin-right: 10px;
  }
}
</style>
