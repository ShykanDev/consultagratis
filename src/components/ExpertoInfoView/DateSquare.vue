<template>
  <div class="">
    <article class="mx-2 text-xl text-center rounded border min-w-14 border-slate-800 font-sarabun">
      <p>{{ day }}</p>
      <section class="flex flex-col items-center px-2 py-2 space-y-3">
        <p v-for="(hour, index) in availableHours" :key="index"

          class="relative py-2 w-full rounded-xl border border-slate-900 bg-slate-200" :class="{
            //When date is taken
            'bg-slate-900 text-slate-400 italic hover:cursor-not-allowed': hoursTaken?.includes(hour),
            //Date picked
            'bg-rose-900 text-white' : hour == selectedHour && day == selectedDay
          }">
          <span class="" :class="{ 'line-through': hoursTaken?.includes(hour) }">{{ hour }}</span> <span
            v-if="hoursTaken?.includes(hour)" class="flex absolute top-0 right-0 bottom-0 left-0 flex-col justify-center items-center text-sm text-white rounded-xl opacity-0 bg-slate-800 hover:opacity-100 font-sarabun">No Disponible</span>
        </p>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
const props = defineProps({
  availableForAppointment: {
    type:Boolean,
    required:true
  },
  availableHours: {
    type:Array,
    required:true
  },
  hoursTaken: {
    type:Array,
    required:true,
  },
  isDayAvailable: {
    type:Boolean,
    required:true
  },
  day: {
    type:String,
    required:true
  }
})

//User selected hour
const selectedHour = ref();
const selectedDay = ref();


</script>

<style scoped></style>