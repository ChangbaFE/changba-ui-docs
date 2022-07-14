<template>
  <doc-page-section>
    <p>
      用于表单数据的校验。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form button="提交" @submit="handleSubmit" v-cb-validation:main>
          <cb-form-group label="必填项：">
            <cb-input v-model="test1" required />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form @submit="handleSubmit" v-cb-validation>
  <cb-form-group label="演示：">
    <cb-input v-model="test1" required />
  </cb-form-group>
</cb-form>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">多个表单验证的时候指定表单验证名称</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form button="提交" @submit="handleSubmit" v-cb-validation:test-validation>
          <cb-form-group label="必填项：">
            <cb-input v-model="test2" required />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form button="提交" @submit="handleSubmit" v-cb-validation:test-validation>
  <cb-form-group label="必填项：">
    <cb-input v-model="test2" required />
  </cb-form-group>
</cb-form>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="prop">
        <template slot="header">
          <th width="100">参数</th>
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
  name: 'DemoFormValidation',

  data() {
    return {
      test1: '',
      test2: '',

      prop: [
        {
          name: 'v-cb-validation',
          desc: '在需要启用表单验证的 cb-form 组件上使用这个指令。如果表单校验失败，不会触发 submit 事件。如果页面有多个表单校验，可以给指令传递一个参数表示名称。单个表单验证对象实例可以通过 this.$cbValidator 获取，多个表单验证对象实例可以通过 this.$cbValidator[名称] 获取。输入项的具体验证规则，请参考 http://parsleyjs.org/doc/index.html#validators',
          type: '—',
          value: '—',
          default: '—'
        }
      ]
    }
  },

  methods: {
    handleSubmit() {
      this.$cbNotify.success('你提交了表单~');
    }
  }
}
</script>
