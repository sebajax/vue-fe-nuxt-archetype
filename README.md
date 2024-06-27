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
  // - Interface
  // - Module
  // - Store
  // - Public

  // [Const]

  // VUE - Not necessary to add only to know that here starts VUE data

  // [Options]

  // [Props]

  // [Emits]

  // [Plugin]

  // [Composable]

  // [Store]

  // [Global Method]

  // [Global Computed]

  // [Modularity - ['Name']]
  // - [Reactivity State]
  // -- {Alway add first} *all the defineModel v-model
  // -- ref
  // - [Utils]
  // - [Composable]
  // - [Computed] - many
  // - [Method] - many
  // - [Watch] - many

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

Guía de Actualización de Dependencias para Nuxt
Paso 1: Preparación
Eliminar las carpetas y archivos que puedan causar conflictos.
sh
Copiar código
rm -rf node_modules .nuxt .dist package-lock.json
Paso 2: Instalar Dependencias
Instalar las dependencias nuevamente.
sh
Copiar código
npm install
Paso 3: Actualizar Nuxt
Utilizar nuxi para actualizar Nuxt a la última versión.
sh
Copiar código
npx nuxi@latest upgrade
Paso 4: Verificar Tipos
Asegurarse de que no hay problemas de tipos.
sh
Copiar código
npx nuxi typecheck
Paso 5: Verificar Linting
Verificar que el linting funciona correctamente.
sh
Copiar código
npm run lint:check
Paso 6: Verificar Versión de Nuxt
Asegurarse de que la versión de Nuxt sea la correcta en el archivo package.json.
Abrir package.json.
Verificar que la versión de Nuxt es 3.12.2:
json
Copiar código
"dependencies": {
"nuxt": "3.12.2",
// otras dependencias
}
Paso 7: (Opcional) Limpiar y Reconstruir
Limpiar y reconstruir el proyecto para asegurarse de que todo está en orden.
sh
Copiar código
npm run clean && npm run build
Paso 8: Ejecutar el Proyecto
Iniciar el proyecto para asegurarse de que todo funciona correctamente.
sh
Copiar código
npm run dev
Esta guía garantiza que sigas un proceso claro y detallado para actualizar las dependencias de tu proyecto Nuxt y verificar que todo funcione correctamente.
