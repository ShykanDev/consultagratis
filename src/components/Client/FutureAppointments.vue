<template>
  <div class="">
    <h2>Próximas Citas</h2>
    <section v-if="appointments.length">
      <div v-for="appointment in appointments" :key="appointment.id">
        {{ appointment }}
      </div>
    </section>
    <p v-else>No hay citas programadas</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getFirestore } from 'firebase/firestore';
import { onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import clientStore from '@/stores/client';

const appointments = ref([])
const client = clientStore()
const db = getFirestore();

const getFutureAppointments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, `users/${client.clientUid}/FutureAppointments`));
    querySnapshot.forEach((doc) => {
      appointments.value.push({ id: doc.id, ...doc.data() });
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
</script>

<style scoped></style>
