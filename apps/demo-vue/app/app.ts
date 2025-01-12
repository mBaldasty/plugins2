import Vue from 'nativescript-vue';
import Home from './components/Home.vue';
import { RichEditor } from '@marblsy/rich-text-editor';
Vue.use(RichEditor);
// Vue.registerElement('RichTextEditor', () => RichEditor)
// Vue.registerElement('RichTextEditor', () => require('@marblsy/rich-text-editor').RichEditor)
declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
