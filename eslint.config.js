import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    typescript: true,
    unocss: true,
    vue: true,
    stylistic: true,
    ignores: ['.gitignore'],
  },
)
