# ☕ Coffee Shop Website

A modern, responsive coffee shop website built with React, TypeScript, and Tailwind CSS.

## 🚢 Deploys

[![Netlify Status](https://img.shields.io/badge/Netlify-Auto--deploys-blue?logo=netlify)](https://app.netlify.com/sites/coffeeshopjason/deploys)

- Live site: https://coffeeshopjason.netlify.app
- Deploys dashboard: https://app.netlify.com/sites/coffeeshopjason/deploys

## 🚀 Features

- 🎨 Responsive design that works on all devices
- 🌓 Dark mode support
- ⚡ Optimized performance with code splitting and lazy loading
- 🎨 Beautiful UI components with Tailwind CSS
- 🔄 React Router for seamless navigation
- 🛠 TypeScript for type safety

## 🛠 Technologies Used

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Client-side routing
- [Vite](https://vitejs.dev/) - Build tool and development server
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/coffee-shop.git
   cd coffee-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗 Project Structure

```
src/
├── assets/           # Static assets (images, icons, etc.)
├── components/       # Reusable UI components
│   ├── layout/       # Layout components (Header, Footer, etc.)
│   └── ui/           # Small, reusable UI components
├── context/          # React context providers
├── pages/            # Page components
├── styles/           # Global styles and Tailwind configuration
└── utils/            # Utility functions
```

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. The main styles are defined in `src/index.css` using Tailwind's `@apply` directive.

### Customizing Theme

You can customize the theme by editing the `tailwind.config.js` file.

## 📦 Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the production-ready files.

## 🧪 Running Tests

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name]

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
