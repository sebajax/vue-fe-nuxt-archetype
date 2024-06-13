# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Observaciones

- El componente queda excento de responsabilidad de vuelidate.
- Vuelidate 1 a 1 con los formularios a nivel de composable
- Interfaces en la carpeta interfaces EXCEPTO para las props de los componenetes common

```html
<!-- FIRST: SCRIPT -->
<script setup lang="ts">
  // [Imports]
  // - interface
  // - module

  // [Const]

  // VUE

  // [Options]

  // [Props]

  // [Emits]

  // [Modularity - ['Name']]
  // - [Reactivity State]
  // -- {Alway add first} *all the defineModel v-model
  // -- ref
  // - [Computed]
  // - [Method]
  // - [Watch]

  // [Plugin]

  // [Composable]

  // [Store]

  // [Global Method]

  // [Global Computed]

  // [Lifecycle Hooks]
</script>

<!-- SECOND: VUE TEMPLATE -->
<template></template>

<!-- THIRD: VUE STYLE -->
<style></style>
```

```tree
vue-fe-nuxt-archetype/
├── assets/
├── components/
│   ├── common/
│   │     ├── Modal.vue
│   │     ├── Table.vue
│   │     └── Pagination.vue
│   ├── layout/
│   │     ├── NavBar.vue
│   │     └── Footer.vue
│   └── specific/
│   │   ├── user/
│   │   │   ├── UserProfile.vue
│   │   │   ├── UserSettings.vue
│   │   │   └── UserList.vue
│   │   ├── product/
│   │   │   ├── ProductCard.vue
│   │   │   ├── ProductDetails.vue
│   │   │   └── ProductList.vue
├── composables/
├── layouts/
├── middleware/
├── pages/
│   ├── section1/
│   ├── section2/
│   └── ...
├── plugins/
├── public/
├── static/
├── store/
├── styles/
│   ├── base/
│   ├── components/
│   ├── pages/
│   ├── themes/
│   └── utils/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── utils/
├── nuxt.config.ts
├── package.json
└── README.md
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
