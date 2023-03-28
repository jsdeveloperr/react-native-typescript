module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': () => ['yarn lint:fix', 'yarn lint'],
  './src/**/*.ts?(x)': () => 'yarn type-check',
  '*.+(js|jsx|ts|tsx|json|css|md|mdx)': ['yarn prettier'],
};
