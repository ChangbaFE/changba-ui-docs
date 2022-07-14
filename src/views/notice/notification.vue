<template>
  <doc-page-section>
    <p>
      悬浮出现在页面角落，显示全局的通知提醒消息。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button @click="$cbNotify.notice('这是提示文案')">显示通知（自动关闭）</cb-button>
        <cb-button @click="$cbNotify.notice({ hide: false, text: '这里是提示文案' })">显示通知（不会自动关闭）</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-button @click="$cbNotify.notice('这是提示文案')">显示通知（自动关闭）</cb-button>
<cb-button @click="$cbNotify.notice({ hide: false, text: '这里是提示文案' })">显示通知（不会自动关闭）</cb-button>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">带有倾向性</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button @click="$cbNotify.success('这是提示文案')">成功</cb-button>
        <cb-button @click="$cbNotify.notice('这是提示文案')">警告</cb-button>
        <cb-button @click="$cbNotify.info('这是提示文案')">信息</cb-button>
        <cb-button @click="$cbNotify.error('这是提示文案')">错误</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-button @click="$cbNotify.success('这是提示文案')">成功</cb-button>
<cb-button @click="$cbNotify.notice('这是提示文案')">警告</cb-button>
<cb-button @click="$cbNotify.info('这是提示文案')">信息</cb-button>
<cb-button @click="$cbNotify.error('这是提示文案')">错误</cb-button>
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

    <cb-box>
      <p>请参考 <a href="https://github.com/sciactive/pnotify/tree/v3#configuration-defaults--options" target="_blank">PNotify 官方文档的 Options 部分</a></p>
    </cb-box>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoNoticeNotification',

  data() {
    return {
      test1: '',
      test2: '',

      method: [
        {
          name: '$cbNotify.notice',
          desc: '展示警告通知，默认 3 秒自动关闭',
          param: 'message / options',
          returnValue: '—'
        },
        {
          name: '$cbNotify.success',
          desc: '展示成功通知，默认 3 秒自动关闭',
          param: 'message / options',
          returnValue: '—'
        },
        {
          name: '$cbNotify.info',
          desc: '展示信息通知，默认 3 秒自动关闭',
          param: 'message / options',
          returnValue: '—'
        },
        {
          name: '$cbNotify.error',
          desc: '展示错误通知，默认 1 分钟自动关闭',
          param: 'message / options',
          returnValue: '—'
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
          name: 'v-confirm',
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
      this.$alert('这是一段内容', '标题名称');
    },

    async showConfirm() {
      const { isOk } = await this.$confirm('你确定要继续吗？', '提示');

      if (isOk) {
        this.$cbNotify.success('你按了确认~');
      }
      else {
        this.$cbNotify.success('你取消了~');
      }
    },

    async showPrompt() {
      const { isOk, text } = await this.$prompt('请输入昵称', '提示', {
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
      const { isOk, text } = await this.$prompt('请输入昵称', '提示', {
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

<style lang="scss" scoped>
.queue {
  .btn + .btn,
  .btn-group + .btn-group {
    margin-left: 10px;
  }
}
</style>
