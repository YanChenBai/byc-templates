<script setup lang="tsx">
import type { List } from '@/components/PrimaryPackageList.vue'
import VueLogo from '@/assets/logos/vue.svg'
import UnoCSSLogo from '@/assets/logos/unocss.svg'
import ViteLogo from '@/assets/logos/vite.svg'

defineOptions({
  name: 'IndexPage',
})

const list: List[] = [
  {
    name: 'Vue',
    logo: VueLogo,
  },
  {
    name: 'Vite',
    logo: ViteLogo,
  },
  {
    name: 'UnoCSS',
    logo: UnoCSSLogo,
  },
]
</script>

<template>
  <div size-screen flex items-center justify-center>
    <div flex flex-col items-center gap-20px md:flex-row>
      <HelloWorld msg="Primary Package" />
      <PrimaryPackageList :list="list" />
    </div>
  </div>
</template>
