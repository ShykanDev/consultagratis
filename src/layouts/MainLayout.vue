<template>
  <div class="min-h-screen text-gray-900 bg-white">
    <!-- Header superior -->
  <div class="flex justify-between items-center p-4 py-7 border-b">
    <div class="text-xl font-bold text-gray-800">
      <span class="text-blue-600">consulta</span><span class="text-orange-500">especializada</span><span class="text-yellow-400">.com</span>
    </div>
    <div class="hidden gap-4 text-base font-semibold text-gray-800 font-openSans md:flex">
      <RouterLink :to="{ name: 'home' }" class="hover:underline">Inicio</RouterLink>
      <RouterLink :to="{ name: 'experts' }" class="hover:underline">Ver Expertos</RouterLink>
      <RouterLink :to="{ name: 'about' }" class="hover:underline">Nosotros</RouterLink>
      <RouterLink :to="{ name: 'schedules' }" class="hover:underline">Horarios</RouterLink>
      <RouterLink :to="{ name: 'help' }" class="hover:underline">Ayuda</RouterLink>
      <RouterLink :to="{ name: 'contact' }" class="text-orange-500 hover:underline">Contacto</RouterLink>
      <RouterLink :to="{ name: 'register' }" class="text-orange-500 hover:underline">Unirme</RouterLink>
    </div>
    <div class="gtranslate_wrapper"></div>

  </div>


    <!--Main Content-->
    <main>
      <slot name="main" />
    </main>

    <!--Footer-->
    <footer class="px-4 py-12 text-gray-300 bg-gray-900">
    <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-8 justify-between md:flex-row">
            <!-- Logo -->
            <div class="mb-8 md:mb-0">
                <a href="./index.php" class="block">
                    <img src="../assets/img/logo.gif" alt="Logo" class="w-auto h-12 bg-white rounded">
                </a>
            </div>

            <!-- Contenido del footer -->
            <div class="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Navegación 1 -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Navegación</h3>
                    <nav class="flex flex-col space-y-2">
                        <a href="./nosotros.php" class="transition-colors duration-200 hover:text-white">Nosotros</a>
                        <a href="./ayuda.php" class="transition-colors duration-200 hover:text-white">Ayuda</a>
                        <a href="./contacto.php" class="transition-colors duration-200 hover:text-white">Contacto</a>
                    </nav>
                </div>

                <!-- Navegación 2 -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">Acciones</h3>
                    <nav class="flex flex-col space-y-2">
                        <a href="./horarios.php" class="transition-colors duration-200 hover:text-white">Contactar</a>
                        <a href="./ver-categorias.php" class="transition-colors duration-200 hover:text-white">Ver categorías</a>
                    </nav>
                </div>

                <!-- Descripción -->
                <div class="space-y-6 sm:col-span-2 lg:col-span-1">
                    <div class="pt-6 border-t border-gray-700 lg:hidden"></div>
                    <p class="text-sm leading-relaxed">
                        Realiza tu consulta a profesionales en el área de forma fácil y rápida, sin necesidad de buscar en diferentes sitios. Con 15 minutos de prueba podrás saber si el experto podrá resolver tu duda.
                    </p>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 mt-12 text-sm text-center border-t border-gray-800">
            <p>consultaexperto.com {{ new Date().getFullYear() }} &copy; Todos los derechos reservados. Design: JAAC, updated by PACA</p>
        </div>
    </div>
</footer>
  </div>
</template>


<script lang="ts" setup>
//Profesional :
//Aprobadio por la empresa , requiere primero que solicite
//Temporal code for the person who is approved
//Cliente,  debe tener un estado que valide que no aun tiene los 15 minutos gratis , no se permiten menresa de edad
//informes@grupochimex.com
</script>

<style scoped></style>