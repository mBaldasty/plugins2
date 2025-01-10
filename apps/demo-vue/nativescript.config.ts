import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.plugindemovue',
  appResourcesPath: '../../tools/assets/App_Resources',
  appPath: 'app',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  ios: {
    SPMPackages: [
      {
        name: 'RichTextKit',
        libs: ['RichTextKit'],
        repositoryURL: 'https://github.com/danielsaidi/RichTextKit.git',
        version: '1.1.2',
      },
    ],
  },
} as NativeScriptConfig;
