/*
import { RichTextEditorCommon } from './common';

export declare class RichTextEditor extends RichTextEditorCommon {

}
*/
import { View, ContentView } from '@nativescript/core';

export * from './common';

export declare class RichEditor extends View {
  /** Android only */
  insertVideoSample(): void;
  /** Android only */
  insertLinkSample(): void;
}
