<template>
  <MainLayout>
    <template #main>
      <div class="flex justify-center items-center px-4 min-h-screen bg-gradient-to-br from-gray-100 to-white">
        <form @submit.prevent="login"
          class="px-8 py-10 space-y-6 w-full max-w-4xl bg-white rounded-2xl border border-gray-100 shadow-lg">
          <!-- Header -->
          <div class="space-y-1 text-center">
            <h1 class="text-2xl font-bold text-sky-800">Inicie sesión en su cuenta</h1>
            <p class="text-sm text-gray-500">Acceda a su cuenta para continuar la experiencia.</p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block mb-1 text-sm font-medium text-gray-600">Email</label>
            <div class="relative">
              <v-icon name="fa-envelope" class="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2" />
              <input id="email" v-model="email" type="email" placeholder="name@mail.com"
                class="py-2 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block mb-1 text-sm font-medium text-gray-600">Contraseña</label>
            <div class="relative">
              <v-icon name="fa-lock" class="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2" />
              <input id="password" v-model="password" type="password" placeholder="••••••••"
                class="py-2 pr-4 pl-10 w-full rounded-lg border border-gray-300 transition focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit"
            class="py-2 w-full font-semibold text-white bg-blue-600 rounded-lg transition hover:bg-blue-700">
            Iniciar sesión
          </button>

          <!-- Divider -->
          <div class="flex gap-4 items-center text-sm text-gray-400">
            <hr class="flex-grow border-gray-200" />
            <span>O</span>
            <hr class="flex-grow border-gray-200" />
          </div>

          <!-- Forgot Password -->
          <div class="text-center">
            <button type="button" @click.prevent="systemStore().setToggleShowModalResetPassword()"
              class="text-xs text-blue-500 hover:underline">¿Olvidó su contraseña?</button>
          </div>
        </form>
      </div>
      <RestoreAccount v-if="systemStore().getShowModalResetPassword" />
    </template>
  </MainLayout>
</template>



<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import authStore from '@/stores/auth';
import clientStore from '@/stores/client';
import systemStore from '@/stores/system';
import RestoreAccount from '@/components/Login/RestoreAccount.vue';

const router = useRouter();
const email = ref('');
const password = ref('');


const auth = getAuth();
const login = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, email.value, password.value);
    if (user && user.user && user.user.email) {
      console.log(user);
      authStore().setIsAuth(true)
      clientStore().setClientUid(user.user.uid)
      //setting user email to pinia
      systemStore().setUserEmail(user.user.email)
      router.push({ name: 'user' });
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped></style>
