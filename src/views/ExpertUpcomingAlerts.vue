<template>
  <MainLayout>
    <template #main>
      {{ data }}
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { collection } from 'firebase/firestore';

const data = ref()

const datesCollection = collection(db, 'Dates');
const getExpertDates = async () => {
  try {

  } catch (error) {
    console.log(error);

  }
}

</script>

<style scoped></style>
