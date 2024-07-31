<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div text-center text-26px font-bold>
    {{ msg }}
  </div>
</template>

<style scoped></style>
