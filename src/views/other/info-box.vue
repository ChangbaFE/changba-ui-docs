<template>
  <doc-page-section>
    <p>
      一种显示数据的风格。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-row>
          <cb-col span="3">
            <cb-info-box icon-theme="aqua" icon="envelope-o" text="消息" number="1,410" />
          </cb-col>
          <cb-col span="3">
            <cb-info-box icon-theme="green" icon="flag-o" text="书签" number="410" />
          </cb-col>
          <cb-col span="3">
            <cb-info-box icon-theme="yellow" icon="files-o" text="上传" number="13,648" />
          </cb-col>
          <cb-col span="3">
            <cb-info-box icon-theme="red" icon="star-o" text="点赞" number="93,139" />
          </cb-col>
        </cb-row>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-row>
  <cb-col span="3">
    <cb-info-box icon-theme="aqua" icon="envelope-o" text="消息" number="1,410" />
  </cb-col>
  <cb-col span="3">
    <cb-info-box icon-theme="green" icon="flag-o" text="书签" number="410" />
  </cb-col>
  <cb-col span="3">
    <cb-info-box icon-theme="yellow" icon="files-o" text="上传" number="13,648" />
  </cb-col>
  <cb-col span="3">
    <cb-info-box icon-theme="red" icon="star-o" text="点赞" number="93,139" />
  </cb-col>
</cb-row>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">带进度条的风格</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-row>
          <cb-col span="3">
            <cb-info-box theme="aqua" icon="bookmark-o" text="书签" number="1,410" footer="30 天增加了 70%">
              <cb-progress value="70" />
            </cb-info-box>
          </cb-col>
          <cb-col span="3">
            <cb-info-box theme="green" icon="thumbs-o-up" text="点赞" number="1,410" footer="30 天增加了 70%">
              <cb-progress value="70" />
            </cb-info-box>
          </cb-col>
          <cb-col span="3">
            <cb-info-box theme="yellow" icon="calendar" text="日程" number="1,410" footer="30 天增加了 70%">
              <cb-progress value="70" />
            </cb-info-box>
          </cb-col>
          <cb-col span="3">
            <cb-info-box theme="red" icon="comments-o" text="评论" number="1,410" footer="30 天增加了 70%">
              <cb-progress value="70" />
            </cb-info-box>
          </cb-col>
        </cb-row>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-row>
  <cb-col span="3">
    <cb-info-box theme="aqua" icon="bookmark-o" text="书签" number="1,410" footer="30 天增加了 70%">
      <cb-progress value="70" />
    </cb-info-box>
  </cb-col>
  <cb-col span="3">
    <cb-info-box theme="green" icon="thumbs-o-up" text="点赞" number="1,410" footer="30 天增加了 70%">
      <cb-progress value="70" />
    </cb-info-box>
  </cb-col>
  <cb-col span="3">
    <cb-info-box theme="yellow" icon="calendar" text="日程" number="1,410" footer="30 天增加了 70%">
      <cb-progress value="70" />
    </cb-info-box>
  </cb-col>
  <cb-col span="3">
    <cb-info-box theme="red" icon="comments-o" text="评论" number="1,410" footer="30 天增加了 70%">
      <cb-progress value="70" />
    </cb-info-box>
  </cb-col>
</cb-row>
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
  name: 'DemoOtherInfoBox',

  data() {
    return {
      prop: [
        {
          name: 'theme',
          desc: '风格',
          type: 'string',
          value: '参考色彩文档',
          default: '—'
        },
        {
          name: 'icon-theme',
          desc: '图标区域风格',
          type: 'string',
          value: '参考色彩文档',
          default: '—'
        },
        {
          name: 'icon',
          desc: '图标区域的图标名称，只支持 Font Awesome 分类的图标，如需要其他图标请使用 icon 插槽',
          type: 'string',
          value: '参考图标文档',
          default: '—'
        },
        {
          name: 'text',
          desc: '顶部文案内容',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'number',
          desc: '中间数字区域内容',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'footer',
          desc: '有进度条时，进度条下面的内容',
          type: 'string',
          value: '—',
          default: '—'
        }
      ],

      slot: [
        {
          name: 'default',
          desc: '自定义中间区域内容，一般用于增加进度条'
        },
        {
          name: 'icon',
          desc: '自定义图标区域内容'
        },
        {
          name: 'text',
          desc: '自定义顶部区域内容'
        },
        {
          name: 'number',
          desc: '自定义中间数字区域内容'
        },
        {
          name: 'footer',
          desc: '有进度条时，自定义进度条下面的内容'
        }
      ]
    }
  }
}
</script>
