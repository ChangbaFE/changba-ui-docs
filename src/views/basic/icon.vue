<template>
  <doc-page-section>
    <p>
      提供了 Font Awesome 和 Glyphicons 两套图标集合。
    </p>

    <h2 class="doc-page-header">基础用法</h2>

    <cb-tabs>
      <cb-tab-pane label="示例" class="demo">
        <cb-icon name="edit" />
        <cb-icon name="share" />
        <cb-icon name="remove" />
        <cb-icon name="refresh" spin />
        <cb-icon type="g" name="edit" />
        <cb-icon type="g" name="share" />
        <cb-icon type="g" name="remove" />
      </cb-tab-pane>
      <cb-tab-pane label="代码">
        <doc-highlight>
          <textarea>
<cb-icon name="edit" />
<cb-icon name="share" />
<cb-icon name="remove" />
<cb-icon name="refresh" spin />
<cb-icon type="g" name="edit" />
<cb-icon type="g" name="share" />
<cb-icon type="g" name="remove" />
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

    <h2 class="doc-page-header">图标集合</h2>

    <cb-tabs>

      <cb-tab-pane label="Font Awesome">
        <section>
          <h4 class="page-header">新图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon['new']" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">Web 应用图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.web" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">手型图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.hand" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section id="transportation">
          <h4 class="page-header">交通图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.transportation" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section id="gender">
          <h4 class="page-header">性别图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.gender" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">文件类型图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.fileType" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">Spinner 图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.spinner" :key="index">
              <cb-icon :name="item"> {{ item }}
              </cb-icon></cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">表单图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.formControl" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">支付图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.payment" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">图表图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.chart" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">货币图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.currency" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">编辑器图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.editor" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">方向图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.directional" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">播放器图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.player" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">品牌图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.brand" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>

        <section>
          <h4 class="page-header">医疗图标</h4>

          <cb-row>
            <cb-col md="3" sm="4" v-for="(item, index) in icon.medical" :key="index">
              <cb-icon :name="item" /> {{ item }}
            </cb-col>
          </cb-row>
        </section>
      </cb-tab-pane>

      <cb-tab-pane label="Glyphicons">
        <ul class="bs-glyphicons">
          <li v-for="(item, index) in icon.glyphicons" :key="index">
            <cb-icon type="g" :name="item" />
            <span class="glyphicon-class">{{ item }}</span>
          </li>
        </ul>
      </cb-tab-pane>

    </cb-tabs>

  </doc-page-section>
</template>

<script>
export default {
  name: 'DemoBasicIcon',

  data() {
    return {
      icon: {
        'new': [
          '500px',
          'amazon',
          'balance-scale',
          'battery-0',
          'battery-1',
          'battery-2',
          'battery-3',
          'battery-4',
          'battery-empty',
          'battery-full',
          'battery-half',
          'battery-quarter',
          'battery-three-quarters',
          'black-tie',
          'calendar-check-o',
          'calendar-minus-o',
          'calendar-plus-o',
          'calendar-times-o',
          'cc-diners-club',
          'cc-jcb',
          'chrome',
          'clone',
          'commenting',
          'commenting-o',
          'contao',
          'creative-commons',
          'expeditedssl',
          'firefox',
          'fonticons',
          'genderless',
          'get-pocket',
          'gg',
          'gg-circle',
          'hand-grab-o',
          'hand-lizard-o',
          'hand-paper-o',
          'hand-peace-o',
          'hand-pointer-o',
          'hand-rock-o',
          'hand-scissors-o',
          'hand-spock-o',
          'hand-stop-o',
          'hourglass',
          'hourglass-1',
          'hourglass-2',
          'hourglass-3',
          'hourglass-end',
          'hourglass-half',
          'hourglass-o',
          'hourglass-start',
          'houzz',
          'i-cursor',
          'industry',
          'internet-explorer',
          'map',
          'map-o',
          'map-pin',
          'map-signs',
          'mouse-pointer',
          'object-group',
          'object-ungroup',
          'odnoklassniki',
          'odnoklassniki-square',
          'opencart',
          'opera',
          'optin-monster',
          'registered',
          'safari',
          'sticky-note',
          'sticky-note-o',
          'television',
          'trademark',
          'tripadvisor',
          'tv',
          'vimeo',
          'wikipedia-w',
          'y-combinator',
          'yc'
        ],
        web: [
          'adjust',
          'anchor',
          'archive',
          'area-chart',
          'arrows',
          'arrows-h',
          'arrows-v',
          'asterisk',
          'at',
          'automobile',
          'balance-scale',
          'ban',
          'bank',
          'bar-chart',
          'bar-chart-o',
          'barcode',
          'bars',
          'battery-0',
          'battery-1',
          'battery-2',
          'battery-3',
          'battery-4',
          'battery-empty',
          'battery-full',
          'battery-half',
          'battery-quarter',
          'battery-three-quarters',
          'bed',
          'beer',
          'bell',
          'bell-o',
          'bell-slash',
          'bell-slash-o',
          'bicycle',
          'binoculars',
          'birthday-cake',
          'bolt',
          'bomb',
          'book',
          'bookmark',
          'bookmark-o',
          'briefcase',
          'bug',
          'building',
          'building-o',
          'bullhorn',
          'bullseye',
          'bus',
          'cab',
          'calculator',
          'calendar',
          'calendar-check-o',
          'calendar-minus-o',
          'calendar-o',
          'calendar-plus-o',
          'calendar-times-o',
          'camera',
          'camera-retro',
          'car',
          'caret-square-o-down',
          'caret-square-o-left',
          'caret-square-o-right',
          'caret-square-o-up',
          'cart-arrow-down',
          'cart-plus',
          'cc',
          'certificate',
          'check',
          'check-circle',
          'check-circle-o',
          'check-square',
          'check-square-o',
          'child',
          'circle',
          'circle-o',
          'circle-o-notch',
          'circle-thin',
          'clock-o',
          'clone',
          'close',
          'cloud',
          'cloud-download',
          'cloud-upload',
          'code',
          'code-fork',
          'coffee',
          'cog',
          'cogs',
          'comment',
          'comment-o',
          'commenting',
          'commenting-o',
          'comments',
          'comments-o',
          'compass',
          'copyright',
          'creative-commons',
          'credit-card',
          'crop',
          'crosshairs',
          'cube',
          'cubes',
          'cutlery',
          'dashboard',
          'database',
          'desktop',
          'diamond',
          'dot-circle-o',
          'download',
          'edit',
          'ellipsis-h',
          'ellipsis-v',
          'envelope',
          'envelope-o',
          'envelope-square',
          'eraser',
          'exchange',
          'exclamation',
          'exclamation-circle',
          'exclamation-triangle',
          'external-link',
          'external-link-square',
          'eye',
          'eye-slash',
          'eyedropper',
          'fax',
          'feed',
          'female',
          'fighter-jet',
          'file-archive-o',
          'file-audio-o',
          'file-code-o',
          'file-excel-o',
          'file-image-o',
          'file-movie-o',
          'file-pdf-o',
          'file-photo-o',
          'file-picture-o',
          'file-powerpoint-o',
          'file-sound-o',
          'file-video-o',
          'file-word-o',
          'file-zip-o',
          'film',
          'filter',
          'fire',
          'fire-extinguisher',
          'flag',
          'flag-checkered',
          'flag-o',
          'flash',
          'flask',
          'folder',
          'folder-o',
          'folder-open',
          'folder-open-o',
          'frown-o',
          'futbol-o',
          'gamepad',
          'gavel',
          'gear',
          'gears',
          'gift',
          'glass',
          'globe',
          'graduation-cap',
          'group',
          'hand-grab-o',
          'hand-lizard-o',
          'hand-paper-o',
          'hand-peace-o',
          'hand-pointer-o',
          'hand-rock-o',
          'hand-scissors-o',
          'hand-spock-o',
          'hand-stop-o',
          'hdd-o',
          'headphones',
          'heart',
          'heart-o',
          'heartbeat',
          'history',
          'home',
          'hotel',
          'hourglass',
          'hourglass-1',
          'hourglass-2',
          'hourglass-3',
          'hourglass-end',
          'hourglass-half',
          'hourglass-o',
          'hourglass-start',
          'i-cursor',
          'image',
          'inbox',
          'industry',
          'info',
          'info-circle',
          'institution',
          'key',
          'keyboard-o',
          'language',
          'laptop',
          'leaf',
          'legal',
          'lemon-o',
          'level-down',
          'level-up',
          'life-bouy',
          'life-buoy',
          'life-ring',
          'life-saver',
          'lightbulb-o',
          'line-chart',
          'location-arrow',
          'lock',
          'magic',
          'magnet',
          'mail-forward',
          'mail-reply',
          'mail-reply-all',
          'male',
          'map',
          'map-marker',
          'map-o',
          'map-pin',
          'map-signs',
          'meh-o',
          'microphone',
          'microphone-slash',
          'minus',
          'minus-circle',
          'minus-square',
          'minus-square-o',
          'mobile',
          'mobile-phone',
          'money',
          'moon-o',
          'mortar-board',
          'motorcycle',
          'mouse-pointer',
          'music',
          'navicon',
          'newspaper-o',
          'object-group',
          'object-ungroup',
          'paint-brush',
          'paper-plane',
          'paper-plane-o',
          'paw',
          'pencil',
          'pencil-square',
          'pencil-square-o',
          'phone',
          'phone-square',
          'photo',
          'picture-o',
          'pie-chart',
          'plane',
          'plug',
          'plus',
          'plus-circle',
          'plus-square',
          'plus-square-o',
          'power-off',
          'print',
          'puzzle-piece',
          'qrcode',
          'question',
          'question-circle',
          'quote-left',
          'quote-right',
          'random',
          'recycle',
          'refresh',
          'registered',
          'remove',
          'reorder',
          'reply',
          'reply-all',
          'retweet',
          'road',
          'rocket',
          'rss',
          'rss-square',
          'search',
          'search-minus',
          'search-plus',
          'send',
          'send-o',
          'server',
          'share',
          'share-alt',
          'share-alt-square',
          'share-square',
          'share-square-o',
          'shield',
          'ship',
          'shopping-cart',
          'sign-in',
          'sign-out',
          'signal',
          'sitemap',
          'sliders',
          'smile-o',
          'soccer-ball-o',
          'sort',
          'sort-alpha-asc',
          'sort-alpha-desc',
          'sort-amount-asc',
          'sort-amount-desc',
          'sort-asc',
          'sort-desc',
          'sort-down',
          'sort-numeric-asc',
          'sort-numeric-desc',
          'sort-up',
          'space-shuttle',
          'spinner',
          'spoon',
          'square',
          'square-o',
          'star',
          'star-half',
          'star-half-empty',
          'star-half-full',
          'star-half-o',
          'star-o',
          'sticky-note',
          'sticky-note-o',
          'street-view',
          'suitcase',
          'sun-o',
          'support',
          'tablet',
          'tachometer',
          'tag',
          'tags',
          'tasks',
          'taxi',
          'television',
          'terminal',
          'thumb-tack',
          'thumbs-down',
          'thumbs-o-down',
          'thumbs-o-up',
          'thumbs-up',
          'ticket',
          'times',
          'times-circle',
          'times-circle-o',
          'tint',
          'toggle-down',
          'toggle-left',
          'toggle-off',
          'toggle-on',
          'toggle-right',
          'toggle-up',
          'trademark',
          'trash',
          'trash-o',
          'tree',
          'trophy',
          'truck',
          'tty',
          'tv',
          'umbrella',
          'university',
          'unlock',
          'unlock-alt',
          'unsorted',
          'upload',
          'user',
          'user-plus',
          'user-secret',
          'user-times',
          'users',
          'video-camera',
          'volume-down',
          'volume-off',
          'volume-up',
          'warning',
          'wheelchair',
          'wifi',
          'wrench'
        ],
        hand: [
          'hand-grab-o',
          'hand-lizard-o',
          'hand-o-down',
          'hand-o-left',
          'hand-o-right',
          'hand-o-up',
          'hand-paper-o',
          'hand-peace-o',
          'hand-pointer-o',
          'hand-rock-o',
          'hand-scissors-o',
          'hand-spock-o',
          'hand-stop-o',
          'thumbs-down',
          'thumbs-o-down',
          'thumbs-o-up',
          'thumbs-up'
        ],
        transportation: [
          'ambulance',
          'automobile',
          'bicycle',
          'bus',
          'cab',
          'car',
          'fighter-jet',
          'motorcycle',
          'plane',
          'rocket',
          'ship',
          'space-shuttle',
          'subway',
          'taxi',
          'train',
          'truck',
          'wheelchair'
        ],
        gender: [
          'genderless',
          'intersex',
          'mars',
          'mars-double',
          'mars-stroke',
          'mars-stroke-h',
          'mars-stroke-v',
          'mercury',
          'neuter',
          'transgender',
          'transgender-alt',
          'venus',
          'venus-double',
          'venus-mars'
        ],
        fileType: [
          'file',
          'file-archive-o',
          'file-audio-o',
          'file-code-o',
          'file-excel-o',
          'file-image-o',
          'file-movie-o',
          'file-o',
          'file-pdf-o',
          'file-photo-o',
          'file-picture-o',
          'file-powerpoint-o',
          'file-sound-o',
          'file-text',
          'file-text-o',
          'file-video-o',
          'file-word-o',
          'file-zip-o'
        ],
        spinner: [
          'circle-o-notch',
          'cog',
          'gear',
          'refresh',
          'spinner'
        ],
        formControl: [
          'check-square',
          'check-square-o',
          'circle',
          'circle-o',
          'dot-circle-o',
          'minus-square',
          'minus-square-o',
          'plus-square',
          'plus-square-o',
          'square',
          'square-o'
        ],
        payment: [
          'cc-amex',
          'cc-diners-club',
          'cc-discover',
          'cc-jcb',
          'cc-mastercard',
          'cc-paypal',
          'cc-stripe',
          'cc-visa',
          'credit-card',
          'google-wallet',
          'paypal'
        ],
        chart: [
          'area-chart',
          'bar-chart',
          'bar-chart-o',
          'line-chart',
          'pie-chart'
        ],
        currency: [
          'bitcoin',
          'btc',
          'cny',
          'dollar',
          'eur',
          'euro',
          'gbp',
          'gg',
          'gg-circle',
          'ils',
          'inr',
          'jpy',
          'krw',
          'money',
          'rmb',
          'rouble',
          'rub',
          'ruble',
          'rupee',
          'shekel',
          'sheqel',
          'try',
          'turkish-lira',
          'usd',
          'won',
          'yen'
        ],
        editor: [
          'align-center',
          'align-justify',
          'align-left',
          'align-right',
          'bold',
          'chain',
          'chain-broken',
          'clipboard',
          'columns',
          'copy',
          'cut',
          'dedent',
          'eraser',
          'file',
          'file-o',
          'file-text',
          'file-text-o',
          'files-o',
          'floppy-o',
          'font',
          'header',
          'indent',
          'italic',
          'link',
          'list',
          'list-alt',
          'list-ol',
          'list-ul',
          'outdent',
          'paperclip',
          'paragraph',
          'paste',
          'repeat',
          'rotate-left',
          'rotate-right',
          'save',
          'scissors',
          'strikethrough',
          'subscript',
          'superscript',
          'table',
          'text-height',
          'text-width',
          'th',
          'th-large',
          'th-list',
          'underline',
          'undo',
          'unlink'
        ],
        directional: [
          'angle-double-down',
          'angle-double-left',
          'angle-double-right',
          'angle-double-up',
          'angle-down',
          'angle-left',
          'angle-right',
          'angle-up',
          'arrow-circle-down',
          'arrow-circle-left',
          'arrow-circle-o-down',
          'arrow-circle-o-left',
          'arrow-circle-o-right',
          'arrow-circle-o-up',
          'arrow-circle-right',
          'arrow-circle-up',
          'arrow-down',
          'arrow-left',
          'arrow-right',
          'arrow-up',
          'arrows',
          'arrows-alt',
          'arrows-h',
          'arrows-v',
          'caret-down',
          'caret-left',
          'caret-right',
          'caret-square-o-down',
          'caret-square-o-left',
          'caret-square-o-right',
          'caret-square-o-up',
          'caret-up',
          'chevron-circle-down',
          'chevron-circle-left',
          'chevron-circle-right',
          'chevron-circle-up',
          'chevron-down',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'exchange',
          'hand-o-down',
          'hand-o-left',
          'hand-o-right',
          'hand-o-up',
          'long-arrow-down',
          'long-arrow-left',
          'long-arrow-right',
          'long-arrow-up',
          'toggle-down',
          'toggle-left',
          'toggle-right',
          'toggle-up'
        ],
        player: [
          'arrows-alt',
          'backward',
          'compress',
          'eject',
          'expand',
          'fast-backward',
          'fast-forward',
          'forward',
          'pause',
          'play',
          'play-circle',
          'play-circle-o',
          'random',
          'step-backward',
          'step-forward',
          'stop',
          'youtube-play'
        ],
        brand: [
          '500px',
          'adn',
          'amazon',
          'android',
          'angellist',
          'apple',
          'behance',
          'behance-square',
          'bitbucket',
          'bitbucket-square',
          'bitcoin',
          'black-tie',
          'btc',
          'buysellads',
          'cc-amex',
          'cc-diners-club',
          'cc-discover',
          'cc-jcb',
          'cc-mastercard',
          'cc-paypal',
          'cc-stripe',
          'cc-visa',
          'chrome',
          'codepen',
          'connectdevelop',
          'contao',
          'css3',
          'dashcube',
          'delicious',
          'deviantart',
          'digg',
          'dribbble',
          'dropbox',
          'drupal',
          'empire',
          'expeditedssl',
          'facebook',
          'facebook-f',
          'facebook-official',
          'facebook-square',
          'firefox',
          'flickr',
          'fonticons',
          'forumbee',
          'foursquare',
          'ge',
          'get-pocket',
          'gg',
          'gg-circle',
          'git',
          'git-square',
          'github',
          'github-alt',
          'github-square',
          'gittip',
          'google',
          'google-plus',
          'google-plus-square',
          'google-wallet',
          'gratipay',
          'hacker-news',
          'houzz',
          'html5',
          'instagram',
          'internet-explorer',
          'ioxhost',
          'joomla',
          'jsfiddle',
          'lastfm',
          'lastfm-square',
          'leanpub',
          'linkedin',
          'linkedin-square',
          'linux',
          'maxcdn',
          'meanpath',
          'medium',
          'odnoklassniki',
          'odnoklassniki-square',
          'opencart',
          'openid',
          'opera',
          'optin-monster',
          'pagelines',
          'paypal',
          'pied-piper',
          'pied-piper-alt',
          'pinterest',
          'pinterest-p',
          'pinterest-square',
          'qq',
          'ra',
          'rebel',
          'reddit',
          'reddit-square',
          'renren',
          'safari',
          'sellsy',
          'share-alt',
          'share-alt-square',
          'shirtsinbulk',
          'simplybuilt',
          'skyatlas',
          'skype',
          'slack',
          'slideshare',
          'soundcloud',
          'spotify',
          'stack-exchange',
          'stack-overflow',
          'steam',
          'steam-square',
          'stumbleupon',
          'stumbleupon-circle',
          'tencent-weibo',
          'trello',
          'tripadvisor',
          'tumblr',
          'tumblr-square',
          'twitch',
          'twitter',
          'twitter-square',
          'viacoin',
          'vimeo',
          'vimeo-square',
          'vine',
          'vk',
          'wechat',
          'weibo',
          'weixin',
          'whatsapp',
          'wikipedia-w',
          'windows',
          'wordpress',
          'xing',
          'xing-square',
          'y-combinator',
          'y-combinator-square',
          'yahoo',
          'yc',
          'yc-square',
          'yelp',
          'youtube',
          'youtube-play',
          'youtube-square'
        ],
        medical: [
          'ambulance',
          'h-square',
          'heart',
          'heart-o',
          'heartbeat',
          'hospital-o',
          'medkit',
          'plus-square',
          'stethoscope',
          'user-md',
          'wheelchair'
        ],
        glyphicons: [
          'asterisk',
          'plus',
          'euro',
          'eur',
          'minus',
          'cloud',
          'envelope',
          'pencil',
          'glass',
          'music',
          'search',
          'heart',
          'star',
          'star-empty',
          'user',
          'film',
          'th-large',
          'th',
          'th-list',
          'ok',
          'remove',
          'zoom-in',
          'zoom-out',
          'off',
          'signal',
          'cog',
          'trash',
          'home',
          'file',
          'time',
          'road',
          'download-alt',
          'download',
          'upload',
          'inbox',
          'play-circle',
          'repeat',
          'refresh',
          'list-alt',
          'lock',
          'flag',
          'headphones',
          'volume-off',
          'volume-down',
          'volume-up',
          'qrcode',
          'barcode',
          'tag',
          'tags',
          'book',
          'bookmark',
          'print',
          'camera',
          'font',
          'bold',
          'italic',
          'text-height',
          'text-width',
          'align-left',
          'align-center',
          'align-right',
          'align-justify',
          'list',
          'indent-left',
          'indent-right',
          'facetime-video',
          'picture',
          'map-marker',
          'adjust',
          'tint',
          'edit',
          'share',
          'check',
          'move',
          'step-backward',
          'fast-backward',
          'backward',
          'play',
          'pause',
          'stop',
          'forward',
          'fast-forward',
          'step-forward',
          'eject',
          'chevron-left',
          'chevron-right',
          'plus-sign',
          'minus-sign',
          'remove-sign',
          'ok-sign',
          'question-sign',
          'info-sign',
          'screenshot',
          'remove-circle',
          'ok-circle',
          'ban-circle',
          'arrow-left',
          'arrow-right',
          'arrow-up',
          'arrow-down',
          'share-alt',
          'resize-full',
          'resize-small',
          'exclamation-sign',
          'gift',
          'leaf',
          'fire',
          'eye-open',
          'eye-close',
          'warning-sign',
          'plane',
          'calendar',
          'random',
          'comment',
          'magnet',
          'chevron-up',
          'chevron-down',
          'retweet',
          'shopping-cart',
          'folder-close',
          'folder-open',
          'resize-vertical',
          'resize-horizontal',
          'hdd',
          'bullhorn',
          'bell',
          'certificate',
          'thumbs-up',
          'thumbs-down',
          'hand-right',
          'hand-left',
          'hand-up',
          'hand-down',
          'circle-arrow-right',
          'circle-arrow-left',
          'circle-arrow-up',
          'circle-arrow-down',
          'globe',
          'wrench',
          'tasks',
          'filter',
          'briefcase',
          'fullscreen',
          'dashboard',
          'paperclip',
          'heart-empty',
          'link',
          'phone',
          'pushpin',
          'usd',
          'gbp',
          'sort',
          'sort-by-alphabet',
          'sort-by-alphabet-alt',
          'sort-by-order',
          'sort-by-order-alt',
          'sort-by-attributes',
          'sort-by-attributes-alt',
          'unchecked',
          'expand',
          'collapse-down',
          'collapse-up',
          'log-in',
          'flash',
          'log-out',
          'new-window',
          'record',
          'save',
          'open',
          'saved',
          'import',
          'export',
          'send',
          'floppy-disk',
          'floppy-saved',
          'floppy-remove',
          'floppy-save',
          'floppy-open',
          'credit-card',
          'transfer',
          'cutlery',
          'header',
          'compressed',
          'earphone',
          'phone-alt',
          'tower',
          'stats',
          'sd-video',
          'hd-video',
          'subtitles',
          'sound-stereo',
          'sound-dolby',
          'sound-5-1',
          'sound-6-1',
          'sound-7-1',
          'copyright-mark',
          'registration-mark',
          'cloud-download',
          'cloud-upload',
          'tree-conifer',
          'tree-deciduous',
          'cd',
          'save-file',
          'open-file',
          'level-up',
          'copy',
          'paste',
          'alert',
          'equalizer',
          'king',
          'queen',
          'pawn',
          'bishop',
          'knight',
          'baby-formula',
          'tent',
          'blackboard',
          'bed',
          'apple',
          'erase',
          'hourglass',
          'lamp',
          'duplicate',
          'piggy-bank',
          'scissors',
          'bitcoin',
          'btc',
          'xbt',
          'yen',
          'jpy',
          'ruble',
          'rub',
          'scale',
          'ice-lolly',
          'ice-lolly-tasted',
          'education',
          'option-horizontal',
          'option-vertical',
          'menu-hamburger',
          'modal-window',
          'oil',
          'grain',
          'sunglasses',
          'text-size',
          'text-color',
          'text-background',
          'object-align-top',
          'object-align-bottom',
          'object-align-horizontal',
          'object-align-left',
          'object-align-vertical',
          'object-align-right',
          'triangle-right',
          'triangle-left',
          'triangle-bottom',
          'triangle-top',
          'console',
          'superscript',
          'subscript',
          'menu-left',
          'menu-right',
          'menu-down',
          'menu-up'
        ]
      },

      prop: [
        {
          name: 'name',
          desc: '图标名称。具体名称参见图标集合。',
          type: 'string',
          value: '—',
          default: '—'
        },
        {
          name: 'type',
          desc: '图标分类。fa 对应 Font Awesome，g 对应 Glyphicons',
          type: 'string',
          value: 'fa / g',
          default: 'fa'
        },
        {
          name: 'spin',
          desc: '图标是否有旋转动画。',
          type: 'boolean',
          value: '—',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  .fa {
    font-size: 1.5em;
  }

  .fa + .fa {
    margin-left: 20px;
  }

  .glyphicon {
    margin-left: 20px;
    font-size: 1.5em;
  }
}

/* FROM HTTP://WWW.GETBOOTSTRAP.COM
 * Glyphicons
 *
 * Special styles for displaying the icons and their classes in the docs.
 */

.bs-glyphicons {
  margin-bottom: 20px;
  padding-bottom: 1px;
  padding-left: 0;
  overflow: hidden;
  list-style: none;

  li {
    float: left;
    width: 25%;
    height: 115px;
    margin: 0 -1px -1px 0;
    padding: 10px;
    font-size: 12px;
    line-height: 1.4;
    text-align: center;
    border: 1px solid #ddd;
  }

  .glyphicon {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .glyphicon-class {
    display: block;
    text-align: center;
    word-wrap: break-word; /* Help out IE10+ with class names */
  }

  li:hover {
    background-color: rgba(86, 61, 124, .1);
  }
}

@media (min-width: 768px) {
  .bs-glyphicons li {
    width: 12.5%;
  }
}
</style>
