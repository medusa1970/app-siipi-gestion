<template>
  <div class="cont-login">
    <form @submit="login" class="form-login w-80">
      <h1 class="font-bold text-2xl">Iniciar Sesion</h1>
      <Input v-model="email" label="Correo electronico" bordered />
      <Input v-model="password" type="password" label="Contraseña" bordered />
      <span>
        <a class="border-b-[1px] border-gray-500 text-gray-500" href="#"
          >Recuperar mi contraseña</a
        >
      </span>
      <UButton label="Ingresar" />
      <span class="[&>*]:text-gray-500 flex gap-2">
        <p>¿No tienes cuenta aún?</p>
        <a class="border-b-[1px] border-gray-500 font-semibold" href="/registro"
          >Registrate aquí</a
        >
      </span>
    </form>
    <NuxtImg
      class="w-80"
      src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg"
    />
  </div>
</template>

<script setup>
import Input from '@/components/Input.vue';
import { ref } from 'vue';

definePageMeta({
  layout: false
});

const email = ref('');
const password = ref('');

const login = () => {
  console.log(email.value, password.value);
};

const data = {
  busqueda: {}
};
const personas = await GqlBuscarVarias(data);
// console.log(personas);
</script>

<style scoped>
.cont-login {
  @apply flex flex-col justify-center items-center h-screen gap-12;
}
.form-login {
  @apply flex flex-col gap-4;
}
</style>
