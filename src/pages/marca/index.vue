<template>
  <br />
  <h1 class="text-center">Bienvenido</h1>
  <Table :rows="personas" :columns="columns" />
</template>
<script setup>
const data = {
  busqueda: {}
};
const { buscarVariasPersonas: personas } = await GqlBuscarVarias(data);
// console.log(personas);
const columns = [
  {
    key: 'nombre',
    label: 'Nombre'
  },
  {
    key: 'telefono',
    label: 'Telefono'
  },
  {
    key: 'correo',
    label: 'Correo'
  },
  {
    key: 'permisos',
    label: 'Cargos'
  },
  {
    key: 'actions',
    label: 'Actions'
  }
];
</script>
