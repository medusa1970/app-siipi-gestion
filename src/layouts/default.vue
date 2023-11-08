<template>
  <header
    class="flex items-center w-full justify-between border-2 h-[5rem] px-16"
  >
    <nav class="flex flex-grow basis-0 border-2">
      <h1 class="font-bold text-2xl">PUNTO ABASTO</h1>
    </nav>
    <nav class="flex flex-grow justify-end basis-0 border-2 items-center gap-2">
      <span>
        <UButton
          icon="i-heroicons-bell-alert"
          size="xl"
          class="rounded-full bg-transparent text-black hover:bg-gray-200"
      /></span>
      <UAvatar
        chip-color="primary"
        chip-text=""
        chip-position="top-right"
        size="xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
    </nav>
  </header>
  <main>
    <Container>
      <slot></slot>
    </Container>
  </main>
  <!-- <footer>footer</footer> -->
</template>

<script setup>
import Container from '@/components/Container.vue';
</script>

<style lang="scss" scoped></style>
