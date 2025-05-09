<template>
  <div class="min-h-screen text-gray-900 bg-white">
    <!-- Header superior -->
    <header class="flex sticky top-0 z-50 justify-between items-center p-4 py-7 bg-white border-b border-slate-600">
      <div class="text-xl font-bold text-gray-800">
        <RouterLink :to="{ name: 'home' }"><span v-html="currentDomain"></span></RouterLink>
      </div>
      <div class="hidden gap-4 text-base font-semibold text-gray-800 font-openSans md:flex">
        <RouterLink v-if="useRoute().name !== 'home'" :to="{ name: 'home' }" class="hover:underline">
          Inicio</RouterLink>
        <RouterLink :to="{ name: 'experts' }" class="hover:underline">Ver Expertos</RouterLink>
        <RouterLink :to="{ name: 'about' }" class="hover:underline">Nosotros</RouterLink>
        <RouterLink :to="{ name: 'schedules' }" class="hover:underline">Horarios</RouterLink>
        <RouterLink :to="{ name: 'help' }" class="hover:underline">Ayuda</RouterLink>
        <RouterLink :to="{ name: 'contact' }" class="text-orange-500 hover:underline">Contacto</RouterLink>
        <RouterLink :to="{ name: 'register' }" class="text-orange-500 hover:underline">Unirme</RouterLink>
        <RouterLink :to="{ name: 'login' }"
          class="p-[2px] text-center text-white bg-orange-500 rounded hover:underline">
          <span class="p-2">Iniciar Sesión</span>
        </RouterLink>
      </div>
      <div class="gtranslate_wrapper"></div>

    </header>


    <!--Main Content-->
    <main>
      <slot name="main" />
    </main>

    <!--Footer-->
    <footer class="px-4 py-12 text-gray-300 bg-gray-900">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-8 justify-between items-center md:flex-row">
          <!-- Logo -->
          <div class="flex items-center p-2 text-xl font-bold text-gray-800 bg-white rounded shadow">
            <RouterLink :to="{ name: 'home' }" class="flex items-center"><span v-html="currentDomain"></span>
            </RouterLink>
            <v-icon name="md-home" scale="1.2" class="ml-2" />
          </div>

          <!-- Contenido del footer -->
          <div class="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Navegación 1 -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Navegación</h3>
              <nav class="flex flex-col space-y-2">
                <RouterLink :to="{ name: 'about' }" class="transition-colors duration-200 hover:text-white">Nosotros
                </RouterLink>
                <RouterLink :to="{ name: 'help' }" class="transition-colors duration-200 hover:text-white">Ayuda
                </RouterLink>
                <RouterLink :to="{ name: 'contact' }" class="transition-colors duration-200 hover:text-white">Contacto
                </RouterLink>
              </nav>
            </div>

            <!-- Navegación 2 -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-white">Acciones</h3>
              <nav class="flex flex-col space-y-2">
                <RouterLink :to="{ name: 'contact' }" class="transition-colors duration-200 hover:text-white">
                  Contactar</RouterLink>
                <RouterLink :to="{ name: 'experts' }" class="transition-colors duration-200 hover:text-white">Ver
                  Expertos</RouterLink>
              </nav>
            </div>

            <!-- Descripción -->
            <div class="space-y-6 sm:col-span-2 lg:col-span-1">
              <div class="pt-6 border-t border-gray-700 lg:hidden"></div>
              <p class="text-sm leading-relaxed">
                Realiza tu consulta a profesionales en el área de forma fácil y rápida, sin necesidad de buscar en
                diferentes sitios. Con 15 minutos de prueba podrás saber si el experto podrá resolver tu duda.
              </p>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 mt-12 text-sm text-center border-t border-gray-800">
          <p>consultaexperto.com {{ new Date().getFullYear() }} &copy; Todos los derechos reservados. Design: JAAC,
            updated by PACA</p>
        </div>
      </div>
    </footer>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//Profesional :
//Aprobadio por la empresa , requiere primero que solicite
//Temporal code for the person who is approved
//Cliente,  debe tener un estado que valide que no aun tiene los 15 minutos gratis , no se permiten menresa de edad
//informes@grupochimex.com

const domainsList = ref([
  '<span class="text-sky-800 animate-fade-up animate-delay-[100ms]">consulta</span><span class="text-orange-500 animate-fade-up animate-delay-[250ms]">especializada</span><span class="text-yellow-400 animate-fade-up animate-delay-[400ms]">.com</span>',
  '<span class="text-sky-800 animate-fade-up animate-delay-[100ms]">consulta</span><span class="text-orange-500 animate-fade-up animate-delay-[250ms]">experto</span><span class="text-yellow-400 animate-fade-up animate-delay-[400ms]">.com</span>',
  '<span class="text-sky-800 animate-fade-up animate-delay-[100ms]">consulta</span><span class="text-orange-500 animate-fade-up animate-delay-[250ms]">gratisenlinea</span><span class="text-yellow-400 animate-fade-up animate-delay-[400ms]">.com</span>',
])


const currentDomain = ref(domainsList.value[0]);


//Change the domain every 6 seconds
const toggleDomain = () => {
  const randomIndex = () => Math.round(Math.random() * 2);

  setInterval(() => {
    currentDomain.value = domainsList.value[randomIndex()]
  }, 2000)

}

onMounted(() => {
  toggleDomain()
})

</script>

<style scoped></style>
