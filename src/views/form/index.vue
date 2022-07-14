<template>
  <doc-page-section>
    <p>
      由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。
    </p>

    <h2 class="doc-page-header">典型表单</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form button="保存" @submit="handleSubmit">
          <cb-form-group label="活动ID：" static="1234567890" />
          <cb-form-group label="活动名称：">
            <cb-input v-model="form.name" />
          </cb-form-group>
          <cb-form-group label="活动类型：">
            <cb-select v-model="form.type">
              <option value="1">类型一</option>
              <option value="2">类型二</option>
            </cb-select>
          </cb-form-group>
          <cb-form-group label="活动时间：">
            <cb-datetime-picker v-model="form.date" use-time />
          </cb-form-group>
          <cb-form-group label="活动性质：">
            <cb-checkbox-group inline v-model="form.data1">
              <cb-checkbox value="1">抽奖</cb-checkbox>
              <cb-checkbox value="2">满赠</cb-checkbox>
              <cb-checkbox value="3">满减</cb-checkbox>
              <cb-checkbox value="4">返利</cb-checkbox>
            </cb-checkbox-group>
          </cb-form-group>
          <cb-form-group label="特殊资源：">
            <cb-radio-group inline v-model="form.data2">
              <cb-radio value="1">线上活动</cb-radio>
              <cb-radio value="2">线下活动</cb-radio>
            </cb-radio-group>
          </cb-form-group>
          <cb-form-group label="活动描述：">
            <cb-input type="textarea" v-model="form.desc" />
          </cb-form-group>
          <cb-form-group label="活动图片：" help="支持PNG">
            <cb-upload v-model="form.file">选择图片文件</cb-upload>
          </cb-form-group>
          <cb-form-group label="活动颜色：">
            <cb-color-picker v-model="form.color" />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form button="保存" @submit="handleSubmit">
  <cb-form-group label="活动ID：" static="1234567890" />
  <cb-form-group label="活动名称：">
    <cb-input v-model="form.name" />
  </cb-form-group>
  <cb-form-group label="活动类型：">
    <cb-select v-model="form.type">
      <option value="1">类型一</option>
      <option value="2">类型二</option>
    </cb-select>
  </cb-form-group>
  <cb-form-group label="活动时间：">
    <cb-datetime-picker v-model="form.date" use-time />
  </cb-form-group>
  <cb-form-group label="活动性质：">
    <cb-checkbox-group inline v-model="form.data1">
      <cb-checkbox value="1">抽奖</cb-checkbox>
      <cb-checkbox value="2">满赠</cb-checkbox>
      <cb-checkbox value="3">满减</cb-checkbox>
      <cb-checkbox value="4">返利</cb-checkbox>
    </cb-checkbox-group>
  </cb-form-group>
  <cb-form-group label="特殊资源：">
    <cb-radio-group inline v-model="form.data2">
      <cb-radio value="1">线上活动</cb-radio>
      <cb-radio value="2">线下活动</cb-radio>
    </cb-radio-group>
  </cb-form-group>
  <cb-form-group label="活动描述：">
    <cb-input type="textarea" v-model="form.desc" />
  </cb-form-group>
  <cb-form-group label="活动图片：" help="支持PNG">
    <cb-upload v-model="form.file">选择图片文件</cb-upload>
  </cb-form-group>
  <cb-form-group label="活动颜色：">
    <cb-color-picker v-model="form.color" />
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
  name: 'DemoFormIndex',

  data() {
    return {
      form: {
        data1: [],
        data2: ''
      },
      prop: [
        {
          name: 'type',
          desc: '表单的类型，默认是垂直布局，horizontal 表示水平布局，inline 表示内联表单，具体可参考 bootstrap v3 的文档',
          type: 'string',
          value: '— / horizontal / inline',
          default: '—'
        },
        {
          name: 'button',
          desc: '表单的默认提交按钮文本，为空表示不显示按钮',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'button-theme',
          desc: '表单的默认提交按钮的风格',
          type: 'string',
          value: 'default / primary / success / info / warning / danger',
          default: 'primary'
        },
        {
          name: 'left-span',
          desc: '表单左侧字段栅格宽度（左右宽度合计应该等于 12）',
          type: 'string / number',
          value: '—',
          default: '2'
        },
        {
          name: 'right-span',
          desc: '表单右侧字段栅格宽度（左右宽度合计应该等于 12）',
          type: 'string / number',
          value: '—',
          default: '10'
        }
      ],
      event: [
        {
          name: 'submit',
          desc: '提交事件，如果有表单验证则会在验证通过后才会触发这个事件，单击默认提交按钮也会触发这个事件'
        }
      ]
    }
  },

  methods: {
    handleSubmit() {
      this.$notify.success('保存成功！');
    }
  }
}
</script>
