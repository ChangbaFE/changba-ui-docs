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
            <cb-small-box theme="aqua" icon="shopping-cart" title="150" text="新订单">
              <template #footer>
                <a href="#">更多内容 <cb-icon name="arrow-circle-right" /></a>
              </template>
            </cb-small-box>
          </cb-col>
          <cb-col span="3">
            <cb-small-box theme="green" text="跳出率">
              <template #icon>
                <cb-icon type="ion" name="stats-bars" />
              </template>
              <template #title>
                53<sup style="font-size: 20px;">%</sup>
              </template>
              <template #footer>
                <a href="#">
                  更多内容 <cb-icon name="arrow-circle-right" />
                </a>
              </template>
            </cb-small-box>
          </cb-col>
          <cb-col span="3">
            <cb-small-box theme="yellow" title="44" text="用户注册">
              <template #icon>
                <cb-icon type="ion" name="person-add" />
              </template>
              <template #footer>
                <a href="#">
                  更多内容 <cb-icon name="arrow-circle-right" />
                </a>
              </template>
            </cb-small-box>
          </cb-col>
          <cb-col span="3">
            <cb-small-box theme="red" title="65" text="独立访客">
              <template #icon>
                <cb-icon type="ion" name="pie-graph" />
              </template>
              <template #footer>
                <a href="#">
                  更多内容 <cb-icon name="arrow-circle-right" />
                </a>
              </template>
            </cb-small-box>
          </cb-col>
        </cb-row>
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-row>
  <cb-col span="3">
    <cb-small-box theme="aqua" icon="shopping-cart" title="150" text="新订单">
      <template #footer>
        <a href="#">更多内容 <cb-icon name="arrow-circle-right" /></a>
      </template>
    </cb-small-box>
  </cb-col>
  <cb-col span="3">
    <cb-small-box theme="green" text="跳出率">
      <template #icon>
        <cb-icon type="ion" name="stats-bars" />
      </template>
      <template #title>
        53<sup style="font-size: 20px;">%</sup>
      </template>
      <template #footer>
        <a href="#">
          更多内容 <cb-icon name="arrow-circle-right" />
        </a>
      </template>
    </cb-small-box>
  </cb-col>
  <cb-col span="3">
    <cb-small-box theme="yellow" title="44" text="用户注册">
      <template #icon>
        <cb-icon type="ion" name="person-add" />
      </template>
      <template #footer>
        <a href="#">
          更多内容 <cb-icon name="arrow-circle-right" />
        </a>
      </template>
    </cb-small-box>
  </cb-col>
  <cb-col span="3">
    <cb-small-box theme="red" title="65" text="独立访客">
      <template #icon>
        <cb-icon type="ion" name="pie-graph" />
      </template>
      <template #footer>
        <a href="#">
          更多内容 <cb-icon name="arrow-circle-right" />
        </a>
      </template>
    </cb-small-box>
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
  name: 'DemoOtherSmallBox',

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
          name: 'icon',
          desc: '图标区域的图标名称，只支持 Font Awesome 分类的图标，如需要其他图标请使用 icon 插槽',
          type: 'string',
          value: '参考图标文档',
          default: '—'
        },
        {
          name: 'title',
          desc: '顶部文字内容',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'text',
          desc: '中间文字内容',
          type: 'string',
          value: '—',
          default: '—'
        }
      ],

      slot: [
        {
          name: 'default',
          desc: '自定义中间区域内容，如果提供了 text 属性则不需要使用此插槽'
        },
        {
          name: 'icon',
          desc: '自定义图标区域内容'
        },
        {
          name: 'title',
          desc: '自定义顶部区域内容'
        },
        {
          name: 'footer',
          desc: '自定义底部区域内容'
        }
      ]
    }
  }
}
</script>
