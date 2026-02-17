/** @type {import('lint-staged').Configuration} */
export default {
  "*.{js,ts,tsx}": ["pnpm lint:fix", "pnpm format:fix"],
  "*.{ts,tsx}": () => "pnpm typecheck",
  "*.{json,yaml,html,css,md}": ["pnpm format:fix"],
};
