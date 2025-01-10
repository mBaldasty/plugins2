import { RichEditor } from '@marblsy/rich-text-editor';
let installed = false;
export default {
  install(Vue) {
    if (!installed) {
      installed = true;
      Vue.registerElement('RichEditor', () => RichEditor, {});
    }
  },
};
