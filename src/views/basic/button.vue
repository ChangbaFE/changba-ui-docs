<template>
  <doc-page-section>
    <p>
      常用的操作按钮。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button>默认按钮</cb-button>
        <cb-button theme="primary">主要按钮</cb-button>
        <cb-button theme="success">成功按钮</cb-button>
        <cb-button theme="info">信息按钮</cb-button>
        <cb-button theme="warning">警告按钮</cb-button>
        <cb-button theme="danger">危险按钮</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
&lt;cb-button>默认按钮&lt;/cb-button>
&lt;cb-button theme="primary">主要按钮&lt;/cb-button>
&lt;cb-button theme="success">成功按钮&lt;/cb-button>
&lt;cb-button theme="info">信息按钮&lt;/cb-button>
&lt;cb-button theme="warning">警告按钮&lt;/cb-button>
&lt;cb-button theme="danger">危险按钮&lt;/cb-button>
          </textarea>
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">禁用状态</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button disabled>默认按钮</cb-button>
        <cb-button theme="primary" disabled>主要按钮</cb-button>
        <cb-button theme="success" disabled>成功按钮</cb-button>
        <cb-button theme="info" disabled>信息按钮</cb-button>
        <cb-button theme="warning" disabled>警告按钮</cb-button>
        <cb-button theme="danger" disabled>危险按钮</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-button disabled>默认按钮&lt;/cb-button>
&lt;cb-button theme="primary" disabled>主要按钮&lt;/cb-button>
&lt;cb-button theme="success" disabled>成功按钮&lt;/cb-button>
&lt;cb-button theme="info" disabled>信息按钮&lt;/cb-button>
&lt;cb-button theme="warning" disabled>警告按钮&lt;/cb-button>
&lt;cb-button theme="danger" disabled>危险按钮&lt;/cb-button>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">不同尺寸</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button large>超大按钮</cb-button>
        <cb-button>默认按钮</cb-button>
        <cb-button small>小型按钮</cb-button>
        <cb-button tiny>超小按钮</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-button large>超大按钮&lt;/cb-button>
&lt;cb-button>默认按钮&lt;/cb-button>
&lt;cb-button small>小型按钮&lt;/cb-button>
&lt;cb-button tiny>超小按钮&lt;/cb-button>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">块状按钮</h2>

    <cb-tabs>
      <cb-tab-pane label="示例">
        <cb-button block>块状按钮</cb-button>
        <cb-button block flat>平面块状按钮</cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-button block>块状按钮&lt;/cb-button>
&lt;cb-button block flat>平面块状按钮&lt;/cb-button>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">单按钮下拉菜单</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button>
          默认按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="primary">
          主要按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="success">
          成功按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="info">
          信息按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="warning">
          警告按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="danger">
          危险按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-button>
  默认按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="primary">
  主要按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="success">
  成功按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="info">
  信息按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="warning">
  警告按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="danger">
  危险按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>
          <!-- eslint-enable -->
        </doc-highlight>
      </cb-tab-pane>
    </cb-tabs>

    <h2 class="doc-page-header">分裂式按钮下拉菜单</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="queue">
        <cb-button split>
          默认按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="primary" split>
          主要按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="success" split>
          成功按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="info" split>
          信息按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="warning" split>
          警告按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
        <cb-button theme="danger" split>
          危险按钮
          <template slot="menu">
            <cb-menu-item>菜单1</cb-menu-item>
            <cb-menu-item>菜单2</cb-menu-item>
            <cb-menu-item>菜单3</cb-menu-item>
            <cb-menu-item separator />
            <cb-menu-item>菜单4</cb-menu-item>
          </template>
        </cb-button>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <!-- eslint-disable -->
&lt;cb-button split>
  默认按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="primary" split>
  主要按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="success" split>
  成功按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="info" split>
  信息按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="warning" split>
  警告按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>

&lt;cb-button theme="danger" split>
  危险按钮
  &lt;template slot="menu">
    &lt;cb-menu-item>菜单1&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单2&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单3&lt;/cb-menu-item>
    &lt;cb-menu-item separator>&lt;/cb-menu-item>
    &lt;cb-menu-item>菜单4&lt;/cb-menu-item>
  &lt;/template>
&lt;/cb-button>
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
  name: 'DemoBasicButton',

  data() {
    return {
      prop: [
        {
          name: 'theme',
          desc: '按钮风格或类型',
          type: 'string',
          value: 'default / primary / success / info / warning / danger',
          default: 'default'
        },
        {
          name: 'href',
          desc: '目标链接地址。设置此值后点击按钮直接跳转到这个地址。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'params',
          desc: '目标链接地址的 query string 格式的参数。设置 href 后，可以通过这个属性传递 URL 参数，会自动进行 URL Encode，可以放心使用',
          type: 'object',
          value: '—',
          default: '—'
        },
        {
          name: 'to',
          desc: '路由目标地址。此属性与 <router-link> 的 to 接收相同的值，设置此值后点击按钮直接做路由跳转。',
          type: 'string / object',
          value: '—',
          default: '—'
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
          name: 'split',
          desc: '是否分裂式按钮下拉菜单。只用于按钮式下拉菜单中。',
          type: 'boolean',
          value: '—',
          default: 'false'
        },
        {
          name: 'dropup',
          desc: '是否向上弹出下拉菜单',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ],

      slot: [
        {
          name: 'menu',
          desc: '下拉菜单项。例如：<cb-menu-item>菜单项</cb-menu-item>'
        }
      ],

      event: [
        {
          name: 'click',
          desc: '单击事件'
        }
      ]
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
