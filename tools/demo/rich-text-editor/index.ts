import { DemoSharedBase } from '../utils';
import { RichEditor, RichEditorData } from '@marblsy/rich-text-editor';

export class DemoSharedRichTextEditor extends DemoSharedBase {
  editor: RichEditor;
  data: RichEditorData = {
    text: '',
    isInspectorPresented: false,
    insetWidth: 65,
    insetHeight: 20,
    showToolbar: false,
  };

  textChange(event) {
    console.log('DemoSharedRichTextEditor textChange:', event.data);
  }

  openTools() {
    if (__APPLE__) {
      this.data = {
        ...this.data,
        isInspectorPresented: !this.data.isInspectorPresented,
      };
      this.notifyPropertyChange('data', this.data);
    } else {
      this.editor.insertLinkSample();
    }
  }
  // just contrived, but can show you tons of options/capabilities
  currentHeading = 6;
  androidTool(type: 'italic' | 'bold' | 'underline' | 'strikethrough' | 'text_decrease' | 'text_increase') {
    const editor = this.editor.android as jp.wasabeef.richeditor.RichEditor;
    switch (type) {
      case 'italic':
        editor.setItalic();
        break;
      case 'bold':
        editor.setBold();
        break;
      case 'underline':
        editor.setUnderline();
        break;
      case 'strikethrough':
        editor.setStrikeThrough();
        break;
      case 'text_decrease':
        this.currentHeading++;
        if (this.currentHeading > 6) {
          this.currentHeading = this.currentHeading;
        }
        editor.setHeading(this.currentHeading);
        break;
      case 'text_increase':
        this.currentHeading--;
        if (this.currentHeading < 1) {
          this.currentHeading = 1;
        }
        editor.setHeading(this.currentHeading);
        break;
    }
  }

  loadedEditor(args) {
    this.editor = args.object;
  }
}
