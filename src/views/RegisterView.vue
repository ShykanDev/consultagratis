<template>
  <MainLayout>
    <template #main>
      <div
        class="flex overflow-hidden relative justify-center items-center p-4 min-h-screen bg-gradient-to-br from-blue-50 to-orange-100">

        <RouterLink :to="{ name: 'testingFirebase' }"
          class="flex absolute top-4 right-4 items-center p-2 bg-sky-700 rounded-2xl outline-white animate-delay-700 animate-fade-left outline-2">
          <v-icon name="bi-file-person" scale="2" class="text-white" />
          <span class="ml-2 text-white">Registrarse como profesional</span>
          <v-icon name="bi-arrow-right-circle-fill" scale="2" class="ml-1 text-white" />
        </RouterLink>
        <form @submit.prevent="register"
          class="p-8 space-y-6 w-full max-w-6xl min-h-full bg-white rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-xl">
          <!-- Header Section -->
          <div class="space-y-2 text-center">
            <h1
              class="text-3xl font-extrabold text-transparent text-gray-800 bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
              Registrese y consulte a un experto
            </h1>
            <p class="text-gray-500">Cree su cuenta en segundos</p>
          </div>

          <!-- Grid Container -->
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Name Input -->
            <div class="space-y-2">
              <label class="flex items-center space-x-3 font-medium text-gray-600">
                <UserIcon class="w-6 h-6 text-slate-600" />
                <span>Nombre completo</span>
              </label>
              <input v-model="formData.name" type="text" placeholder="John Doe"
                class="px-4 py-3 w-full rounded-xl border-2 border-gray-200 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              <p v-if="errors.name" class="flex items-center space-x-1 text-sm text-red-500">
                <ExclamationCircleIcon class="w-4 h-4" />
                <span>{{ errors.name }}</span>
              </p>
            </div>

            <!-- Age Input -->
            <div class="space-y-2">
              <label class="flex items-center space-x-3 font-medium text-gray-600">
                <UserIcon class="w-6 h-6 text-slate-700" />
                <span>Fecha de nacimiento</span>
              </label>
              <VueDatePicker v-model="date" auto-apply partial-flow :enable-time-picker="false"
                :flow="['month', 'year', 'calendar']" />

              <p v-if="errors.age" class="flex items-center space-x-1 text-sm text-red-500">
                <ExclamationCircleIcon class="w-4 h-4" />
                <span>{{ errors.age }}</span>
              </p>
            </div>

            <!-- Email Input -->
            <div class="space-y-2 md:col-span-2">
              <label class="flex items-center space-x-3 font-medium text-gray-600">
                <EnvelopeIcon class="w-6 h-6 text-slate-700" />
                <span>Email</span>
              </label>
              <input v-model="formData.email" type="email" placeholder="john@example.com"
                class="px-4 py-3 w-full rounded-xl border-2 border-gray-200 transition-all focus:border-green-500 focus:ring-2 focus:ring-green-200" />
              <p v-if="errors.email" class="flex items-center space-x-1 text-sm text-red-500">
                <ExclamationCircleIcon class="w-4 h-4" />
                <span>{{ errors.email }}</span>
              </p>
            </div>

            <!-- Password Input -->
            <div class="space-y-2 md:col-span-2">
              <label class="flex items-center space-x-3 font-medium text-gray-600">
                <LockClosedIcon class="w-6 h-6 text-slate-500" />
                <span>Contraseña</span>
              </label>
              <div class="relative">
                <input v-model="formData.password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                  class="px-4 py-3 pr-12 w-full rounded-xl border-2 border-gray-200 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-200" />
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100">
                  <EyeIcon class="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div class="flex justify-between items-center">
                <p v-if="errors.password" class="flex items-center space-x-1 text-sm text-red-500">
                  <ExclamationCircleIcon class="w-4 h-4" />
                  <span>{{ errors.password }}</span>
                </p>
                <span class="text-sm text-gray-500">{{ passwordStrength }}</span>
              </div>
            </div>

            <!-- Terms Checkbox -->
            <div class="flex items-center space-x-3 md:col-span-2">
              <input v-model="formData.terms" type="checkbox"
                class="w-5 h-5 text-blue-600 rounded border-2 focus:ring-blue-500" />
              <label class="text-gray-600">
                Acepto los
                <a href="#" class="text-blue-600 hover:underline">Términos de servicio</a> and
                <a href="#" class="text-blue-600 hover:underline">Política de privacidad</a>
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full bg-gradient-to-r from-orange-300 to-orange-600 text-white py-4 rounded-xl font-semibold
               hover:from-slate-700 hover:to-slate-700 transition-all transform hover:scale-[1.01] shadow-lg">
            Registrarse
          </button>

          <!-- Login Link -->
          <p class="text-center text-gray-600">
            Ya tiene una cuenta?
            <a href="#" class="font-semibold text-blue-600 hover:underline">Iniciar sesión</a>
          </p>
        </form>
      </div>


    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import MainLayout from '@/layouts/MainLayout.vue';
import { UserIcon, EnvelopeIcon, LockClosedIcon, EyeIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, type UserCredential } from 'firebase/auth';
import { doc, getFirestore, setDoc, Timestamp } from 'firebase/firestore';
const date = ref(new Date());
//Para asegurar que el esta declarando decir la verdad al registrasse

interface FormData {
  name: string
  email: string
  age: number | null
  password: string
  terms: boolean
}

interface FormErrors {
  name?: string
  email?: string
  age?: string
  password?: string
  terms?: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  age: null,
  password: '',
  terms: false
})

const errors = ref<FormErrors>({})
const showPassword = ref(false)

const passwordStrength = computed(() => {
  if (!formData.value.password) return ''
  const strength = formData.value.password.length > 10 ? '💪 Strong' : formData.value.password.length > 6 ? '👍 Good' : '😟 Weak'
  return `Strength: ${strength}`
})

const validateForm = (): boolean => {
  const newErrors: FormErrors = {}

  if (!formData.value.name.trim()) {
    newErrors.name = 'Nombre completo es requerido'

  } else if (formData.value.name.length < 3) {
    newErrors.name = 'El nombre debe tener al menos 3 caracteres'
  }

  if (!formData.value.email) {
    newErrors.email = 'El correo electrónico es requerido'
  } else if (!/^\S+@\S+\.\S+$/.test(formData.value.email)) {
    newErrors.email = 'El correo electrónico es invalido'
  }

  if (!formData.value.password) {
    newErrors.password = 'La contraseña es requerida'
  } else if (formData.value.password.length < 8) {
    newErrors.password = 'La contraseña debe tener al menos 8 caracteres'
  }

  if (!formData.value.terms) {
    newErrors.terms = 'Debe aceptar los términos y condiciones'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

//Firebase stuff
const auth = getAuth()
const db = getFirestore();

const createUserData = async (user: UserCredential) => {
  try {
    const docRef = doc(db, "users", user.user.uid);
    await setDoc(docRef, {
      name: formData.value.name,
      email: formData.value.email,
      age: formData.value.age,
      terms: formData.value.terms,
      createdAt: Timestamp.now(),
      userId: user.user.uid
    });
  } catch (error) {
    console.log(error);
  }
}

//Register the user to firebase
const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth, formData.value.email, formData.value.password)
    sendEmailVerification(user.user)
    await createUserData(user)
    console.log('Account has been created successfully!')
    console.log('Email sent successfully!')

    //Once user has created his account successfully, reset the register fields
    formData.value = {
      name: '',
      email: '',
      age: null,
      password: '',
      terms: false
    }
    showPassword.value = false
  } catch (error) {
    console.log(error);
  }
}

// Función para verificar si es menor de edad (18 años)
const checkIfMinor = () => {
  if (!date.value) {
    console.log("No se ha seleccionado fecha");
    return;
  }

  const birthDate = new Date(date.value);
  const today = new Date();

  // Calculamos la edad restando los años
  let age = today.getFullYear() - birthDate.getFullYear();

  // Ajustamos si aún no ha pasado el cumpleaños este año
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const isMinor = age < 18;
  console.log(`Edad calculada: ${age} años - ${isMinor ? "Es menor de edad" : "Es mayor de edad"}`);

  return isMinor;
};

// Puedes llamarla cuando cambie la fecha o al enviar el formulario
// Ejemplo de uso:
watch(date, () => {
  checkIfMinor();
});
</script>

<style scoped></style>
