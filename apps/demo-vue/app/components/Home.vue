<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <Button text="RichEditor" @tap="goTo(1)"/>
    </GridLayout>
  </Page>
</template>

<script>

import RichTextEditor from '~/plugin-demos/rich-text-editor.vue';

export default {
  methods: {
    goTo(index) {
      let target
      switch (index) {
        case 1:
          target = RichTextEditor
          break;
      }
      this.$navigateTo(target)
    }
  },
  computed: {
    message() {
      return 'Demo {N}-Vue app';
    },
  },
}
</script>

<style>
.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
