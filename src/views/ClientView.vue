<template>
  <MainLayout>
    <template #main>
      <section class="flex flex-col w-full min-h-screen lg:flex-row">
        <!-- Sidebar -->
        <aside class="flex gap-2 p-4 bg-blue-100 shadow-md lg:flex-col lg:min-w-64">
          <button v-for="key in componentKeys" :key="key" @click="setCurrentComponent(key)" :class="[
            'w-full px-4 py-2 rounded font-medium transition',
            activeKey === key ? 'bg-blue-600 text-white' : 'bg-blue-300 hover:bg-blue-400 text-blue-900'
          ]">
            {{
              key === 'FutureAppointments' ? 'Próximas Citas' :
                key === 'HistoryComponent' ? 'Historial' :
                  key === 'SettingsComponent' ? 'Configuración' : key
            }}
          </button>
        </aside>

        <!-- Main content -->
        <article class="flex-1 p-4">
          <Suspense>
            <template #default>
              <component :is="currentComponent" />
            </template>
            <template #fallback>
              <div class="text-center text-blue-700">Cargando componente...</div>
            </template>
          </Suspense>
        </article>
      </section>
    </template>
  </MainLayout>
</template>


<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { defineAsyncComponent, ref } from 'vue'



const props = defineProps({
  userName: {
    type: String,
    required: true,
    default: 'Usuario'
  }
})

const componentMap = {
  FutureAppointments: defineAsyncComponent(() => import('@/components/Client/FutureAppointments.vue')),
  HistoryComponent: defineAsyncComponent(() => import('@/components/Client/HistoryComponent.vue')),
  SettingsComponent: defineAsyncComponent(() => import('@/components/Client/SettingsComponent.vue'))
}

const componentKeys = Object.keys(componentMap)
const activeKey = ref<'FutureAppointments' | 'HistoryComponent' | 'SettingsComponent'>('FutureAppointments')
const currentComponent = ref(componentMap[activeKey.value])

const setCurrentComponent = (key: typeof activeKey.value) => {
  activeKey.value = key
  currentComponent.value = componentMap[key]
}
</script>
