<script setup lang="ts">
defineOptions({
  name: 'PrimaryPackageList',
})

defineProps<{
  list: List[]
}>()

export interface List {
  name: string
  logo: string
}
</script>

<template>
  <ul min-w-140px flex flex-col gap-10px rounded-md>
    <li v-for="item in list" :key="item.name" flex items-center overflow-hidden rounded-md text-14px font-600 bg="#1B1B1F">
      <div size-24px flex p-6px bg="#161618">
        <img w-full :src="item.logo">
      </div>
      <div px-10px>
        {{ item.name }}
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
