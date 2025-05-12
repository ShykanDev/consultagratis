<template>
  <div class="flex fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/50">
    <div
      class="p-6 space-y-6 w-full max-w-md bg-white rounded-2xl shadow-2xl transition-all duration-300 dark:bg-zinc-900 sm:p-8">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Recuperar cuenta</h2>
        <button @click="systemStore().setToggleShowModalResetPassword()"
          class="transition-colors duration-200 text-zinc-500 hover:text-red-500">
          <v-icon name="fa-times" scale="1.2" />
        </button>
      </div>

      <!-- Form -->
      <div class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Correo
            electrónico</label>
          <input id="email" v-model="email" type="email" placeholder="tucorreo@ejemplo.com"
            class="px-4 py-2 mt-1 w-full rounded-xl border transition-all duration-200 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>

        <button @click="handleResetAccount"
          class="flex gap-2 justify-center items-center py-2.5 w-full font-semibold text-white bg-blue-600 rounded-xl transition-all duration-200 hover:bg-blue-700">
          <v-icon name="fa-paper-plane" />
          Enviar enlace de recuperación
        </button>
      </div>

      <!-- Footer -->
      <div class="text-sm text-center text-zinc-600 dark:text-zinc-400">
        ¿Recordó su contraseña?
        <RouterLink to="/login" class="text-blue-600 transition hover:underline hover:text-blue-700">Inicia sesión
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import systemStore from '@/stores/system';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ref } from 'vue';

const email = ref('');
const auth = getAuth();
const emit = defineEmits(['closeModal']);
const handleResetAccount = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value)
    alert('Enlace de recuperación enviado');
    emit('closeModal');
    systemStore().setToggleShowModalResetPassword();
    email.value = '';
  } catch (error) {
    alert(error);
  }
}
</script>
