<template>
  <doc-page-section>
    <p>
      分隔内容上有关联但属于不同类别的数据集合。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-tabs v-model="test1">
          <cb-tab-pane label="标签1">
            内容1
          </cb-tab-pane>
          <cb-tab-pane label="标签2">
            内容2
          </cb-tab-pane>
          <cb-tab-pane label="标签3">
            内容3
          </cb-tab-pane>
          <cb-tab-pane label="标签4">
            内容4
          </cb-tab-pane>
        </cb-tabs>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-tabs v-model="test1">
  <cb-tab-pane label="标签1">
    内容1
  </cb-tab-pane>
  <cb-tab-pane label="标签2">
    内容2
  </cb-tab-pane>
  <cb-tab-pane label="标签3">
    内容3
  </cb-tab-pane>
  <cb-tab-pane label="标签4">
    内容4
  </cb-tab-pane>
</cb-tabs>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">Pills 风格</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-tabs pills v-model="test2">
          <cb-tab-pane label="标签1">
            内容1
          </cb-tab-pane>
          <cb-tab-pane label="标签2">
            内容2
          </cb-tab-pane>
          <cb-tab-pane label="标签3">
            内容3
          </cb-tab-pane>
          <cb-tab-pane label="标签4">
            内容4
          </cb-tab-pane>
        </cb-tabs>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-tabs pills v-model="test2">
  <cb-tab-pane label="标签1">
    内容1
  </cb-tab-pane>
  <cb-tab-pane label="标签2">
    内容2
  </cb-tab-pane>
  <cb-tab-pane label="标签3">
    内容3
  </cb-tab-pane>
  <cb-tab-pane label="标签4">
    内容4
  </cb-tab-pane>
</cb-tabs>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">两端对齐</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-tabs justified v-model="test3">
          <cb-tab-pane label="标签1">
            内容1
          </cb-tab-pane>
          <cb-tab-pane label="标签2">
            内容2
          </cb-tab-pane>
          <cb-tab-pane label="标签3">
            内容3
          </cb-tab-pane>
          <cb-tab-pane label="标签4">
            内容4
          </cb-tab-pane>
        </cb-tabs>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-tabs justified v-model="test3">
  <cb-tab-pane label="标签1">
    内容1
  </cb-tab-pane>
  <cb-tab-pane label="标签2">
    内容2
  </cb-tab-pane>
  <cb-tab-pane label="标签3">
    内容3
  </cb-tab-pane>
  <cb-tab-pane label="标签4">
    内容4
  </cb-tab-pane>
</cb-tabs>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">禁用状态</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-tabs v-model="test4">
          <cb-tab-pane label="标签1">
            内容1
          </cb-tab-pane>
          <cb-tab-pane label="标签2">
            内容2
          </cb-tab-pane>
          <cb-tab-pane disabled label="禁用标签3">
            内容3
          </cb-tab-pane>
        </cb-tabs>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-tabs v-model="test4">
  <cb-tab-pane label="标签1">
    内容1
  </cb-tab-pane>
  <cb-tab-pane label="标签2">
    内容2
  </cb-tab-pane>
  <cb-tab-pane disabled label="禁用标签3">
    内容3
  </cb-tab-pane>
</cb-tabs>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">自定义标签页</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-tabs v-model="test5">
          <cb-tab-pane>
            <template #label>
              <cb-icon name="chrome" /> 标签1
            </template>
            内容1
          </cb-tab-pane>
          <cb-tab-pane label="标签2">
            内容2
          </cb-tab-pane>
          <cb-tab-pane label="标签3">
            内容3
          </cb-tab-pane>
          <cb-tab-pane label="标签4">
            内容4
          </cb-tab-pane>
        </cb-tabs>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-tabs v-model="test5">
  <cb-tab-pane>
    <template #label>
      <cb-icon name="chrome" /> 标签1
    </template>
    内容1
  </cb-tab-pane>
  <cb-tab-pane label="标签2">
    内容2
  </cb-tab-pane>
  <cb-tab-pane label="标签3">
    内容3
  </cb-tab-pane>
  <cb-tab-pane label="标签4">
    内容4
  </cb-tab-pane>
</cb-tabs>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">cb-tabs 属性</h2>

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

    <h2 class="doc-page-header">cb-tabs 事件</h2>

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

    <h2 class="doc-page-header">cb-tab-pane 属性</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="paneProp">
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

    <h2 class="doc-page-header">cb-tab-pane 插槽</h2>

    <cb-box body-class="table-responsive no-padding">
      <doc-table :data="paneSlot">
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
  name: 'DemoNavTab',

  data() {
    return {
      test1: 0,
      test2: 0,
      test3: 0,
      test4: 0,
      test5: 0,

      prop: [
        {
          name: 'v-model',
          desc: '绑定值，表示当前 tab 的索引，从 0 开始。',
          type: 'number',
          value: '—',
          default: '0'
        },
        {
          name: 'pills',
          desc: '是否 Pills 风格。',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'justified',
          desc: '是否两端对齐。',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'stacked',
          desc: '启用 Pills 风格时，是否垂直排列标签页。',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ],

      event: [
        {
          name: 'change',
          desc: '标签页切换时触发的事件，事件处理函数会传递一个标签页索引值。'
        }
      ],

      paneProp: [
        {
          name: 'label',
          desc: '选项卡标题',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ],

      paneSlot: [
        {
          name: 'label',
          desc: '用于自定义选项卡内容。'
        }
      ]

    }
  }
}
</script>
