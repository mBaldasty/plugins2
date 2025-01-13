import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.plugindemoangular',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'src',
  cli: {
    packageManager: 'npm',
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
