<template>
  <div class="">
    <article class="mx-2 text-xl text-center rounded border min-w-14 border-slate-800 font-sarabun">
      <p>{{ dayInfo.day }} <span class="px-2 text-white rounded-2xl bg-slate-800">{{ dayInfo.dayNumber }}</span> {{ isDayAvailables }}</p>
      <section class="flex flex-col items-center px-2 py-2 space-y-3">
        <p v-for="(hour, index) in availableHours" :key="index"
        id="hourArea"
          class="relative py-2 w-full rounded-xl border transition-all duration-200 ease-out cursor-pointer border-slate-900 bg-slate-200" :class="{
            //Hover only when date is not taken
            'hover:bg-sky-700 hover:text-white italic': !hoursTaken?.includes(hour),
            //When date is taken (not available)
            'bg-slate-900 text-slate-400 italic hover:cursor-not-allowed': hoursTaken?.includes(hour),
            //Date picked by user
            'bg-sky-500 text-white animate-fade' : hour == userHourSelection && dayInfo.day == userDateSelection
          }">
          <span id="hourArea" :class="{ 'line-through': hoursTaken?.includes(hour) }">{{ hour }}</span> <span
            v-if="hoursTaken?.includes(hour)" class="flex absolute top-0 right-0 bottom-0 left-0 flex-col justify-center items-center text-sm text-white rounded-xl opacity-0 bg-slate-800 hover:opacity-100 font-sarabun">No Disponible</span>
        </p>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
const props = defineProps({
  dayInfo: {
    type: Object,
    required: true
  },
  availableForAppointment: {
    type: Boolean,
    required: true
  },
  availableHours: {
    type: Array,
    required: true
  },
  hoursTaken: {
    type: Array,
    required: true
  },
  selectedDay: {
    type: String,
    required: true
  },
  selectedHour: {
    type: String,
    required: true
  }
})
const userDateSelection = ref(props.selectedDay)
const userHourSelection = ref(props.selectedHour)

watch(() => props.selectedDay, () => {
  userDateSelection.value = props.selectedDay
})

watch(() => props.selectedHour, () => {
  userHourSelection.value = props.selectedHour
})

</script>

<style scoped></style>