<template>
  <doc-page-section>
    <p>
      用于选择日期或时间。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form>
          <cb-form-group label="日期：">
            <cb-datetime-picker v-model="date1" />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-form>
  &lt;cb-form-group label="日期：">
    &lt;cb-datetime-picker v-model="date" />
  &lt;/cb-form-group>
&lt;/cb-form>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">选择日期和时间</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form>
          <cb-form-group label="时间：">
            <cb-datetime-picker use-time v-model="date2" />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-form>
  &lt;cb-form-group label="时间：">
    &lt;cb-datetime-picker use-time v-model="date" />
  &lt;/cb-form-group>
&lt;/cb-form>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">选择日期范围</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form>
          <cb-form-group label="起止日期：">
            <cb-datetime-picker use-range :begin.sync="beginDate1" :end.sync="endDate1" />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-form>
  &lt;cb-form-group label="起止日期：">
    &lt;cb-datetime-picker use-range :begin.sync="beginDate" :end.sync="endDate" />
  &lt;/cb-form-group>
&lt;/cb-form>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">选择日期和时间范围</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form>
          <cb-form-group label="起止时间：">
            <cb-datetime-picker use-range use-time :begin.sync="beginDate2" :end.sync="endDate2" />
          </cb-form-group>
        </cb-form>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-form>
  &lt;cb-form-group label="起止时间：">
    &lt;cb-datetime-picker use-range use-time :begin.sync="beginDate" :end.sync="endDate" />
  &lt;/cb-form-group>
&lt;/cb-form>
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
  name: 'DemoFormDatetimePicker',

  data() {
    return {
      date1: '',
      date2: '',
      beginDate1: '',
      endDate1: '',
      beginDate2: '',
      endDate2: '',
      prop: [
        {
          name: 'v-model',
          desc: '绑定值，获取和设置日期。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'use-range',
          desc: '是否使用日期范围选择',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'begin',
          desc: '获取和设置开始时间，请使用 .sync 修饰符。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'end',
          desc: '获取和设置结束时间，请使用 .sync 修饰符。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'use-time',
          desc: '是否使用时间',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'separator',
          desc: '输入框中时间范围的分隔符。',
          type: 'string',
          value: '—',
          default: '至'
        },
        {
          name: 'width',
          desc: '设置输入框宽度，单位 px。',
          type: 'string / number',
          value: '—',
          default: '—'
        }
      ]
    }
  }
}
</script>
