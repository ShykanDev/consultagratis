<template>
   <MainLayout>
    <template #main>

  <!-- Sección principal del experto -->
  <section class="py-8 bg-gray-50">
    <div class="container px-4 mx-auto">
      <div class="p-6 bg-white rounded-lg shadow">
        <h2 class="mb-2 text-2xl font-bold">{{ title }}</h2>
        <p class="mb-1 text-gray-700">
          Área: <span class="font-medium">{{ area }}</span>
          <i :class="[areaIcon, 'text-slate-800 ml-1']"></i>
        </p>
        <p class="flex gap-2 items-center mb-4 text-gray-700">
          <i class="fas fa-calendar-alt text-slate-800"></i>
          {{ availableDayFull }} {{ availableHourStart }}:00am -
          {{ availableHourEnd }}:00pm
        </p>

        <!-- Bloque según la disponibilidad -->
        <div v-if="isAvailable" class="text-green-600">
          <p class="flex gap-2 items-center mb-4">
            <i id="activo" class="animate-spin fas fa-circle-notch"></i>
            Disponible para prueba gratuita
          </p>
          <div class="flex gap-2 items-center">
            <a :href="freeTrialLink" class="px-4 py-2 text-white rounded transition btn-secundario bg-slate-800 hover:bg-slate-700">
              Crear contacto
            </a>
            <section class="bg-slate-300">

            </section>
          </div>
        </div>

        <div v-else class="flex flex-col items-start md:flex-row md:justify-between md:items-center">
          <div class="mb-4 md:mb-0">
            <p class="flex gap-2 items-center text-red-600">
              <i id="inactivo" class="fas fa-circle-notch"></i>
              No disponible
            </p>
            <p class="text-gray-600">Puede contratar al experto aquí</p>
          </div>
          <a :href="hireLink" class="px-4 py-2 text-white rounded transition btn-general bg-slate-800 hover:bg-slate-700">
            Contratar Experto
          </a>

        </div>
      </div>
      <div>
    <VueDatePicker
    translate="no"
      v-model="date"
      minutes-increment="30"
      minutes-grid-increment="30"
      :min-time="{hours: 10, minutes: 0}"
      :max-time="{hours: 17, minutes: 30}"
      placeholder="Selecciona una hora"
      :time-picker-inline="true"
      :is24="false"
      :disabled-dates="disableAllExceptToday"
    />

  </div>
  <section v-if="availableTimeData" class="grid grid-cols-7">
    <div v-for="(day, index) in availableTimeData[0].weeklySchedule" :key="index">
      <DateSquare @click="getDate(day)" :day="day.dayInfo.day" :available-for-appointment="day.dayInfo.availableForAppointment" :available-hours="day.dayInfo.availableHours" :is-day-available="day.dayInfo.isDayAvailable" :hours-taken="day.dayInfo.hoursTaken"/>
    </div>
  </section>
    </div>
  </section>

<article class="w-full">
  <button @click="addNewDate" class="px-4 py-2 text-white rounded transition bg-slate-800 btn-general hover:bg-slate-700">Agendar Cita</button>
</article>

  <!-- Sección de descripción -->
  <section class="py-6 bg-white">
    <div class="container px-4 mx-auto">
      <p class="text-gray-800">{{ description }}</p>
    </div>
  </section>

  <hr class="my-8 border-gray-300" />

  <!-- Sección de servicios y formulario -->
  <section class="container px-4 pb-8 mx-auto">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Descripción de servicios -->
      <div>
        <h2 class="mb-4 text-2xl font-bold">¿En qué puede ayudar el profesionista/experto?</h2>
        <div class="grid grid-cols-2 gap-4">
          <ul class="space-y-3">
            <li v-for="(item, index) in offersLeft" :key="index" class="flex gap-2 items-start">
              <i :class="[item.icon, 'text-slate-800']"></i>
              <span class="text-gray-700">{{ item.text }}</span>
            </li>
          </ul>
          <ul class="space-y-3">
            <li v-for="(item, index) in offersRight" :key="index" class="flex gap-2 items-start">
              <i :class="[item.icon, 'text-slate-800']"></i>
              <span class="text-gray-700">{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Formulario -->
      <div>
        <section id="ancla-consulta">
          <div class="p-6 bg-gray-50 rounded-lg shadow">
            <section v-if="isAvailable">
              <form :action="formAction" method="post" enctype="multipart/form-data" class="space-y-4">
                <h2 class="text-xl font-semibold text-center text-slate-800">
                  Complete el formulario para contactar al profesionista
                </h2>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label for="nombre" class="block text-gray-700">Nombre:</label>
                    <input class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" type="text" name="nombre" id="nombre" placeholder="Con quien nos pondremos en contacto" required>
                  </div>
                  <div>
                    <label for="apellidos" class="block text-gray-700">Apellidos:</label>
                    <input class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" type="text" name="apellidos" id="apellidos" placeholder="Sus apellidos" required>
                  </div>
                  <div>
                    <label for="correo" class="block text-gray-700">Correo electrónico:</label>
                    <input class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" type="email" name="email" id="correo" placeholder="A este correo responderemos" required>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label for="tel" class="block text-gray-700">Teléfono:</label>
                    <input class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" type="tel" name="telefono" id="tel" placeholder="(55)55-55-55-55" required>
                  </div>
                  <div>
                    <label for="experto" class="block text-gray-700">Tipo de Experto</label>
                    <select class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" name="experto" id="experto" required>
                      <option :selected="true" :value="expertType">{{ expertType }}</option>
                    </select>
                  </div>
                  <div>
                    <label for="motivo" class="block text-gray-700">Motivo del contacto</label>
                    <select class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" name="motivo" id="motivo" required>
                      <option selected disabled value="">Seleccionar</option>
                      <option value="Contratar">Contratar</option>
                      <option value="Ayuda">Ayuda</option>
                      <option value="Pregunta Rápida">Pregunta Rápida</option>
                      <option value="Asesoría">Asesoría</option>
                    </select>
                  </div>
                </div>

                <div>
                  <strong class="block mb-2 text-gray-700">Se requiere fecha de nacimiento para verificar mayoría de edad</strong>
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label for="dia-na" class="block text-gray-700">Día:</label>
                      <input class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" type="number" name="dia_na" id="dia-na" min="1" max="31" placeholder="3">
                    </div>
                    <div>
                      <label for="mes-na" class="block text-gray-700">Mes:</label>
                      <select class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" name="mes_na" id="mes-na">
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option :selected="defaultMonth === 'Noviembre'" value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                      </select>
                    </div>
                    <div>
                      <label for="anio-na" class="block text-gray-700">Año:</label>
                      <input class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" type="number" name="anio_na" id="anio-na" placeholder="1997">
                    </div>
                  </div>
                </div>

                <div>
                  <label for="mensaje" class="block text-gray-700">Escriba de la forma más breve el requerimiento:</label>
                  <textarea class="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800" name="mensaje" id="mensaje" rows="3"></textarea>
                </div>

                <!-- Medios de contacto -->
                <div>
                  <label class="block mb-2 text-gray-700">Seleccione el medio de contacto que quisiera tener con el experto</label>
                  <div class="flex flex-wrap gap-4">
                    <!-- Videollamada -->
                    <div class="w-full sm:w-auto">
                      <p class="mb-1 font-semibold text-slate-800">Videollamada:</p>
                      <div class="flex gap-2 items-center">
                        <label for="meet" class="cursor-pointer">
                          <img src="./img/meet.jpg" alt="Google Meet" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="meet" value="Google Meet" class="hidden">
                        <label for="zoom" class="cursor-pointer">
                          <img src="./img/zoom.png" alt="Zoom" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="zoom" value="Zoom" class="hidden">
                        <label for="whatsapp-videollamada" class="cursor-pointer">
                          <img src="./img/whatsapp.jpg" alt="WhatsApp Videollamada" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="whatsapp-videollamada" value="WhatsApp-Videollamada" class="hidden">
                        <label for="messenger-videollamada" class="cursor-pointer">
                          <img src="./img/messenger.jpg" alt="Messenger Videollamada" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="messenger-videollamada" value="Messenger-Videollamada" class="hidden">
                      </div>
                    </div>
                    <!-- Mensajería -->
                    <div class="w-full sm:w-auto">
                      <p class="mb-1 font-semibold text-slate-800">Mensajería:</p>
                      <div class="flex gap-2 items-center">
                        <label for="whatsapp-mensajeria" class="cursor-pointer">
                          <img src="./img/whatsapp.jpg" alt="WhatsApp Mensajería" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="whatsapp-mensajeria" value="WhatsApp-Mensajeria" class="hidden">
                        <label for="messenger-mensajeria" class="cursor-pointer">
                          <img src="./img/messenger.jpg" alt="Messenger Mensajería" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="messenger-mensajeria" value="Messenger-Mensajeria" class="hidden">
                        <label for="mensajes-correo" class="cursor-pointer">
                          <img src="./img/correo.png" alt="Correo" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="mensajes-correo" value="Correo-mensajeria" class="hidden">
                      </div>
                    </div>
                    <!-- Llamadas -->
                    <div class="w-full sm:w-auto">
                      <p class="mb-1 font-semibold text-slate-800">Llamadas:</p>
                      <div class="flex gap-2 items-center">
                        <label for="whatsapp-llamada" class="cursor-pointer">
                          <img src="./img/whatsapp.jpg" alt="WhatsApp Llamada" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="whatsapp-llamada" value="WhatsApp-Llamada" class="hidden">
                        <label for="messenger-llamada" class="cursor-pointer">
                          <img src="./img/messenger.jpg" alt="Messenger Llamada" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="messenger-llamada" value="Messenger-Llamada" class="hidden">
                        <label for="llamada" class="cursor-pointer">
                          <img src="./img/telefono.png" alt="Llamada" class="w-10 h-10 rounded-full border border-slate-800">
                        </label>
                        <input type="radio" name="medio_contacto" id="llamada" value="Llamada" class="hidden">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="robot">
                  <div class="mb-2">
                    <label class="block text-gray-700">Selecciona la opción correcta</label>
                    <span class="block text-gray-700">¿Cuánto es 2 x 2?</span>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div class="flex gap-1 items-center">
                      <input type="radio" name="robot" id="cuatro" value="4">
                      <label for="cuatro" class="text-gray-700">4</label>
                    </div>
                    <div class="flex gap-1 items-center">
                      <input type="radio" name="robot" id="dos" value="2">
                      <label for="dos" class="text-gray-700">2</label>
                    </div>
                    <div class="flex gap-1 items-center">
                      <input type="radio" name="robot" id="cinco" value="5">
                      <label for="cinco" class="text-gray-700">5</label>
                    </div>
                  </div>
                </div>

                <div class="text-right">
                  <input type="submit" value="Contactar profesionista" class="px-6 py-2 text-white rounded transition bg-slate-800 hover:bg-slate-700">
                </div>
              </form>
            </section>
            <section v-else>
              <div class="text-center">
                <h2 class="mb-2 text-xl font-bold text-slate-600">
                  El horario de contratación del experto es de 10:00am - 5:30pm
                </h2>
                <h3 class="mb-4 text-gray-700">
                  Si desea contratar el experto o realizar una consulta sin ocupar los 15 minutos de prueba, puede agendar una cita
                </h3>
                <!--Disclaimer -->
                <p class="text-sm italic text-gray-700 text-end">
                  *Los expertos pueden tener un horario diferente al de la plataforma
                </p>
              </div>
            </section>

          </div>
        </section>
      </div>
    </div>
  </section>

  <hr class="my-8 border-gray-300" />

    </template>
   </MainLayout>
</template>


<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';


import { ref } from 'vue';
import type { IDateRoot } from '@/interfaces/IDateRoot';


const props = defineProps({
  title: {
    type: String,
    default: 'Profesionales y Expertos en CONTADURÍA'
  },
  area: {
    type: String,
    default: 'Ciencias Sociales'
  },
  availableDay: {
    type: String,
    default: 'Tue'
  },
  availableHourStart: {
    type: Number,
    default: 10
  },
  availableHourEnd: {
    type: Number,
    default: 14
  },
  freeTrialLink: {
    type: String,
    default: './c-contadores.php#ancla-consulta'
  },
  hireLink: {
    type: String,
    default: './citas.php'
  },
  formAction: {
    type: String,
    default: 'enviar-correo.php'
  },
  expertType: {
    type: String,
    default: 'Contadores'
  },
  description: {
    type: String,
    default:
      'Los Contadores trabajan tanto para el sector público, como para el privado y son aquellos profesionales responsables del estado financiero y de los libros contables del individuo o empresa que haya solicitado sus servicios, en tal sentido, su misión consiste en velar que su clientela cumpla con la legislación aplicable y con los procedimientos establecidos, además de garantizar que haya registro de los ingresos y egresos de sus cuentas.'
  },
  offersLeft: {
    type: Array,
    default: () => [
      { icon: 'fas fa-file-alt', text: 'Documentar informes financieros para los clientes' },
      { icon: 'fas fa-book', text: 'Revisar los libros contables de los clientes.' },
      { icon: 'fas fa-chart-bar', text: 'Analizar las ganancias y los gastos.' },
      { icon: 'fas fa-balance-scale', text: 'Elaborar el balance de los libros financieros.' },
      { icon: 'fas fa-pen-nib', text: 'Redactar informes sobre el estado financiero de sus clientes.' }
    ]
  },
  offersRight: {
    type: Array,
    default: () => [
      { icon: 'fas fa-file-excel', text: 'Manejar registros, sistemas y presupuestos financieros.' },
      { icon: 'fas fa-user-tie', text: 'Hacer auditorías financieras para sus clientes.' },
      { icon: 'fas fa-tasks', text: 'Brindar asesoría financiera y tributaria.' },
      { icon: 'fas fa-glasses', text: 'Examinar las cuentas y registros financieros.' },
      { icon: '', text: 'Y mucho más' }
    ]
  },
  categories: {
    type: Array,
    default: () => [
      { name: 'Contador', link: '#', active: true },
      { name: 'Asesorías Legales', link: './c-abogados.php', active: false },
      { name: 'Arquitecto', link: './c-arquitectos.php', active: false },
      { name: 'Importación y Exportación', link: './c-comercio.php', active: false },
      { name: 'Doctor', link: './c-doctores.php', active: false },
      { name: 'Gestoría en trámites', link: './c-gestorias.php', active: false },
      { name: 'Ingeniería Computacional', link: './c-computacion.php', active: false },
      { name: 'Marketing', link: './c-marketing.php', active: false },
      { name: 'Peritaje', link: './c-peritaje.php', active: false },
      { name: 'Publicidad', link: './c-publicidad.php', active: false },
      { name: 'Servicios Web', link: './c-web.php', active: false },
      { name: 'Traductor', link: './c-traductores.php', active: false }
    ]
  },
  defaultMonth: {
    type: String,
    default: 'Noviembre'
  }
});

// Computed para convertir la abreviatura del día a su nombre completo en español
const availableDayFull = computed(() => {
  const dayMap = {
    Sun: 'Domingo',
    Mon: 'Lunes',
    Tue: 'Martes',
    Wed: 'Miércoles',
    Thu: 'Jueves',
    Fri: 'Viernes',
    Sat: 'Sábado'
  };
  return dayMap[props.availableDay] || props.availableDay;
});

// Computed para determinar la disponibilidad según la fecha y hora actual
const isAvailable = computed(() => {
  const now = new Date();
  const dayOptions = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = dayOptions[now.getDay()];
  const currentHour = now.getHours();
  return (
    currentDay === props.availableDay &&
    currentHour >= props.availableHourStart &&
    currentHour < props.availableHourEnd
  );
});

// Computed para el ícono del área
const areaIcon = computed(() => 'fas fa-dollar-sign');

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import DateSquare from '@/components/ExpertoInfoView/DateSquare.vue';


const date = ref(new Date())


// Función para bloquear todas las fechas excepto hoy
const disableAllExceptToday = (inputDate: Date) => {
  const today = new Date()

  // Normalizamos ambas fechas para comparar solo día/mes/año (sin hora)
  const input = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  return input.getTime() !== current.getTime()
}

const availableTimeDataExample = [{
    availableForAppointment: false,
    weeklySchedule:[
      {
        dayInfo:{
          isDayAvailable: false,
          day: 'Lunes',
          availableHours: ['10:30', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:00', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Martes',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:00', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Miércoles',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['14:30', '12:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Jueves',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:30', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Viernes',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:30', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Sábado',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:30', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Domingo',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:00', '11:00']
        }
      }
    ],

}]

const availableTimeData =ref<IDateRoot[]>()
//Function to select the user date and hour

const getDate = (day) => {
console.log(day);

}
const dataAppointment = reactive({
  date: {},
  hour: ''
})



//Firebase Stuff
const db = getFirestore()
const collectionDates = collection(db,  `Dates`)
//TODO:Add Interface to it
//Function to get the dates from Firebase
const getDates = async () => {
  availableTimeData.value = [];
  try {
    const querySnapshot = await getDocs(collectionDates);
    availableTimeData.value = [(querySnapshot.docs[0].data() as IDateRoot)]
  } catch (error) {
    console.error('Error fetching dates:', error);
  }
}

onMounted( () => {
  getDates();
})

const addNewDate = async () => {
  try {
    addDoc(collectionDates, {
    availableForAppointment: false,
    weeklySchedule:[
      {
        dayInfo:{
          isDayAvailable: false,
          day: 'Lunes',
          availableHours: ['10:30', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:00', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Martes',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:00', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Miércoles',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['14:30', '12:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Jueves',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:30', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Viernes',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:30', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Sábado',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:30', '11:00']
        }
      },
      {
        dayInfo: {
          isDayAvailable: false,
          day: 'Domingo',
          availableHours: ['10:00', '11:00', '12:00', '13:00', '14:30', '15:00', '16:00', '17:00'],
          hoursTaken: ['10:00', '11:00']
        }
      }
    ],

}


    )
  } catch (error) {
    console.log('Error al enviar el documento ', error);

  }
}

</script>

<style scoped>

</style>
