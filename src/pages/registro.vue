<template>
  <div class="cont-login">
    <img class="w-80" :src="logo" />
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
        v-model="persona.contrasena"
        type="password"
        label="Contraseña"
        bordered
      />
      <UButton
        class="m-auto px-5 py-[10px]"
        label="Registrar"
        @click="register()"
      />
      <span class="[&>*]:text-gray-500 flex gap-2">
        <p>¿Ya tienes una cuenta?</p>
        <a class="border-b-[1px] border-gray-500 font-semibold" href="/"
          >Ingresa aquí</a
        >
      </span>
    </form>
    <!-- <UNotifications /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/logo.png';
import { GqlCrearUna } from '#gql';

definePageMeta({
  layout: 'custom'
});

const toast = useToast();

const persona = ref({
  nombre: '',
  telefono: '',
  correo: '',
  contrasena: ''
});
const register = async () => {
  try {
    await GqlCrearUna({
      data: persona.value
    });
    toast.add({
      title: 'Registro exitoso',
      icon: 'i-heroicons-check-circle',
      color: 'green'
    });
    persona.value.nombre = '';
    persona.value.telefono = '';
    persona.value.correo = '';
    persona.value.contrasena = '';
  } catch (err: any) {
    console.log(err.gqlErrors[0].extensions.originalError.message);
    const message = err.gqlErrors[0].extensions.originalError.message;
    message
      ? toast.add({
          title: message,
          icon: 'i-heroicons-x-circle',
          color: 'red'
        })
      : toast.add({
          title: 'Error en la consulta',
          icon: 'i-heroicons-exclamation-circle',
          color: 'red'
        });
  }
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
