<template>
  <div class="">
    <h2>Historial</h2>
    <section v-if="appointments.length">
      <div v-for="appointment in appointments" :key="appointment.id">
        <article class="p-5 mx-auto mt-6 max-w-xl bg-white rounded-2xl border border-gray-100 shadow-md">
          <div class="flex items-center mb-4 text-blue-600">
            <v-icon name="hi-clock" class="mr-2" scale="1.2" />
            <h3 class="text-lg font-semibold">Cita Finalizada</h3>
          </div>

          <div class="space-y-3 text-gray-700">
            <div class="flex items-center">
              <v-icon name="hi-calendar" class="mr-3 text-pink-500" />
              <p>
                <span class="font-medium">Fecha de la cita programada:</span>
                {{ appointment.day }}, {{ appointment.dayNumber }} de {{ appointment.month }} del {{ appointment.year }}
              </p>
            </div>

            <div class="flex items-center">
              <v-icon name="hi-clock" class="mr-3 text-green-600" />
              <p><span class="font-medium">Hora:</span> {{ appointment.hour }}</p>
            </div>

            <div class="flex items-center">
              <v-icon name="hi-user" class="mr-3 text-purple-600" />
              <p><span class="font-medium">Profesional:</span> {{ appointment.proffession }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    <p v-else>No hay citas programadas</p>
  </div>
</template>

<script lang="ts" setup>
import clientStore from '@/stores/client';
import { onMounted } from 'vue';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { ref } from 'vue';
import type { IFutureAppointment } from '@/interfaces/IFutureAppointment';

const client = clientStore()
const appointments = ref<IFutureAppointment[]>([])
const db = getFirestore();
const getHistory = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, `users/${client.clientUid}/HistoryAppointments`));
    querySnapshot.forEach((doc) => {
      appointments.value.push(doc.data() as IFutureAppointment);
      console.log(doc.data());
    });
  } catch (error) {
    console.log(error);

  }
}

onMounted(() => {
  getHistory()
})

</script>

<style scoped></style>
