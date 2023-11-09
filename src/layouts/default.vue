<template>
  <header class="shadow-lg">
    <div
      class="flex items-center justify-between h-[5rem] max-w-full xl:mx-36 lg:mx-20 md:mx-10 sm:mx-5 mx-2 px-[1rem]"
    >
      <nav class="flex flex-grow basis-0 items-end gap-2">
        <h1 class="font-bold text-xl">PUNTO ABASTO</h1>
        <h1 class="font-semibold text-lg">(Cargo)</h1>
      </nav>
      <nav class="flex flex-grow justify-end basis-0 items-center gap-2">
        <UDropdown :items="items" :popper="{ arrow: true }">
          <UAvatar
            chip-color="primary"
            chip-text=""
            chip-position="top-right"
            size="xl"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
          />
        </UDropdown>
      </nav>
    </div>
  </header>
  <main>
    <Container>
      <slot></slot>
    </Container>
    <!-- TOASTIFY -->
    <!-- <UNotifications /> -->
  </main>
  <!-- <footer>footer</footer> -->
  <UNotifications />
</template>

<script setup>
import Container from '@/components/Container.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
      },
      click: () => router.push('/marca/persona')
    }
  ],
  [
    {
      label: 'Negocios',
      icon: 'i-heroicons-pencil-square-20-solid',
      shortcuts: ['M'],
      click: () => {
        console.log('Edit');
      }
    }
  ],
  [
    {
      label: 'Cerrar sesion',
      icon: 'i-heroicons-trash-20-solid',
      click: () => router.push('/')
    }
  ]
];
</script>

<style lang="scss" scoped></style>
