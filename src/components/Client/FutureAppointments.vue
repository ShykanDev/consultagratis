<template>
  <div class="">
    <h2 class="text-2xl font-bold text-center text-white bg-sky-700">Próximas Citas</h2>
    <section v-if="appointments.length" class="flex flex-wrap justify-evenly w-full">
      <div v-for="appointment in appointments" :key="appointment.id">
        <article class="p-6 mx-auto mt-6 bg-white rounded-2xl border border-sky-700 shadow-lg min-w-96">
          <div class="flex items-center mb-4 text-blue-600">
            <v-icon name="fa-user-check" class="mr-2" scale="1.2" />
            <h3 class="text-lg font-semibold">Cita Confirmada</h3>
          </div>

          <div class="space-y-4 text-gray-800">
            <div class="flex items-center">
              <v-icon name="fa-calendar-day" class="mr-3 text-rose-500" />
              <p>
                <span class="font-medium">Fecha:</span>
                {{ appointment.day }}, {{ appointment.dayNumber }} de {{ appointment.month }} del {{ appointment.year }}
              </p>
            </div>

            <div class="flex items-center">
              <v-icon name="fa-clock" class="mr-3 text-green-600" />
              <p><span class="font-medium">Hora:</span> {{ appointment.hour }}</p>
            </div>

            <div class="flex items-center">
              <v-icon name="fa-user-tie" class="mr-3 text-purple-900" />
              <p><span class="font-medium">Profesional:</span> {{ appointment.proffession }}</p>
            </div>
            <button @click="deleteAppointment(appointment.id)"
              class="px-4 py-2 text-white bg-emerald-800 rounded transition hover:bg-emerald-700">Marcar
              como
              finalizada</button>

          </div>
        </article>

      </div>
    </section>
    <p v-else>No hay citas programadas</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { addDoc, deleteDoc, doc, getFirestore, Timestamp } from 'firebase/firestore';
import { onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import clientStore from '@/stores/client';
import type { IFutureAppointment } from '@/interfaces/IFutureAppointment';

const appointments = ref<IFutureAppointment[]>([])
const client = clientStore()
const db = getFirestore();

const getFutureAppointments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, `users/${client.clientUid}/FutureAppointments`));
    querySnapshot.forEach((doc) => {
      appointments.value.push({ id: doc.id, ...doc.data() } as IFutureAppointment);
      console.log(doc.data());
    });
    console.log(appointments.value);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getFutureAppointments()
})

//Delete appointment from future appointments and add it to history
const deleteAppointment = async (id: string) => {
  try {
    await deleteDoc(doc(db, `users/${client.clientUid}/FutureAppointments/${id}`));
    await addDoc(collection(db, `users/${client.clientUid}/HistoryAppointments`), {
      ...appointments.value.find((appointment) => appointment.id === id),
      id: id,
      finalizationDate: Timestamp.now(),
    });
    appointments.value = appointments.value.filter((appointment) => appointment.id !== id);
    getFutureAppointments()
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped></style>
