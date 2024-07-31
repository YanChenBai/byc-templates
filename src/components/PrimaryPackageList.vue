<script setup lang="ts">
defineOptions({
  name: 'PrimaryPackageList',
})

defineProps<{
  list: List[]
}>()

export interface List {
  name: string
  logo?: string
}
</script>

<template>
  <ul min-w-140px flex flex-col gap-10px rounded-md>
    <li v-for="item in list" :key="item.name" flex items-center overflow-hidden rounded-md text-14px font-600 bg="#1B1B1F">
      <div bg="#161618" text="[#41B883]" size-24px flex items-center justify-center p-6px text-20px>
        <template v-if="item.logo">
          <img w-full :src="item.logo">
        </template>
        <template v-else>
          {{ item.name.substring(0, 1) }}
        </template>
      </div>
      <div px-10px>
        {{ item.name }}
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
