<template>
  <MainLayout>
    <template #main>
      <!-- component -->
      <div class="flex justify-center items-center p-6 min-h-screen bg-blue-50">
        <div class="container mx-auto max-w-screen-lg">
          <div>
            <h2 class="flex gap-2 items-center text-xl font-semibold text-blue-700">
              <v-icon name="fa-user-circle" class="text-blue-600" />
              Formulario de Registro de Especialista
            </h2>
            <p class="mb-6 text-blue-500">Si es usted un profesionista, por favor complete el siguiente formulario para
              poder registrarse en la plataforma.</p>

            <div class="p-6 mb-6 bg-white rounded-2xl border border-blue-100 shadow-xl md:p-10">
              <div class="grid grid-cols-1 gap-4 gap-y-6 text-sm lg:grid-cols-3">
                <div class="text-blue-600">
                  <p class="flex gap-2 items-center text-lg font-medium">
                    <v-icon name="fa-id-card" class="text-blue-500" />
                    Datos Personales
                  </p>
                  <p>Por favor complete todos los campos.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid grid-cols-1 gap-4 gap-y-4 text-sm md:grid-cols-5">
                    <!-- Campos de texto -->
                    <div class="md:col-span-5">
                      <label for="full_name">Nombre completo</label>
                      <input type="text" id="full_name" v-model="formData.fullName" class="input-style" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email"> Correo electrónico</label>
                      <input type="email" id="email" v-model="formData.email" class="input-style"
                        placeholder="email@domain.com" />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Dirección</label>
                      <input type="text" id="address" v-model="formData.address" class="input-style"
                        placeholder="Dirección" />
                    </div>

                    <div class="opacity-0 md:col-span-2">
                      <label for="city">Ciudad</label>
                      <input type="text" id="city" v-model="formData.city" class="input-style" placeholder="Ciudad" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="country">País</label>
                      <div class="input-icon-group">
                        <select name="country" id="country" v-model="formData.country" class="input-inner">
                          <option value="">Seleccione un país</option>
                          <option v-for="country in countries" :key="country" :value="country"
                            :selected="country === 'México'">

                            {{ country }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="md:col-span-2 animate-fade-up" v-if="formData.country === 'México'">
                      <label for="state">Estado / provincia</label>
                      <div class="input-icon-group">
                        <select name="state" id="state" v-model="formData.state" class="input-inner">
                          <option value="">Seleccione un estado</option>
                          <option v-for="state in statesOfMexico" :key="state" :value="state"
                            :selected="state === 'Ciudad de México'">
                            {{ state }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="md:col-span-2 animate-fade-up" v-if="formData.country !== 'México'">
                      <label for="state">Estado / provincia / localidad</label>
                      <div class="input-icon-group">
                        <input type="text" id="state" v-model="formData.state" @focus="formData.state = ''"
                          @load=" formData.state = ''" class="input-inner"
                          placeholder="Estado / provincia / localidad" />
                      </div>
                    </div>



                    <!--
                    Section to enter the professional data
                    -->

                    <!-- Información profesional -->
                    <article class="space-y-4 md:col-span-5">
                      <h2 class="flex gap-2 items-center text-lg font-medium text-blue-600">
                        <v-icon name="fa-id-card" class="text-blue-500" />
                        Información profesional
                      </h2>

                      <!-- Especialidad -->
                      <div>
                        <label for="especialidad" class="block font-medium text-blue-700">Especialidad</label>
                        <div class="input-icon-group">
                          <v-icon name="fa-briefcase" class="mr-2 text-blue-500" />
                          <input type="text" v-model="formData.speciality" id="especialidad"
                            placeholder="Ej. Psicología, Derecho" class="input-inner" />
                        </div>
                      </div>

                      <!-- Años de experiencia -->
                      <div>
                        <label for="experiencia" class="block font-medium text-blue-700">Años de experiencia</label>
                        <div class="input-icon-group">
                          <v-icon name="fa-briefcase" class="mr-2 text-blue-500" />
                          <input type="number" v-model="formData.experienceYears" id="experiencia" placeholder="Ej. 5"
                            class="input-inner" min="0" />
                        </div>
                      </div>

                      <!-- Cédula profesional -->
                      <div>
                        <label for="cedula" class="block font-medium text-blue-700">Cédula profesional</label>
                        <div class="input-icon-group">
                          <v-icon name="fa-id-card" class="mr-2 text-blue-500" />
                          <input type="text" v-model="formData.professionalId" id="cedula" placeholder="Ej. 1234567"
                            class="input-inner" />
                        </div>
                      </div>

                      <!-- Teléfono -->
                      <div>
                        <label for="telefono" class="block font-medium text-blue-700">Teléfono de contacto</label>
                        <div class="input-icon-group">
                          <v-icon name="fa-phone-alt" class="mr-2 text-blue-500" />
                          <input type="tel" v-model="formData.phone" id="telefono" placeholder="Ej. +52 55 1234 5678"
                            class="input-inner" />
                        </div>
                      </div>

                      <!-- Mensaje más profundo -->
                      <div>
                        <label for="mensaje" class="block font-medium text-blue-700">Solicitud detallada</label>
                        <div class="flex items-start px-3 py-2 bg-white rounded border border-blue-200">
                          <v-icon name="fa-pen-fancy" class="mt-1 mr-2 text-blue-500" />
                          <textarea id="mensaje" v-model="formData.message" rows="4"
                            class="w-full text-blue-900 outline-none min-h-[250px]"
                            placeholder="Cuéntanos más sobre usted, información detallada, información profesional, etc."></textarea>
                        </div>
                      </div>
                    </article>


                    <div class="md:col-span-5">
                      <div class="inline-flex items-center">
                        <input type="checkbox" id="billing_same" v-model="formData.agree"
                          class="text-blue-500 form-checkbox" />
                        <label for="billing_same" class="ml-2">Declaro haber ingresado datos veraces y acepto que
                          serán utilizados para la contratación de servicios.</label>
                      </div>
                    </div>


                    <div class="text-right md:col-span-5">
                      <button @click="sendMessage"
                        class="px-6 py-2 font-bold text-white bg-blue-500 rounded-xl shadow-md transition-all hover:bg-blue-700">
                        <v-icon name="fa-paper-plane" class="mr-2" />
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>



        <Notivue v-slot="item">
          <Notification :item="item" />
        </Notivue>

      </div>



    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import emailjs from '@emailjs/browser';
import { addDoc, collection, getDocs, getFirestore, query, Timestamp, where } from 'firebase/firestore';
import { reactive, ref } from 'vue';
import { Notivue, Notification, push } from 'notivue'
const db = getFirestore();
const collectionExperts = collection(db, `Experts`);
emailjs.init('M7V0jkjIzlUXFRh8X')



//Adding Expert to Firebase


const countries = ref([
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
  "España",
  "Estados Unidos"
]);


const countrySelected = ref('México');

const statesOfMexico = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas"
];


const formData = reactive({
  fullName: '',
  email: '',
  address: '',
  city: 'Ciudad de México',
  country: '',
  state: '',
  userUid: '',
  active: false,
  suspended: false,
  createdAt: Timestamp.now(),
  speciality: '',
  experienceYears: 0,
  professionalId: '',
  awaitingApproval: false,
  approved: false,
  phone: '',
  message: '',
  agree: false,
})

const sendEmails = () => {
  emailjs.send(
    'service_yr3zwrb',
    'template_kun292z',
    {
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      state: formData.state,
      userUid: formData.userUid,
      active: formData.active,
      suspended: formData.suspended,
      createdAt: formData.createdAt.toDate(), // Convert Timestamp to Date
      speciality: formData.speciality,
      experienceYears: formData.experienceYears,
      professionalId: formData.professionalId,
      awaitingApproval: formData.awaitingApproval,
      approved: formData.approved,
      phone: formData.phone,
      message: formData.message,
    }
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}

async function sendMessage() {
  //if agree is false, return
  if (!formData.agree) {
    push.error('Por favor, acepte los términos y condiciones')
    return
  }

  // Verify essential fields
  if (!formData.fullName ||
    !formData.email ||
    !formData.address ||
    !formData.city ||
    !formData.country ||
    !formData.state ||
    !formData.speciality ||
    !formData.professionalId ||
    !formData.phone ||
    !formData.message) {
    push.error('Por favor, complete todos los campos')
    return
  }

  const notification = push.promise("Estamos enviando su mensaje, por favor espere...")
  emailjs.send(
    'service_yr3zwrb',
    'template_kun292z',
    {
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      state: formData.state,
      userUid: formData.userUid,
      active: formData.active,
      suspended: formData.suspended,
      createdAt: formData.createdAt.toDate(), // Convert Timestamp to Date
      speciality: formData.speciality,
      experienceYears: formData.experienceYears,
      professionalId: formData.professionalId,
      awaitingApproval: formData.awaitingApproval,
      approved: formData.approved,
      phone: formData.phone,
      message: formData.message,
    }
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      notification.resolve('Su mensaje ha sido enviado correctamente!')
    }, (error) => {
      console.log('FAILED...', error);
      notification.reject('Hubo un error al enviar su mensaje. Por favor intente de nuevo.')
    });

}



</script>

<style scoped>
.input-style {
  @apply h-10 border mt-1 rounded px-4 w-full bg-white outline-blue-300;
}

.input-icon-group {
  @apply h-10 bg-white flex border border-blue-200 rounded items-center mt-1;
}

.input-inner {
  @apply px-4 appearance-none outline-none text-gray-800 w-full bg-transparent;
}

.input-style {
  @apply w-full p-2 border border-blue-200 rounded outline-blue-300 focus:outline-none;
}

.input-icon-group {
  @apply flex items-center bg-white border border-blue-200 rounded px-3;
}

.input-inner {
  @apply w-full py-2 px-2 outline-none text-blue-900;
}
</style>
