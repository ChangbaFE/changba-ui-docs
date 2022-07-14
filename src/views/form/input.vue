<template>
  <doc-page-section>
    <p>
      用于输入文本的输入框
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-input v-model="test1" />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-input v-model="test1" />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">禁用状态</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="禁用：">
          <cb-input v-model="test2" disabled />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="禁用：">
  <cb-input v-model="test2" disabled />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">密码框</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="密码：">
          <cb-input type="password" v-model="test12" />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="密码：">
  <cb-input type="password" v-model="test12" />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同尺寸</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="大型：">
          <cb-input v-model="test3" large />
        </cb-form-group>
        <cb-form-group label="默认：">
          <cb-input v-model="test4" />
        </cb-form-group>
        <cb-form-group label="小型：">
          <cb-input v-model="test5" small />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="大型：">
  <cb-input v-model="test3" large />
</cb-form-group>
<cb-form-group label="默认：">
  <cb-input v-model="test4" / >
</cb-form-group>
<cb-form-group label="小型：">
  <cb-input v-model="test5" small />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">多行文本框</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="多行演示：">
          <cb-input type="textarea" rows="8" v-model="test6" />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="多行演示：">
  <cb-input type="textarea" rows="8" v-model="test6" />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">复合型输入框</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="左侧附带按钮：">
          <cb-input type="text" v-model="test7">
            <template #prepend><cb-button>按钮</cb-button></template>
          </cb-input>
        </cb-form-group>
        <cb-form-group label="右侧附带按钮：">
          <cb-input type="text" v-model="test8">
            <template #append><cb-button>按钮</cb-button></template>
          </cb-input>
        </cb-form-group>
        <cb-form-group label="附带文案：">
          <cb-input type="text" v-model="test9">
            <template #prepend>网址</template>
          </cb-input>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="左侧附带按钮：">
  <cb-input type="text" v-model="test7">
    <template #prepend><cb-button>按钮</cb-button></template>
  </cb-input>
</cb-form-group>
<cb-form-group label="右侧附带按钮：">
  <cb-input type="text" v-model="test8">
    <template #append><cb-button>按钮</cb-button></template>
  </cb-input>
</cb-form-group>
<cb-form-group label="附带文案：">
  <cb-input type="text" v-model="test9">
    <template #prepend>网址</template>
  </cb-input>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">输入框组</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-input-group>
            <cb-input-group-addon>文案1</cb-input-group-addon>
            <cb-input v-model="test10" />
            <cb-input-group-addon>文案2</cb-input-group-addon>
            <cb-input v-model="test11" />
            <cb-input-group-addon>文案3</cb-input-group-addon>
          </cb-input-group>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-input-group>
  <cb-input-group-addon>文案1</cb-input-group-addon>
  <cb-input v-model="test10" />
  <cb-input-group-addon>文案2</cb-input-group-addon>
  <cb-input v-model="test11" />
  <cb-input-group-addon>文案3</cb-input-group-addon>
</cb-input-group>
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
  name: 'DemoFormInput',

  data() {
    return {
      test1: '',
      test2: '',
      test3: '',
      test4: '',
      test5: '',
      test6: '',
      test7: '',
      test8: '',
      test9: '',
      test10: '',
      test11: '',
      test12: '',

      prop: [
        {
          name: 'type',
          desc: '类型',
          type: 'string',
          value: 'text，textarea 和其他原生 input 的 type 值',
          default: 'text'
        },
        {
          name: 'v-model',
          desc: '绑定值，获取和设置内容。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'large',
          desc: '是否大型输入框',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'small',
          desc: '是否小型输入框',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ]
    }
  }
}
</script>
