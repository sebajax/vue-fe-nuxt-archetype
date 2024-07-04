# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

**Content:**

- [Setup](##setup)
- [Development observations](#observations)
- [Structure](#structure)
- [Actualization](#actualization)
- [Tailwind](#tailwind)

[]()

<a id="setup"></a>

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

<a id="observations"></a>

<a id="structure"></a>

## Structure

### Folder structure

```tree
vue-fe-nuxt-archetype/
├── assets/
│   ├── styles/
│   │     ├── main.css
├── components/
│   ├── common/
│   │     ├── BaseModal.vue
│   │     ├── BaseTable.vue
│   │     └── BasePagination.vue
│   ├── layout/
│   │     ├── NavBar.vue
│   │     └── Footer.vue
│   └── specific/
│       ├── user/
│       │   ├── UserProfile.vue
│       │   ├── UserSettings.vue
│       │   └── UserList.vue
│       └── product/
│           ├── ProductCard.vue
│           ├── ProductDetails.vue
│           └── ProductList.vue
├── composables/
│   ├── useHttp.ts
│   ├── useVuetifyColors.ts
│   └── schema/
│           └── usePatientSchema.ts
├── layouts/
├── middleware/
├── pages/
│   ├── section1/
│   │   ├── [id].vue
│   ├── section2.vue
│   └── ...
├── plugins/
│   ├── http.ts
│   └── localStorage.ts
├── public/
│   ├── img/
│   └── logos/
├── static/
├── store/
├── tests/
│   ├── unit/
├── utils/
├── nuxt.config.ts
├── package.json
└── README.md
```

### File structure

```html
<!-- FIRST: SCRIPT -->
<script setup lang="ts">
  // [Imports]
  // - Module
  // - Interface
  // - Public

  // [Const]

  // VUE - Don´t add

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

<a id="rules"></a>

## Annotations and rules

### Structure rules

- Always use `camelCase` to the file names. Except as otherwise.
- `Component`:
  - Always use `PascalCase` to the component names.
  - `common` and `layout` components must start with `Base`.
  - `specific` components must start with the name of its specific folder (ex: `PatientForm`).
- `Composable`:
  - The name has to start with `use`.
  - Composable function name must have the same name as the file.
  - Schemas must be in the `schema` folder and follow the `use[FormName]Schema.ts` pattern.
- `Pages`:
  - Always use `kebab-case` to the page names.
  - `[id].vue` elements must always be nested on another folder.
- `Stores`:
  - The name has to start with `use`.

### Annotations:

- To avoid Lint void error. We can save without format using the follow code:

```bash
#mac
CMD + K and then S
#windows
Ctrl + k then Ctrl + Shift + s
```

- `<ClientOnly>` : it is necessary to components that doesn't have to render at the initial charge.
- The component doesn't have any `VeeValedate` responsibility, except the formData.
- Interfaces in the `/interface` folder, EXCEPT for the `IProps` in the components.
- `Vuelidate` 1 to 1 with the composable level forms.
- Hydration warning persist if the component try to render some information from some `script`. At the moment, this will persist with the use of `vuetify`. Keep an eye on the [Nuxt module for Vuetify](https://nuxt.com/modules/vuetify-nuxt-module) for possible module replacement in the future.
- To remove common generated Nuxt files and caches:

<a id="actualization"></a>

## Dependencies actualizations guide

This guide ensures that you follow a clear and detailed process to update your Nuxt project's dependencies and verify that everything is working correctly.

- Delete folders and files that generates conflicts (`node_modules`, `.nuxt`, `.output`, `package-lock.json`)
  run

- To remove generated nuxt files and caches [npx nuxi cleanup](https://nuxt.com/docs/api/commands/cleanup)

```bash
rm -rf node_modules .nuxt .dist package-lock.json
# or
npx nuxi cleanup #then delete package-lock.json
```

- Install dependecies

```bash
npm install
```

- Upgrade Nuxt

```bash
npx nuxi@latest upgrade
```

- Verify types

```bash
npx nuxi typecheck
```

- Verify Linting

```bash
npm run lint:check
```

- Verify the Nuxt version matches the correct one. Check the:

```bash
"nuxt": "x.x.x"
```

- (Optional) Clear and rebuild
  Clear and rebuild the project to check that is allright

```bash
npm run clean
npm run build
```

- Execute project
  Run the project to verify the correct installation

```bash
npm run dev
```

<a id="tailwind"></a>

## Tailwind

When developing, it is necessary to keep in mind that Tailwind does not have an automatic way to optimize itself, therefore it is necessary to follow the following guideline:

### Use minimal classes:

It is required that classes can be as concise as possible. For example

```html
<!-- bad ❌ -->
<div class="grid mt-2 mr-2 mb-2 ml-2">
  <p class="mb-2">a</p>
  <p class="mb-2">b</p>
  <p class="mb-2">c</p>
</div>

<!-- good✅ -->
<div class="grid m-2 gap-y-2">
  <p>a</p>
  <p>b</p>
  <p>c</p>
</div>
```

### Use of the `@apply` directive

Do not use `@apply`, unless completely necessary. According to the creator of Tailwind himself, there is no need to be afraid of repeating classes between `<div>`. The way `@apply` works is very similar to using pure CSS, so you'll end up having a bunch of custom classes.
However, since Vue's SFC is being used, we will use the `@apply` only if the same class appears multiple times in different `<div>` in the same file, ONLY if the `<div>` CAN'T be instantiated with a `v-if`.

### Consistency and class order:

Since Tailwind does not have an established order in the class strings, the project MUST follow the following order:

```html
<div class="grid"></div>
```

1. [Position](https://tailwindcss.com/docs/position) (ex: relative, fixed, absolute)
2. [Display](https://tailwindcss.com/docs/display) (ex: flex, grid, block)
3. Display related elements [display]-x (ex: [flex direction](https://tailwindcss.com/docs/flex-direction), [flex wrap](https://tailwindcss.com/docs/flex-wrap), [grid template columns](https://tailwindcss.com/docs/grid-template-columns))
4. Sizing
   1. [Size](https://tailwindcss.com/docs/size)
   2. [Width](https://tailwindcss.com/docs/width)
   3. [Min Width](https://tailwindcss.com/docs/min-width)
   4. [Max Width](https://tailwindcss.com/docs/max-width)
   5. [Height](https://tailwindcss.com/docs/height)
   6. [Min Height](https://tailwindcss.com/docs/min-height)
   7. [Max Height](https://tailwindcss.com/docs/max-height)
5. [Top Right Bottom Left](https://tailwindcss.com/docs/top-right-bottom-left) (ex: top-0, right-4, bottom-1/2)
6. [Z index](https://tailwindcss.com/docs/z-index) (ex: z-auto, z-50, z-[9999])
7. Justification
   1. [Justify Content](https://tailwindcss.com/docs/justify-content) (ex: justify-center, justify-between, justify-evenly)
   2. (grid related!) [Justify Items](https://tailwindcss.com/docs/justify-items) (ex: justify-items-start, justify-items-stretch)
   3. (grid related!) [Justify Self](https://tailwindcss.com/docs/justify-self) (ex: justify-self-auto, justify-self-center)
8. [Overflow](https://tailwindcss.com/docs/overflow) (ex: overflow-auto)
9. Object Related
10. Spacing
    1. [Margin](https://tailwindcss.com/docs/margin) (ex: m-0, mt-4, mb-[10px])
    2. [Space](https://tailwindcss.com/docs/margin) (ex: m-0, mt-4, mb-[10px])
    3. [Padding](https://tailwindcss.com/docs/padding) (ex: p-0, pt-4, pb-[10px])
    4. [Gap](https://tailwindcss.com/docs/gap) (ex: gap-1, gap-x-2, gap-y-4)
11. [Backgrounds](https://tailwindcss.com/docs/background-attachment) (following the Tailwind doc order)
12. [Typography](https://tailwindcss.com/docs/font-family) (following the Tailwind doc order)
13. [Borders](https://tailwindcss.com/docs/border-radius) (following the Tailwind doc order)
14. [Tables](https://tailwindcss.com/docs/border-collapse) (following the Tailwind doc order)
15. [Effects](https://tailwindcss.com/docs/box-shadow) (following the Tailwind doc order)
16. [Filters](https://tailwindcss.com/docs/blur) (following the Tailwind doc order)
17. [Transitions and animations](https://tailwindcss.com/docs/transition-property) (following the Tailwind doc order)
18. [Transforms](https://tailwindcss.com/docs/scale) (following the Tailwind doc order)
19. [Interactivity](https://tailwindcss.com/docs/accent-color) (following the Tailwind doc order)

#### Consideration

- Always respect clock order (top, right, bottom, left)
- Always X then Y (\[something\]-x-0, \[something\]-y-0)
- [Responsive design](https://tailwindcss.com/docs/responsive-design) must follow the same order defined above. Always in screen size

## Eslint

To avoid lint errors with the `v-slot` directive, we use:

```html
<!-- bad ❌ -->
<template #item.child="{ item }"></template>

<!-- good✅ -->
<template #[`item.child`]="{ item }"></template>
```
