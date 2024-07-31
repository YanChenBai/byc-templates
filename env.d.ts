/// <reference types="vite/client" />
/// <reference types="./auto-imports.d.ts" />
/// <reference types="./components.d.ts" />
/// <reference types="unplugin-vue-router/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
