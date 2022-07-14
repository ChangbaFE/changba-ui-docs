<template>
  <doc-page-section>
    <p>
      模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
    </p>

    <h2 class="doc-page-header">消息提示</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-button @click="showAlert">点击打开消息弹窗</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<template>
  <cb-button @click="showAlert">点击打开消息弹窗</cb-button>
&lt;/template>

&lt;script>
export default {
  methods: {
    showAlert() {
      this.$cbAlert('这是一段内容', '标题名称');
    }
  }
}
&lt;/script>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">确认消息</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-button @click="showConfirm">点击打开消息弹窗</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<template>
  <cb-button @click="showConfirm">点击打开消息弹窗</cb-button>
&lt;/template>

&lt;script>
export default {
  methods: {
    async showConfirm() {
      const { isOk } = await this.$cbConfirm('你确定要继续吗？', '提示');

      if (isOk) {
        this.$cbNotify.success('你按了确认~');
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    }
  }
}
&lt;/script>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">提交内容</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-button @click="showPrompt">点击打开消息弹窗</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<template>
  <cb-button @click="showPrompt">点击打开消息弹窗</cb-button>
&lt;/template>

&lt;script>
export default {
  methods: {
    async showPrompt() {
      const { isOk, text } = await this.$cbPrompt('请输入昵称', '提示', {
        rules: { required: true }
      });

      if (isOk) {
        this.$cbNotify.success(`你按了确认~并输入了 ${text}`);
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    }
  }
}
&lt;/script>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">异步提交内容</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-button @click="showPromptAsync">点击打开消息弹窗</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<template>
  <cb-button @click="showPromptAsync">点击打开消息弹窗</cb-button>
&lt;/template>

&lt;script>
export default {
  methods: {
    async showPromptAsync() {
      const { isOk, text } = await this.$cbPrompt('请输入昵称', '提示', {
        rules: { required: true },
        beforeClose({ isOk, text, button }) {
          if (isOk) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 2000);
            });
          }
        }
      });

      if (isOk) {
        this.$cbNotify.success(`你按了确认~并输入了 ${text}`);
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    }
  }
}
&lt;/script>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">操作确认弹窗（使用指令）</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-button @click="$cbNotify.success('你按了按钮~')" v-cb-confirm>点击执行操作</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-button @click="$cbNotify.success('你按了按钮~')" v-cb-confirm>点击执行操作</cb-button>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">全局方法</h2>
    <p>直接在组件中使用 this 调用</p>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="method">
        <template slot="header">
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
          <th>返回值</th>
        </template>

        <template slot-scope="{ item }">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.param }}</td>
          <td>{{ item.returnValue }}</td>
        </template>
      </doc-table>
    </cb-box>

    <h2 class="doc-page-header">Options</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="options">
        <template slot="header">
          <th>参数名</th>
          <th>说明</th>
          <th width="300">类型</th>
          <th width="100">默认值</th>
        </template>

        <template slot-scope="{ item }">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.default }}</td>
        </template>
      </doc-table>
    </cb-box>

    <h2 class="doc-page-header">指令</h2>

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
  name: 'DemoNoticeMessageBox',

  data() {
    return {
      test1: '',
      test2: '',

      method: [
        {
          name: '$cbAlert',
          desc: '展示消息提示弹窗',
          param: 'message, title, options',
          returnValue: 'promise'
        },
        {
          name: '$cbConfirm',
          desc: '展示消息确认弹窗',
          param: 'message, title, options',
          returnValue: 'promise'
        },
        {
          name: '$cbPrompt',
          desc: '展示提交内容弹窗',
          param: 'message, title, options',
          returnValue: 'promise'
        }
      ],

      options: [
        {
          name: 'width',
          desc: '弹窗宽度，单位为 px',
          type: 'number / string',
          default: '396px'
        },
        {
          name: 'hideClose',
          desc: '是否隐藏弹窗关闭按钮',
          type: 'boolean',
          default: 'false'
        },
        {
          name: 'placeholder',
          desc: '用于 prompt 弹窗，设置输入框 placeholder 内容',
          type: 'string',
          default: '—'
        },
        {
          name: 'label',
          desc: '用于 prompt 弹窗，设置输入框 label 内容',
          type: 'string',
          default: '—'
        },
        {
          name: 'multiline',
          desc: '用于 prompt 弹窗，是否是多行输入框。',
          type: 'boolean',
          default: 'false'
        },
        {
          name: 'rows',
          desc: '用于 prompt 弹窗，设置多行输入框行数。',
          type: 'number',
          default: '1'
        },
        {
          name: 'rules',
          desc: '用于 prompt 弹窗，设置输入框的表单验证规则，具体规则参考表单验证章节。',
          type: 'object',
          default: '—'
        },
        {
          name: 'defaultValue',
          desc: '用于 prompt 弹窗，设置输入框默认值。',
          type: 'string',
          default: '—'
        },
        {
          name: 'beforeClose',
          desc: '用于 prompt 弹窗，关闭前的回调，可用于暂停弹窗的关闭。isOk 表示是否按了确认按钮；text 表示输入的内容；button 表示按下的按钮名称，可能值是 yes / cancel / close；promise resolve false 时阻止弹窗关闭，否则弹窗关闭。',
          type: '({ isOk, text, button }) => promise',
          default: '—'
        }
      ],

      prop: [
        {
          name: 'v-cb-confirm',
          desc: '使用这个指令会拦截组件的 click 和 submit 事件，用户确认后才会继续执行原事件处理函数。如需要定制确认弹窗的文案，可以给指令传递 string 或 object 类型的参数，string 类型参数只设置标题，object 类型参数可以设置标题和内容 { title, message }',
          type: '—',
          value: '—',
          default: '—'
        }
      ]
    }
  },

  methods: {
    showAlert() {
      this.$cbAlert('这是一段内容', '标题名称');
    },

    async showConfirm() {
      const { isOk } = await this.$cbConfirm('你确定要继续吗？', '提示');

      if (isOk) {
        this.$cbNotify.success('你按了确认~');
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    },

    async showPrompt() {
      const { isOk, text } = await this.$cbPrompt('请输入昵称', '提示', {
        rules: { required: true }
      });

      if (isOk) {
        this.$cbNotify.success(`你按了确认~并输入了 ${text}`);
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    },

    async showPromptAsync() {
      const { isOk, text } = await this.$cbPrompt('请输入昵称', '提示', {
        rules: { required: true },
        beforeClose({ isOk, text, button }) {
          console.log(text, button);
          if (isOk) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 2000);
            });
          }
        }
      });

      if (isOk) {
        this.$cbNotify.success(`你按了确认~并输入了 ${text}`);
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    }
  }
}
</script>
