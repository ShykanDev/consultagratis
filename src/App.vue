<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Notivue, Notification, NotificationProgress, push } from 'notivue'
</script>

<template>
  <button @click="push.success('Hello from your first notification!')">
    Push
  </button>

  <Notivue v-slot="item">
    <Notification :item="item">
      <NotificationProgress />
    </Notification>
  </Notivue>
  <RouterView />
</template>

<style scoped></style>
