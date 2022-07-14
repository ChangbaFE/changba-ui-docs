<template>
  <doc-page-section>
    <p>
      用于文件上传
    </p>

    <h2 class="doc-page-header">基础用法（自动上传）</h2>
    <p>自动上传是指由组件自动上传到服务器，并直接返回 URL 地址。</p>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="默认按钮文案：">
          <cb-upload v-model="test1" />
        </cb-form-group>
        <cb-form-group label="自定义按钮文案：">
          <cb-upload v-model="test13">按这里上传</cb-upload>
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="默认按钮文案：">
  <cb-upload v-model="test1" />
</cb-form-group>
<cb-form-group label="自定义按钮文案：">
  <cb-upload v-model="test13">按这里上传</cb-upload>
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">禁用状态（自动上传）</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-upload v-model="test2" disabled />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-upload v-model="test2" disabled />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同尺寸（自动上传）</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="超大尺寸：">
          <cb-upload large v-model="test3" />
        </cb-form-group>
        <cb-form-group label="默认尺寸：">
          <cb-upload v-model="test4" />
        </cb-form-group>
        <cb-form-group label="小型尺寸：">
          <cb-upload small v-model="test5" />
        </cb-form-group>
        <cb-form-group label="超小尺寸：">
          <cb-upload tiny v-model="test6" />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="超大尺寸：">
  <cb-upload large v-model="test3" />
</cb-form-group>
<cb-form-group label="默认尺寸：">
  <cb-upload v-model="test4" />
</cb-form-group>
<cb-form-group label="小型尺寸：">
  <cb-upload small v-model="test5" />
</cb-form-group>
<cb-form-group label="超小尺寸：">
  <cb-upload tiny v-model="test6" />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同颜色（自动上传）</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-upload theme="primary" v-model="test7" />
        </cb-form-group>
        <cb-form-group label="演示：">
          <cb-upload theme="success" v-model="test8" />
        </cb-form-group>
        <cb-form-group label="演示：">
          <cb-upload theme="info" v-model="test9" />
        </cb-form-group>
        <cb-form-group label="演示：">
          <cb-upload theme="warning" v-model="test10" />
        </cb-form-group>
        <cb-form-group label="演示：">
          <cb-upload theme="danger" v-model="test11" />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-upload theme="primary" v-model="test7" />
</cb-form-group>
<cb-form-group label="演示：">
  <cb-upload theme="success" v-model="test8" />
</cb-form-group>
<cb-form-group label="演示：">
  <cb-upload theme="info" v-model="test9" />
</cb-form-group>
<cb-form-group label="演示：">
  <cb-upload theme="warning" v-model="test10" />
</cb-form-group>
<cb-form-group label="演示：">
  <cb-upload theme="danger" v-model="test11" />
</cb-form-group>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">手动上传</h2>
    <p>手动上传是表示传统型文件上传，也就是组件直接返回文件二进制数据，并由开发者手动上传给服务器。</p>
    <p>自动上传支持的尺寸和颜色等内容，手动上传也同样支持。</p>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-form-group label="演示：">
          <cb-upload v-model="test12" legacy />
        </cb-form-group>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-form-group label="演示：">
  <cb-upload v-model="test12" legacy />
</cb-form-group>
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
  name: 'DemoFormFile',

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
      test13: '',

      prop: [
        {
          name: 'v-model',
          desc: '绑定值，自动上传组件返回 URL 字符串，手动上传组件返回 File 对象。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'legacy',
          desc: '是否是手动上传',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'preview',
          desc: '是否显示文件预览，支持图片、视频和音频的预览，不支持的文件自动关闭预览。',
          type: 'boolean',
          value: '—',
          default: 'true'
        },
        {
          name: 'preview-size',
          desc: '预览区域大小，单位像素',
          type: 'string',
          value: '—',
          default: '100'
        },
        {
          name: 'theme',
          desc: '按钮风格或类型',
          type: 'string',
          value: 'default / primary / success / info / warning / danger',
          default: 'default'
        },
        {
          name: 'disabled',
          desc: '是否禁用状态',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'large',
          desc: '是否超大按钮',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'small',
          desc: '是否小型按钮',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'tiny',
          desc: '是否超小按钮',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'block',
          desc: '是否块状按钮',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'flat',
          desc: '是否平面按钮',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'url',
          desc: '自动上传组件上传的目标接口 URL，没特殊情况请不要设置这个属性。',
          type: 'string',
          value: '—',
          default: '/service_api/activityTemplate/activityTemplate/uplodeFile'
        }
      ]
    }
  }
}
</script>
