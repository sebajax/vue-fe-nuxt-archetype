# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

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
