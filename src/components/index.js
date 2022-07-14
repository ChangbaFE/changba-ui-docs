import PageSection from './PageSection.vue';
import Table from './Table.vue';
import Highlight from './Highlight.vue';

export default {
  install(Vue) {
    Vue.component(PageSection.name, PageSection);
    Vue.component(Table.name, Table);
    Vue.component(Highlight.name, Highlight);
  }
};
