<template>
  <MainLayout>
    <template #main>
      <div class="container px-4 py-8 mx-auto">
        <h1 class="mb-8 text-3xl font-bold text-center text-indigo-700">Calendario de Citas</h1>

        <!-- Mostrar disponibilidad -->
        <div v-if="!scheduleData.availableForAppointment"
          class="p-4 mb-6 text-yellow-700 bg-yellow-100 rounded border-l-4 border-yellow-500">
          <p class="font-medium">Actualmente no disponible para nuevas citas</p>
        </div>

        <!-- Cargando datos -->
        <div v-if="loading" class="flex justify-center py-12">
          <div class="w-8 h-8 rounded-full border-4 border-indigo-500 animate-spin border-t-transparent"></div>
        </div>

        <!-- Mostrar cuando no hay datos -->
        <div v-else-if="scheduleData.weeklySchedule.length === 0" class="py-12 text-center text-gray-500">
          No hay citas programadas
        </div>

        <!-- Mostrar calendario -->
        <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(day, index) in scheduleData.weeklySchedule" :key="index"
            class="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-shadow duration-300 hover:shadow-lg">

            <!-- Encabezado de la tarjeta -->
            <div class="flex justify-between items-center px-4 py-3 bg-indigo-600">
              <div class="flex items-center text-white">
                <v-icon name="io-calendar" class="mr-2" />
                <span class="font-semibold">{{ day.dayInfo.day }}, {{ day.dayInfo.dayNumber }} de {{
                  day.dayInfo.monthName }}</span>
              </div>
              <v-icon name="fa-reg-calendar-alt" class="text-white" />
            </div>

            <!-- Contenido de la tarjeta -->
            <div class="p-4">
              <!-- Estado del día -->
              <div class="flex items-center mb-4">
                <span class="px-3 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full">
                  {{ day.dayInfo.isDayAvailable ? 'Disponible' : 'No disponible' }}
                </span>
                <span class="ml-auto text-sm text-gray-500">{{ day.dayInfo.fullDate }}</span>
              </div>

              <!-- Horas disponibles -->
              <div class="mb-6">
                <h3 class="flex items-center mb-3 text-lg font-medium text-gray-700">
                  <v-icon name="io-time" class="mr-2 text-indigo-500" />
                  Horario
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(hour, hourIndex) in day.dayInfo.availableHours" :key="hourIndex"
                    class="px-3 py-1 text-sm rounded-full" :class="{
                      'bg-green-100 text-green-800': !isHourTaken(day.dayInfo.hoursTaken, hour),
                      'bg-indigo-100 text-indigo-800 border border-indigo-500': isHourTaken(day.dayInfo.hoursTaken, hour)
                    }">
                    {{ hour }}
                    <v-icon v-if="isHourTaken(day.dayInfo.hoursTaken, hour)" name="fa-check-circle"
                      class="ml-1 text-indigo-600" />
                  </span>
                </div>
              </div>

              <!-- Citas confirmadas -->
              <div v-if="day.dayInfo.hoursTaken.length > 0">
                <h3 class="flex items-center mb-3 text-lg font-medium text-gray-700">
                  <v-icon name="fa-clock" class="mr-2 text-indigo-500" />
                  Citas confirmadas
                </h3>
                <div class="space-y-2">
                  <div v-for="(takenHour, takenIndex) in day.dayInfo.hoursTaken" :key="takenIndex"
                    class="p-3 bg-indigo-50 rounded border-l-4 border-indigo-500">
                    <div class="flex justify-between items-center">
                      <span class="font-medium text-indigo-700">{{ takenHour }}</span>
                      <span class="px-2 py-1 text-xs text-indigo-800 bg-indigo-100 rounded-full">Confirmada</span>
                    </div>
                    <p class="mt-1 text-sm text-gray-600">Cita programada para el {{ formatDate(day.dayInfo.fullDate) }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Mensaje cuando no hay citas -->
              <div v-else class="py-4 text-center text-gray-500">
                No hay citas confirmadas para este día
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import expertStore from '@/stores/expert';
import { onMounted, ref } from 'vue';

const db = getFirestore();
const scheduleData = ref({
  availableForAppointment: true,
  weeklySchedule: []
});
const loading = ref(true);

// Formatear fecha
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

// Verificar si hora está tomada
const isHourTaken = (hoursTaken: string[], hour: string) => {
  return hoursTaken.includes(hour);
};

// Obtener citas del experto
const getExpertFutureDates = async () => {
  try {
    const datesCollection = collection(db, 'Dates');
    const q = query(datesCollection, where('userUid', '==', expertStore().getExpertUid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      scheduleData.value = {
        availableForAppointment: data.availableForAppointment,
        weeklySchedule: data.weeklySchedule || []
      };
    }
  } catch (error) {
    console.error('Error fetching dates:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getExpertFutureDates();
});
</script>
