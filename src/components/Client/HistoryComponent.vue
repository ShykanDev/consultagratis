<template>
  <div class="">
    <h2>Historial</h2>
    <section v-if="appointments.length">
      <div v-for="appointment in appointments" :key="appointment.id">
        {{ appointment }}
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

const client = clientStore()
const appointments = ref([])
const db = getFirestore();
const getHistory = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, `users/${client.clientUid}/HistoryAppointments`));
    querySnapshot.forEach((doc) => {
      appointments.value.push({ id: doc.id, ...doc.data() });
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
