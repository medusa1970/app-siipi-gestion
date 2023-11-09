<template>
  <h1 class="font-bold text-xl mb-4">Empleados</h1>
  <UTable
    :rows="rows"
    :columns="columns"
    :loading-state="{
      icon: 'i-heroicons-arrow-path-20-solid',
      label: 'Loading...'
    }"
    :empty-state="{
      icon: 'i-heroicons-circle-stack-20-solid',
      label: 'No items.'
    }"
  >
    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-ellipsis-horizontal-20-solid"
        />
      </UDropdown>
    </template>
  </UTable>
</template>

<script setup>
defineProps({
  rows: {
    type: Array,
    required: true
  },
  columns: Array
});
// const columns = [
//   {
//     key: 'id',
//     label: '#'
//   },
//   {
//     key: 'name',
//     label: 'Nombre'
//   },
//   {
//     key: 'title',
//     label: 'Cargo'
//   },
//   {
//     key: 'email',
//     label: 'Email'
//   },
//   {
//     key: 'actions',
//     label: 'Actions'
//   }
// ];
const people = [
  {
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },
  {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin'
  }
];
const items = (row) => [
  [
    {
      label: 'Editar',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row)
    },
    {
      label: 'Asignar rol',
      icon: 'i-heroicons-clipboard-document-list',
      click: () => console.log('Rol', row)
    },
    {
      label: 'Eliminar',
      icon: 'i-heroicons-trash',
      click: () => console.log('Delete', row)
    }
  ]
];

// const editar = (row) => {
//   console.log(row);
// };
</script>

<style lang="scss" scoped></style>
