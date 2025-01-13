<template>
  <Page>
    <ActionBar title="rich-text-editor" class="action-bar">
      <ActionItem ios.systemIcon="2" ios.position="right" android.position="actionBar" @tap="openTools" android:text="Link"></ActionItem>
    </ActionBar>

    <GridLayout class="p-20" rows="*">
      <RichEditor :data="data" @textChange="textChange" @loaded="loadedEditor" />
    </GridLayout>
  </Page>
</template>

<script>
import Vue from 'nativescript-vue';
import { DemoSharedRichTextEditor } from '@demo/shared';
const demoShared = new DemoSharedRichTextEditor();

export default {
  mounted() {
    demoShared.on('propertyChange', () => {
      // reacting to {N} observable to update Vue2 reactive binding
      this.data = demoShared.data;
    });
  },
  data() {
    return {
      data: demoShared.data,
      openTools: demoShared.openTools.bind(demoShared),
      textChange: demoShared.textChange.bind(demoShared),
      loadedEditor: demoShared.loadedEditor.bind(demoShared),
    };
  },
};
</script>
