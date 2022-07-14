module.exports = [
  {
    path: '/guide',
    redirect: '/guide/install',
    meta: {
      title: '开发指南'
    },
    children: [
      // {
      //   path: 'template',
      //   component: 'guide/template',
      //   meta: {
      //     title: '文档模板'
      //   }
      // },
      // {
      //   path: 'index',
      //   component: 'guide/index',
      //   meta: {
      //     title: '介绍'
      //   }
      // },
      {
        path: 'install',
        component: 'guide/install',
        meta: {
          title: '安装'
        }
      },
      {
        path: 'quick-start',
        component: 'guide/quick-start',
        meta: {
          title: '快速上手'
        }
      }
    ]
  },
  {
    path: '/basic',
    redirect: '/basic/page-section',
    meta: {
      title: '基本组件'
    },
    children: [
      {
        path: 'button',
        component: 'basic/button',
        meta: { title: '按钮' }
      },
      {
        path: 'icon',
        component: 'basic/icon',
        meta: { title: '图标' }
      },
      {
        path: 'layout',
        component: 'basic/layout',
        meta: { title: '布局' }
      },
      {
        path: 'color',
        component: 'basic/color',
        meta: { title: '色彩' }
      }
    ]
  },
  {
    path: '/form',
    redirect: '/form/index',
    meta: {
      title: '表单组件'
    },
    children: [
      {
        path: 'index',
        component: 'form/index',
        meta: { title: '表单容器' }
      },
      {
        path: 'validation',
        component: 'form/validation',
        meta: { title: '表单验证' }
      },
      {
        path: 'form-group',
        component: 'form/form-group',
        meta: { title: '表单项' }
      },
      {
        path: 'input',
        component: 'form/input',
        meta: { title: '输入框' }
      },
      {
        path: 'radio',
        component: 'form/radio',
        meta: { title: '单选框' }
      },
      {
        path: 'checkbox',
        component: 'form/checkbox',
        meta: { title: '复选框' }
      },
      {
        path: 'select',
        component: 'form/select',
        meta: { title: '下拉框' }
      },
      {
        path: 'file',
        component: 'form/file',
        meta: { title: '文件上传' }
      },
      {
        path: 'datetime-picker',
        component: 'form/datetime-picker',
        meta: { title: '日期选择器' }
      },
      {
        path: 'color-picker',
        component: 'form/color-picker',
        meta: { title: '颜色选择器' }
      }
    ]
  },
  {
    path: '/data',
    redirect: 'data/table',
    meta: {
      title: '数据组件'
    },
    children: [
      {
        path: 'table',
        component: 'data/table',
        meta: { title: '表格' }
      },
      {
        path: 'pagination',
        component: 'data/pagination',
        meta: { title: '分页' }
      },
      {
        path: 'label',
        component: 'data/label',
        meta: { title: '标签' }
      },
      {
        path: 'badge',
        component: 'data/badge',
        meta: { title: '标记' }
      },
      {
        path: 'progress',
        component: 'data/progress',
        meta: { title: '进度条' }
      }
    ]
  },
  {
    path: '/nav',
    redirect: 'nav/step',
    meta: {
      title: '导航组件'
    },
    children: [
      {
        path: 'tab',
        component: 'nav/tab',
        meta: { title: '标签页' }
      },
      {
        path: 'step',
        component: 'nav/step',
        meta: { title: '步骤条' }
      }
    ]
  },
  {
    path: '/notice',
    redirect: 'notice/loading',
    meta: {
      title: '反馈组件'
    },
    children: [
      {
        path: 'loading',
        component: 'notice/loading',
        meta: { title: '加载' }
      },
      {
        path: 'message-box',
        component: 'notice/message-box',
        meta: { title: '消息弹窗' }
      },
      {
        path: 'notification',
        component: 'notice/notification',
        meta: { title: '通知' }
      }
    ]
  },
  {
    path: '/other',
    redirect: 'other/dialog',
    meta: {
      title: '其它组件'
    },
    children: [
      {
        path: 'dialog',
        component: 'other/dialog',
        meta: { title: '对话框' }
      },
      {
        path: 'box',
        component: 'other/box',
        meta: { title: 'Box' }
      },
      {
        path: 'callout',
        component: 'other/callout',
        meta: { title: 'Callout' }
      },
      {
        path: 'info-box',
        component: 'other/info-box',
        meta: { title: 'Info Box' }
      },
      {
        path: 'small-box',
        component: 'other/small-box',
        meta: { title: 'Small Box' }
      },
      {
        path: 'tooltip',
        component: 'other/tooltip',
        meta: { title: '文字提示' }
      }
    ]
  }
];
