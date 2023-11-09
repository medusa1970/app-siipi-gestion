<template>
  <div class="cont-login">
    <form v-if="test === false" @submit="login" class="form-login w-80">
      <h1 class="font-bold text-2xl">Iniciar Sesion</h1>
      <Input
        v-model="loginPersona.usuario"
        label="Correo electronico"
        bordered
      />
      <Input
        v-model="loginPersona.contrasena"
        type="password"
        label="Contraseña"
        bordered
      />
      <span>
        <a class="border-b-[1px] border-gray-500 text-gray-500" href="#"
          >Recuperar mi contraseña</a
        >
      </span>
      <UButton
        class="m-auto px-5 py-[10px]"
        label="Ingresar"
        @click="login()"
      />
      <span class="[&>*]:text-gray-500 flex gap-2">
        <p>¿No tienes cuenta aún?</p>
        <a class="border-b-[1px] border-gray-500 font-semibold" href="/registro"
          >Registrate aquí</a
        >
      </span>
    </form>
    <div v-if="test === true" class="w-80 flex flex-col">
      <h1 class="font-bold text-xl text-center">Seleccionar negocios</h1>
      <div class="flex gap-4 py-8">
        <Card
          title="Negocio 1"
          img="https://avatars.githubusercontent.com/u/739984?v=4"
        />
        <Card
          title="Negocio 2"
          img="https://avatars.githubusercontent.com/u/739984?v=4"
        />
      </div>
      <div class="flex gap-2">
        <UButton
          class="m-auto px-5 py-[10px]"
          label="Volver login"
          icon="i-heroicons-chevron-left"
          :trailing="false"
          @click="cerrarNegocio()"
        />
        <UButton
          class="m-auto px-5 py-[10px]"
          label="Prueba Negocio"
          icon="i-heroicons-chevron-right"
          trailing
          to="/marca"
          @click="cerrarNegocio()"
        />
      </div>
    </div>
    <img class="w-80" :src="logo" />

    <!-- <UNotifications /> -->
  </div>
</template>

<script setup>
// import Input from '@/components/Input.vue';
import { ref } from 'vue';
import logo from '@/assets/logo.png';
import { GqlConectar } from '#gql';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();

definePageMeta({
  layout: 'custom'
});

const loginPersona = ref({
  usuario: '',
  contrasena: ''
});

const test = ref(false);

const login = async () => {
  try {
    const { conectar: res } = await GqlConectar({ data: loginPersona.value });
    const data = await GqlDemoAuth(
      useGqlToken({ token: res.token, config: { type: 'Bearer' } })
    );
    console.log(data.demoAuth);
    toast.add({
      title: `Bienvenido ${res.token}`,
      icon: 'i-heroicons-check-circle',
      color: 'green',
      timeout: 1000,
      callback: () => {
        router.push('/marca');
      }
    });
  } catch (err) {
    console.log(err);
    toast.add({
      title: 'Error en la consulta',
      icon: 'i-heroicons-exclamation-circle',
      color: 'red'
    });
  }
};

const data = {
  busqueda: {}
};
const personas = await GqlBuscarVarias(data);

const abrirNegocio = () => (test.value = true);

const cerrarNegocio = () => (test.value = false);
// console.log(personas);
</script>

<style scoped>
.cont-login {
  @apply flex flex-col justify-center items-center h-screen gap-12 border-2 border-red-400;
}
.form-login {
  @apply flex flex-col gap-4;
}
</style>
