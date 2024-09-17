# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/philly-js-club-website
cd philly-js-club-website
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Local Development

You can run a [Remix](https://remix.run/docs) development server to start serving the app locally on `localhost:5173`:

```shell
pnpm dev
```

Saving files on disk will update the local dev page.
There's no need to restart the server each time you update a file.

## More Scripts

This repo utilizes a suite of tools to check for code quality.
Each is run in CI on all commits.

### Formatting

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

To manually reformat all files, you can run:

```shell
pnpm format:write
```

### Linting

This package includes several forms of linting to enforce consistent code quality and styling.
Each should be shown in VS Code, and can be run manually on the command-line:

- `pnpm lint` ([ESLint](https://eslint.org) with [typescript-eslint](https://typescript-eslint.io)): Lints JavaScript and TypeScript source files
- `pnpm lint:knip` ([knip](https://github.com/webpro/knip)): Detects unused files, dependencies, and code exports
- `pnpm lint:md` ([Markdownlint](https://github.com/DavidAnson/markdownlint)): Checks Markdown source files
- `pnpm lint:package` ([npm-package-json-lint](https://npmpackagejsonlint.org)): Lints the `package.json` file
- `pnpm lint:spelling` ([cspell](https://cspell.org)): Spell checks across all source files

### Tests

We include basic [Playwright](https://playwright.dev) accesibility tests with [aXe](https://www.deque.com/axe).
You can run them locally with:

```shell
pnpm test
```

### Type Checking

Run [TypeScript](https://typescriptlang.org) locally:

```shell
pnpm typecheck --watch
```

You should also see suggestions from TypeScript in your editor.
