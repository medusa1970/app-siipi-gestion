<template>
  <header>navbar</header>
  <main>
    <Container>
      <slot></slot>
    </Container>
  </main>
  <footer>footer</footer>
</template>

<script setup>
import Container from '@/components/custom/Container.vue';
</script>

<style lang="scss" scoped></style>
