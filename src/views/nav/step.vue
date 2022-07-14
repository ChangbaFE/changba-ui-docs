<template>
  <doc-page-section>
    <p>
      引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-steps v-model="step">
          <cb-step>第一步</cb-step>
          <cb-step>第二步</cb-step>
          <cb-step>第三步</cb-step>
          <cb-step>完成</cb-step>
        </cb-steps>
        <cb-button @click="next">下一步</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-steps v-model="step">
  &lt;cb-step>第一步&lt;/cb-step>
  &lt;cb-step>第二步&lt;/cb-step>
  &lt;cb-step>第三步&lt;/cb-step>
  &lt;cb-step>完成&lt;/cb-step>
&lt;/cb-steps>
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
  name: 'DemoNavStep',

  data() {
    return {
      step: 0,

      prop: [
        {
          name: 'value',
          desc: '绑定 v-model，设置当前激活步骤',
          type: 'number',
          value: '—',
          default: '0'
        }
      ]
    }
  },

  methods: {
    next() {
      this.step++;

      if (this.step > 4) {
        this.step = 0;
      }
    }
  }
}
</script>
