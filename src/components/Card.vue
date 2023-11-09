<template>
  <div class="w-40 shadow-md cursor-pointer hover:bg-gray-300">
    <img class="w-full h-[8rem] object-cover" :src="img" alt="" />
    <h1 class="p-2 font-semibold text-sm">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String
});
</script>

<style lang="scss" scoped></style>
