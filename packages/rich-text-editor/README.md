# @marblsy/rich-text-editor

```javascript
npm install @marblsy/rich-text-editor
```

## Usage

Configure iOS to use the Swift package.

### iOS

For iOS, configure your `nativescript.config.ts` to use the Swift Package:

```ts
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
```

## License

Apache License Version 2.0
