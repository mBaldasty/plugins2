<template>
  <Page>
    <ActionBar>
      <Label text="rich-text-editor"/>
    </ActionBar>

    <GridLayout backgroundColor="red">
      <RichEditor/>
    </GridLayout>
  </Page>
</template>

<script>
import Vue from "nativescript-vue";
import { DemoSharedRichTextEditor } from '@demo/shared';
import { } from '@marblsy/rich-text-editor';
export default {
  mounted() {
  },
  data() {
    return {

    }
  },
  computed: {
    message() {
      return "Test rich-text-editor";
    }
  }
}
</script>

<style>

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
