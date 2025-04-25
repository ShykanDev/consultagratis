<template>
    <div class="">
      <article class="mx-2 text-center rounded border min-w-14 border-slate-800 font-openSans">
          <p>{{ day }}</p>
          <section class="flex flex-col items-center px-2 py-2 space-y-3">
            <p v-for="(hour, index) in availableHours" :key="index" class="w-full rounded-md border border-slate-900 bg-slate-200"
            :class="{
            //When date is taken
              'bg-black text-white line-through italic hover:cursor-not-allowed': hoursTaken?.includes(hour)
              //Date picked

            }"
            >{{ hour }} </p>
          </section>
      </article>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  availableForAppointment:Boolean,
  availableHours:Array,
  hoursTaken:Array,
  isDayAvailable:Boolean,
  day:String,
})
</script>

<style scoped>

</style>