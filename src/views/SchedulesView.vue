<template>
   <MainLayout>
    <template #main>
      <div class="container px-4 py-8 mx-auto animate-fade-up">
        <div class="flex flex-col gap-8 mb-12 mensajes-horarios lg:flex-row">
            <!-- Sección de Recordatorio -->
            <div class="space-y-6 lg:w-1/2">
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="mb-4 text-2xl font-bold text-blue-600">Recuerda:</h3>
                    <p class="mb-4 text-gray-600">Estos horarios son con los que trabajarán los expertos para las pruebas gratuitas. Si usted ya cuenta con un contrato los horarios serán declarados en el mismo.</p>

                    <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200 advertencia-horarios">
                        <p class="flex gap-2 items-start text-yellow-700">
                            <i class="mt-1 text-yellow-500 fas fa-exclamation-circle"></i>
                            Para contactar con los diferentes medios, sea por correo, videollamada o llamada telefónica favor de revisar la disponibilidad del profesional
                        </p>
                    </div>
                </div>
            </div>

            <!-- Sección de Consulta Gratis -->
            <div class="p-8 text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg aviso-horarios lg:w-1/2">
                <h2 class="mb-4 text-2xl font-bold">Una consulta gratis</h2>
                <p class="opacity-90">Si eres un usuario nuevo tendrás la opción de una consulta de forma gratuita con un tiempo de 15 minutos para que puedas indagar, preguntar, consultar y más al profesionista en su área</p>
            </div>
        </div>

        <!-- Grid de Horarios -->
        <section class="grid grid-cols-1 gap-6 contenedor-horarios md:grid-cols-2 lg:grid-cols-3">

            <!-- Lunes -->
            <div class="p-6 bg-white rounded-xl shadow-md transition-shadow dia hover:shadow-lg">
                <h3 class="mb-4 text-xl font-semibold text-gray-800">Lunes</h3>
                <div class="space-y-4">
                    <div class="p-4 bg-gray-50 rounded-lg matutino">
                        <p class="font-medium text-gray-600">Matutino:</p>
                        <p class="font-semibold text-blue-600">10:00am - 14:00pm</p>
                        <a href="./c-doctores.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Doctores <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                    <div class="p-4 bg-gray-50 rounded-lg vespertino">
                        <p class="font-medium text-gray-600">Vespertino:</p>
                        <p class="font-semibold text-blue-600">14:00pm - 18:00pm</p>
                        <a href="./c-traductores.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Traductores <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Martes -->
            <div class="p-6 bg-white rounded-xl shadow-md transition-shadow dia hover:shadow-lg">
                <h3 class="mb-4 text-xl font-semibold text-gray-800">Martes</h3>
                <div class="space-y-4">
                    <div class="p-4 bg-gray-50 rounded-lg matutino">
                        <p class="font-medium text-gray-600">Matutino:</p>
                        <p class="font-semibold text-blue-600">10:00am - 14:00pm</p>
                        <a href="./c-contadores.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Contadores <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                    <div class="p-4 bg-gray-50 rounded-lg vespertino">
                        <p class="font-medium text-gray-600">Vespertino:</p>
                        <p class="font-semibold text-blue-600">14:00pm - 18:00pm</p>
                        <a href="./c-abogados.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Asesorías Legales <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Miércoles -->
            <div class="p-6 bg-white rounded-xl shadow-md transition-shadow dia hover:shadow-lg">
                <h3 class="mb-4 text-xl font-semibold text-gray-800">Miércoles</h3>
                <div class="space-y-4">
                    <div class="p-4 bg-gray-50 rounded-lg matutino">
                        <p class="font-medium text-gray-600">Matutino:</p>
                        <p class="font-semibold text-blue-600">10:00am - 14:00pm</p>
                        <a href="./c-arquitectos.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Arquitectos <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                    <div class="p-4 bg-gray-50 rounded-lg vespertino">
                        <p class="font-medium text-gray-600">Vespertino:</p>
                        <p class="font-semibold text-blue-600">14:00pm - 18:00pm</p>
                        <a href="./c-peritaje.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Peritaje <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Jueves -->
            <div class="p-6 bg-white rounded-xl shadow-md transition-shadow dia hover:shadow-lg">
                <h3 class="mb-4 text-xl font-semibold text-gray-800">Jueves</h3>
                <div class="space-y-4">
                    <div class="p-4 bg-gray-50 rounded-lg matutino">
                        <p class="font-medium text-gray-600">Matutino:</p>
                        <p class="font-semibold text-blue-600">10:00am - 14:00pm</p>
                        <a href="./c-comercio.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Comercio Exterior <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                    <div class="p-4 bg-gray-50 rounded-lg vespertino">
                        <p class="font-medium text-gray-600">Vespertino:</p>
                        <p class="font-semibold text-blue-600">14:00pm - 18:00pm</p>
                        <a href="./c-marketing.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Marketing y Publicidad <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Viernes -->
            <div class="p-6 bg-white rounded-xl shadow-md transition-shadow dia hover:shadow-lg">
                <h3 class="mb-4 text-xl font-semibold text-gray-800">Viernes</h3>
                <div class="space-y-4">
                    <div class="p-4 bg-gray-50 rounded-lg matutino">
                        <p class="font-medium text-gray-600">Matutino:</p>
                        <p class="font-semibold text-blue-600">10:00am - 14:00pm</p>
                        <a href="./c-web.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Servicios Web <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                    <div class="p-4 bg-gray-50 rounded-lg vespertino">
                        <p class="font-medium text-gray-600">Vespertino:</p>
                        <p class="font-semibold text-blue-600">14:00pm - 18:00pm</p>
                        <a href="./c-computacion.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Ingeniería Computacional <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Sábado -->
            <div class="p-6 bg-white rounded-xl shadow-md transition-shadow dia hover:shadow-lg">
                <h3 class="mb-4 text-xl font-semibold text-gray-800">Sábado</h3>
                <div class="space-y-4">
                    <div class="p-4 bg-gray-50 rounded-lg matutino">
                        <p class="font-medium text-gray-600">Matutino:</p>
                        <p class="font-semibold text-blue-600">10:00am - 14:00pm</p>
                        <a href="./c-gestorias.php" class="inline-flex items-center mt-2 text-blue-500 transition-colors hover:text-blue-700">
                            Gestorías <i class="ml-2 text-sm fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>
