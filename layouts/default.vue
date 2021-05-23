<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  --color1: rgba(128, 255, 0, 1);
  --color2: rgba(52, 171, 235, 1);
  --purple: rgba(112, 38, 185, 1);
  --red: rgba(255, 0, 0, 1);
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::selection {
  background: rgba(52, 171, 235, 0.6);
}
a {
  color: var(--purple);
}
html,
body {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}
</style>
