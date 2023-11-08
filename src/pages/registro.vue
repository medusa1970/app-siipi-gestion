<template>
  <div class="cont-login">
    <!-- <img class="w-80" :src="logo" /> -->
    <form @submit="register" class="form-login w-80">
      <h1 class="font-bold text-2xl">Registrate</h1>
      <Input v-model="persona.nombre" label="Nombre" bordered />
      <Input
        v-model="persona.telefono"
        type="number"
        label="Telefono"
        bordered
      />
      <Input
        v-model="persona.correo"
        type="email"
        label="Correo electronico"
        bordered
      />
      <Input
        v-model="persona.password"
        type="password"
        label="Contraseña"
        bordered
      />
      <UButton class="m-auto px-5 py-[10px]" label="Registrar" />
      <span class="[&>*]:text-gray-500 flex gap-2">
        <p>¿Ya tienes una cuenta?</p>
        <a class="border-b-[1px] border-gray-500 font-semibold" href="/"
          >Ingresa aquí</a
        >
      </span>
    </form>
  </div>
</template>

<script setup lang="ts">
// import Input from '@/components/Input.vue';
import { ref } from 'vue';
// import logo from '@/assets/logo.png';

definePageMeta({
  layout: false
});

const persona = ref({
  nombre: '',
  telefono: '',
  correo: '',
  password: ''
});

const register = () => {
  console.log(persona.value);
};
</script>

<style scoped>
.cont-login {
  @apply flex flex-col justify-center items-center h-screen gap-12;
}
.form-login {
  @apply flex flex-col gap-4;
}
</style>
