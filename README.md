# Contributing to Blogs for Ice global

The following is a set of guidelines for contributing to the Blogs App.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

# Guideline

### Structure of folders

1.  The api folder includes all the apis data which are used for fetching/manipulating data in `public/data` locating in `src/api` and consist of files for each entities.

2.  The assets folder includes all asset files like images or maybe external css and js file locating in `src/assets`

3.  The components folder includes reusable components which are used globally across the other components or pages locating in `src/components`

4.  The config folder includes the main configuration of using some services or 3rd party packages locating in `src/config`

5.  The constant folder includes all the constant data which are used globally locating in `src/constants`.

6.  The contexts folder includes all the context which help us to share some state to prevent prop drilling issue locating in `src/contexts`.

7.  The helpers folder includes utils and functions using globally locating in `src/helpers`.

8.  All custom hooks used in components should have a folder inside `src/hooks` and all of them should start the with "use" keyword.

9.  The layout folder includes all layouts for wrapping the page in router locating in `src/layout`.

10. The pages folder includes all views which are determined by pages locating in `src/pages`.

11. The router folder includes a files for representing the routes of each pages locating in `src/router`.

12. The editorconfig and prettierrc file contains all attribute for corresponding editor code style in each IDEs

13. eslint file expose the rules for linting the project also prettier file help to format code properly

14. tsconfig and vite.config file include the configuration of TypeScript and Vite

15. all translation files include `Turkish` and `English` languages locating in `public/locales`

16. the mock database using json-server locating in `public/data/db.json`

---

# Coding style

The import/order plugin, which is configured with eslint by this [document](https://github.com/import-js/eslint-plugin-import), decides the order of all the imports. They should be listed according to the following ordering:

- 1.  Built-in packages/modules
- 2.  External packages/modules/functions
- 3.  Internal packages/modules/functions
- 4.  Parent components
- 5.  Sibling components
- 6.  Types and interfaces

---

# References

we are using some frameworks and third parties in this app and we could refer to them by following links

- Vite official documentation [here](https://vitejs.dev/)
- ReactJS official documentation [here](https://reactjs.org/)
- TypeScript official documentation [here](https://www.typescriptlang.org/)
- ESlint Rules [here](https://eslint.org/docs/latest/rules)
- UI Library documentation [here](https://mui.com/)
- Asynchronous data management [here](https://tanstack.com/query/v4/docs/overview)
- Package manager [here](https://yarnpkg.com/)
- Javascript style guide from Airbnb [here](https://github.com/airbnb/javascript)
- SASS guidelines [here](https://sass-guidelin.es/#architecture)
- Fake json as Database using json-server guidelines [here](https://github.com/typicode/json-server)
- Testing Library [here](https://testing-library.com/)

---

# Project setup

```
yarn install
```

# Project run client

```
yarn dev
```

# Project run server

```
yarn server
```

# Project run client and server together

```
yarn start
```

# Project build for production

```
yarn build
```

# Project lint

```
yarn lint
```

# Project test

```
yarn test
```
