# React Native Theming POC

This is a POC of using High ordered component to pass theming objects

## Usage

Without ThemeProvider
```js
<Button title="Press Me!" />
```

With ThemeProvider

```js
<ThemeProvider theme={theme}>
  <Button title="Press Me!"
</ThemeProvider>
```

When using theme provider, it will change the colors of all the child and grand child components

*This is still WIP*
