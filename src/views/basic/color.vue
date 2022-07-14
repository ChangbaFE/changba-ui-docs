<template>
  <doc-page-section>
    <p>
      Changba UI 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。
    </p>

    <cb-box class="color-palette-box" icon="tag" title="调色板">
      <cb-row>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Primary</h4>
          <div class="color-palette-set">
            <div class="bg-light-blue disabled color-palette"><span>Disabled</span></div>
            <div class="bg-light-blue color-palette"><span>#3c8dbc</span></div>
            <div class="bg-light-blue-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Info</h4>
          <div class="color-palette-set">
            <div class="bg-aqua disabled color-palette"><span>Disabled</span></div>
            <div class="bg-aqua color-palette"><span>#00c0ef</span></div>
            <div class="bg-aqua-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Success</h4>
          <div class="color-palette-set">
            <div class="bg-green disabled color-palette"><span>Disabled</span></div>
            <div class="bg-green color-palette"><span>#00a65a</span></div>
            <div class="bg-green-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Warning</h4>
          <div class="color-palette-set">
            <div class="bg-yellow disabled color-palette"><span>Disabled</span></div>
            <div class="bg-yellow color-palette"><span>#f39c12</span></div>
            <div class="bg-yellow-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Danger</h4>
          <div class="color-palette-set">
            <div class="bg-red disabled color-palette"><span>Disabled</span></div>
            <div class="bg-red color-palette"><span>#f56954</span></div>
            <div class="bg-red-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Gray</h4>
          <div class="color-palette-set">
            <div class="bg-gray disabled color-palette"><span>Disabled</span></div>
            <div class="bg-gray color-palette"><span>#d2d6de</span></div>
            <div class="bg-gray-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
      </cb-row>
      <cb-row>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Navy</h4>
          <div class="color-palette-set">
            <div class="bg-navy disabled color-palette"><span>Disabled</span></div>
            <div class="bg-navy color-palette"><span>#001F3F</span></div>
            <div class="bg-navy-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Teal</h4>
          <div class="color-palette-set">
            <div class="bg-teal disabled color-palette"><span>Disabled</span></div>
            <div class="bg-teal color-palette"><span>#39CCCC</span></div>
            <div class="bg-teal-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Purple</h4>
          <div class="color-palette-set">
            <div class="bg-purple disabled color-palette"><span>Disabled</span></div>
            <div class="bg-purple color-palette"><span>#605ca8</span></div>
            <div class="bg-purple-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Orange</h4>
          <div class="color-palette-set">
            <div class="bg-orange disabled color-palette"><span>Disabled</span></div>
            <div class="bg-orange color-palette"><span>#ff851b</span></div>
            <div class="bg-orange-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Maroon</h4>
          <div class="color-palette-set">
            <div class="bg-maroon disabled color-palette"><span>Disabled</span></div>
            <div class="bg-maroon color-palette"><span>#D81B60</span></div>
            <div class="bg-maroon-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
        <cb-col sm="4" md="2">
          <h4 class="text-center">Black</h4>
          <div class="color-palette-set">
            <div class="bg-black disabled color-palette"><span>Disabled</span></div>
            <div class="bg-black color-palette"><span>#111111</span></div>
            <div class="bg-black-active color-palette"><span>Active</span></div>
          </div>
        </cb-col>
      </cb-row>
    </cb-box>

    <cb-box icon="tag" title="Theme">
      <p>此处列出的内容可用于组件的 theme 属性中，逗号后面的是别名。</p>
      <cb-row>
        <cb-col sm="4" md="2" v-for="(item, index) in theme" :key="index">
          <div class="color-palette-set">
            <div class="color-palette" :class="item.css"><em>{{ item.text }}</em></div>
          </div>
        </cb-col>
      </cb-row>
    </cb-box>

    <cb-box icon="tag" title="文本颜色">
      <p>此处列出所有控制文本颜色的 css class 值。</p>
      <cb-row>
        <cb-col sm="4" md="2" v-for="(item, index) in text" :key="index">
          <div class="color-palette-set">
            <div class="color-palette text" :class="item"><em>{{ item }}</em></div>
          </div>
        </cb-col>
      </cb-row>
    </cb-box>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoBasicColor',

  data() {
    return {
      theme: [
        {
          css: 'bg-blue',
          text: 'blue'
        },
        {
          css: 'bg-blue-active',
          text: 'blue-active'
        },
        {
          css: 'bg-blue-gradient',
          text: 'blue-gradient'
        },
        {
          css: 'bg-light-blue',
          text: 'light-blue, primary'
        },
        {
          css: 'bg-light-blue-active',
          text: 'light-blue-active'
        },
        {
          css: 'bg-light-blue-gradient',
          text: 'light-blue-gradient'
        },
        {
          css: 'bg-aqua',
          text: 'aqua, info'
        },
        {
          css: 'bg-aqua-active',
          text: 'aqua-active'
        },
        {
          css: 'bg-aqua-gradient',
          text: 'aqua-gradient'
        },
        {
          css: 'bg-green',
          text: 'green, success'
        },
        {
          css: 'bg-green-active',
          text: 'green-active'
        },
        {
          css: 'bg-green-gradient',
          text: 'green-gradient'
        },
        {
          css: 'bg-yellow',
          text: 'yellow, warning'
        },
        {
          css: 'bg-yellow-active',
          text: 'yellow-active'
        },
        {
          css: 'bg-yellow-gradient',
          text: 'yellow-gradient'
        },
        {
          css: 'bg-red',
          text: 'red, danger'
        },
        {
          css: 'bg-red-active',
          text: 'red-active'
        },
        {
          css: 'bg-red-gradient',
          text: 'red-gradient'
        },
        {
          css: 'bg-gray',
          text: 'gray'
        },
        {
          css: 'bg-gray-light',
          text: 'gray-light'
        },
        {
          css: 'bg-gray-active',
          text: 'gray-active'
        },
        {
          css: 'bg-black',
          text: 'black'
        },
        {
          css: 'bg-black-active',
          text: 'black-active'
        },
        {
          css: 'bg-black-gradient',
          text: 'black-gradient'
        },
        {
          css: 'bg-navy',
          text: 'navy'
        },
        {
          css: 'bg-navy-active',
          text: 'navy-active'
        },
        {
          css: 'bg-teal',
          text: 'teal'
        },
        {
          css: 'bg-teal-active',
          text: 'teal-active'
        },
        {
          css: 'bg-teal-gradient',
          text: 'teal-gradient'
        },
        {
          css: 'bg-olive',
          text: 'olive'
        },
        {
          css: 'bg-olive-active',
          text: 'olive-active'
        },
        {
          css: 'bg-lime',
          text: 'lime'
        },
        {
          css: 'bg-lime-active',
          text: 'lime-active'
        },
        {
          css: 'bg-orange',
          text: 'orange'
        },
        {
          css: 'bg-orange-active',
          text: 'orange-active'
        },
        {
          css: 'bg-fuchsia',
          text: 'fuchsia'
        },
        {
          css: 'bg-fuchsia-active',
          text: 'fuchsia-active'
        },
        {
          css: 'bg-purple',
          text: 'purple'
        },
        {
          css: 'bg-purple-active',
          text: 'purple-active'
        },
        {
          css: 'bg-purple-gradient',
          text: 'purple-gradient'
        },
        {
          css: 'bg-maroon',
          text: 'maroon'
        },
        {
          css: 'bg-maroon-active',
          text: 'maroon-active'
        },
        {
          css: 'bg-maroon-gradient',
          text: 'maroon-gradient'
        }
      ],

      text: [
        'text-red',
        'text-yellow',
        'text-aqua',
        'text-blue',
        'text-black',
        'text-light-blue',
        'text-green',
        'text-gray',
        'text-navy',
        'text-teal',
        'text-olive',
        'text-lime',
        'text-orange',
        'text-fuchsia',
        'text-purple',
        'text-maroon',
        'text-muted'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.color-palette {
  height: 35px;
  line-height: 35px;

  span {
    display: none;
    font-size: 12px;
    text-align: center;
  }

  &:hover span {
    display: block;
  }

  em {
    padding-left: 10px;
    font-size: 12px;
    font-style: normal;
    opacity: 0.8;
  }

  &.text {
    em {
      padding-left: 0;
    }
  }

  &.single {
    margin-bottom: 15px;
  }
}

.color-palette-set {
  margin-bottom: 15px;
}

.color-palette-box h4 {
  position: absolute;
  top: 100%;
  left: 25px;
  z-index: 7;
  display: block;
  margin-top: -40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}
</style>
