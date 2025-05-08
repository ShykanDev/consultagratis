<template>
  <MainLayout>
    <template #main>
      <section class="py-16 bg-gray-50 site-nosotros animate-fade-up">
        <div class="container px-4 mx-auto contenido-nosotros">
          <div class="p-8 mx-auto mb-16 max-w-3xl text-center bg-white rounded-2xl shadow-lg cuadro-nosotros">
            <h3 class="mb-6 text-3xl font-bold text-blue-600">Conoce los datos del sitio</h3>
            <p class="mb-8 text-gray-600">La página funge para realizar de forma rápida y sencilla una comunicación
              directa con profesionales en diferentes áreas. Los cuales pueden proporcionar asesorías y consultas
              eficientes otorgando soluciones a sus requerimientos.</p>
            <a class="inline-block px-8 py-3 text-white bg-blue-600 rounded-lg transition-colors btn-general hover:bg-blue-700"
              href="./ver-categorias.php">Ver profesiones</a>
          </div>

          <div class="my-16 border-t border-gray-200 separador"></div>

          <section class="principal-nosotros">
            <!-- Sección de Ayuda -->
            <div class="flex flex-col gap-8 items-center mb-16 dividir md:flex-row">
              <div class="md:w-3/5">
                <h3 class="mb-4 text-2xl font-bold text-gray-800">Ayuda a todas tus dudas en diferentes profesiones</h3>
                <p class="text-gray-600">Si necesitas una asesoría o realizar una consulta, podrás hacerlo de forma
                  sencilla y rápida de múltiples formas. Los profesionales podrán ofrecerte respuestas inmediatas o si
                  tu consulta o asesoría es de más tiempo podrás <strong class="text-blue-600">contratarlos</strong>
                  sabiendo sus <strong class="text-blue-600">capacidades</strong>.</p>
              </div>
              <div class="text-right md:w-2/5">
                <img src="@/assets/img/ayuda-nosotros.png" alt="ayuda" class="w-full max-w-xs rounded-lg shadow-md">
              </div>
            </div>

            <!-- Sección Comodidad -->
            <div class="flex flex-col gap-8 items-center mb-16 dividir md:flex-row">
              <div class="order-2 md:w-3/5 md:order-1">
                <h3 class="mb-4 text-2xl font-bold text-gray-800">Las respuestas desde la comodidad de tu hogar</h3>
                <p class="text-gray-600">Sea por videollamada, mensajes o llamadas puede contactar un
                  experto/profesional para que le ayude en diferentes áreas de forma <strong
                    class="text-green-600">rápida</strong>, <strong class="text-green-600">segura</strong> y <strong
                    class="text-green-600">eficiente</strong></p>
              </div>
              <div class="order-1 text-right md:w-2/5 md:order-2">
                <img src="@/assets/img/comodidad-nosotros.png" alt="comodidad"
                  class="w-full max-w-xs rounded-lg shadow-md">
              </div>
            </div>

            <!-- Sección Expertos -->
            <div class="flex flex-col gap-8 items-center mb-16 dividir md:flex-row">
              <div class="md:w-3/5">
                <h3 class="mb-4 text-2xl font-bold text-gray-800">Disponibles a tu disposición varios expertos</h3>
                <p class="text-gray-600">No necesitas buscar por horas a alguien que te ayude en resolver tus dudas,
                  puedes consultarlos de forma rápida en el sitio, teniendo en cuenta la profesión y los horarios para
                  poder realizar la consulta</p>
              </div>
              <div class="text-right md:w-2/5">
                <img src="@/assets/img/expertos-nosotros.png" alt="expertos"
                  class="w-full max-w-xs rounded-lg shadow-md">
              </div>
            </div>

            <div class="my-16 border-t border-gray-200 separador"></div>

            <!-- Cuadros Acciones -->
            <div class="grid grid-cols-1 gap-8 cuadros-nosotros lg:grid-cols-2">
              <div class="p-8 text-white bg-blue-600 rounded-xl shadow-lg cuadro-principal-nosotros">
                <div class="contenido-cuadro-nosotros">
                  <h3 class="mb-4 text-2xl font-bold">Conozca los horarios de los profesionistas y expertos</h3>
                  <p class="mb-6 opacity-90">Si necesitas ayuda en <strong>Ingeniería Computacional</strong>, de un
                    <strong>Abogado</strong> o de cualquier otro profesionista conoce el horario de cuando estará
                    disponible el experto para atender tus dudas
                  </p>
                  <RouterLink :to="{ name: 'schedules' }"
                    class="inline-block px-6 py-2 text-blue-600 bg-white rounded-lg transition-colors btn-general hover:bg-gray-100">
                    Ver horarios</RouterLink>
                </div>
              </div>

              <div class="p-8 text-white bg-emerald-600 rounded-xl shadow-lg cuadro-contactar-nosotros">
                <div class="contenido-cuadro-nosotros">
                  <h3 class="mb-4 text-2xl font-bold">Contactar profesionista</h3>
                  <p class="mb-6 opacity-90">Existen diversas formas de contactar al profesionista o experto en nuestras
                    diferentes <RouterLink :to="{ name: 'experts' }" class="underline enlace hover:text-emerald-200">
                      categorias</RouterLink>
                  </p>
                  <RouterLink :to="{ name: 'contact' }"
                    class="inline-block px-6 py-2 text-emerald-600 bg-white rounded-lg transition-colors btn-general hover:bg-gray-100">
                    Contactar</RouterLink>
                </div>
              </div>

              <div class="grid gap-8 cuadro-general-nosotros">
                <div class="p-8 text-white bg-purple-600 rounded-xl shadow-lg contenido-general1-nosotros">
                  <div class="contenido-cuadro-nosotros">
                    <h3 class="mb-4 text-2xl font-bold">Ver los tipos de profesionistas</h3>
                    <p class="mb-6 opacity-90">Conozca que profesionistas están a su disposición y en que áreas puede
                      ayudarle</p>
                    <RouterLink :to="{ name: 'experts' }"
                      class="inline-block px-6 py-2 text-purple-600 bg-white rounded-lg transition-colors btn-general hover:bg-gray-100">
                      Ver áreas</RouterLink>
                  </div>
                </div>

                <div class="p-8 text-white bg-rose-600 rounded-xl shadow-lg contenido-general2-nosotros">
                  <div class="contenido-cuadro-nosotros">
                    <h3 class="mb-4 text-2xl font-bold">Llenar formulario para contratar</h3>
                    <p class="mb-6 opacity-90">Contrata a un profesionalista para despejar todas tus dudas</p>
                    <RouterLink :to="{ name: 'contact' }"
                      class="inline-block px-6 py-2 text-rose-600 bg-white rounded-lg transition-colors btn-general hover:bg-gray-100">
                      Contactar</RouterLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-16 border-t border-gray-200 separador"></div>

            <!-- Medios de Comunicación -->
            <section class="medios-comunicacion">
              <h2 class="mb-12 text-3xl font-bold text-center text-gray-800">Medios de Comunicación</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="p-6 text-center bg-white rounded-xl shadow-md medios-nosotros">
                  <h3 class="mb-4 text-xl font-semibold text-blue-600">Mensajes de Texto</h3>
                  <p class="text-gray-600">Sea por medios como <strong>Messenger</strong>, <strong>WhatsApp</strong> y
                    <strong>Correo Electrónico</strong> puede comunicarse, teniendo por escrito las respuestas
                  </p>
                </div>

                <div class="p-6 text-center bg-white rounded-xl shadow-md medios-nosotros">
                  <h3 class="mb-4 text-xl font-semibold text-green-600">Llamada</h3>
                  <p class="text-gray-600">Si prefieres llevar a cabo tu consulta por llamada, nosotros te marcamos para
                    ofrecerte una asesoría más fluida y personalizada</p>
                </div>

                <div class="p-6 text-center bg-white rounded-xl shadow-md medios-nosotros">
                  <h3 class="mb-4 text-xl font-semibold text-purple-600">Videollamada</h3>
                  <p class="text-gray-600">En dado caso que se necesite o solicite el usuario videollamada, se podrá
                    realizar por medio de plataformas como <strong>Meet</strong> y <strong>Zoom</strong></p>
                </div>
              </div>
            </section>

            <div class="my-16 border-t border-gray-200 separador"></div>

            <!-- Preguntas Frecuentes -->
            <section class="dudas-nosotros">
              <div class="mb-12 text-center encabezado-dudas">
                <h3 class="text-3xl font-bold text-gray-800">Preguntas Frecuentes</h3>
              </div>

              <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div class="space-y-6">
                  <div class="p-6 bg-white rounded-xl shadow-md preguntas-nosotros">
                    <p class="mb-2 text-lg font-semibold text-gray-800 pregunta-nosotros">¿Cuál es la prueba gratis?</p>
                    <p class="text-gray-600 respuesta-nosotros">Al crear un registro de forma gratuita, por ser un
                      usuario nuevo se habilitará la opción para poder realizar una prueba de 15 minutos con nuestros
                      expertos.</p>
                  </div>

                  <div class="p-6 bg-white rounded-xl shadow-md preguntas-nosotros">
                    <p class="mb-2 text-lg font-semibold text-gray-800 pregunta-nosotros">¿Qué garantías tengo?</p>
                    <p class="text-gray-600 respuesta-nosotros">La prueba de 15 minutos te permite verificar si el
                      profesional podrá ayudarte antes de contratarlo, dando tiempo para tomar una decisión informada.
                    </p>
                  </div>
                </div>

                <div class="space-y-6">
                  <div class="p-6 bg-white rounded-xl shadow-md preguntas-nosotros">
                    <p class="mb-2 text-lg font-semibold text-gray-800 pregunta-nosotros">¿Cómo contratar al
                      profesionista?</p>
                    <p class="text-gray-600 respuesta-nosotros">Después de la prueba, complete el formulario de contacto
                      para que el profesional se comunique directamente con usted.</p>
                  </div>

                  <div class="p-6 bg-white rounded-xl shadow-md preguntas-nosotros">
                    <p class="mb-2 text-lg font-semibold text-gray-800 pregunta-nosotros">¿Medios de comunicación?</p>
                    <ul class="pl-5 list-disc text-gray-600 respuesta-nosotros">
                      <li>WhatsApp</li>
                      <li>Correo</li>
                      <li>Videollamadas</li>
                      <li>Llamadas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="mt-12 text-center centrar-texto">
                <RouterLink :to="{ name: 'help' }"
                  class="px-8 py-3 text-white bg-blue-600 rounded-lg transition-colors btn-general hover:bg-blue-700">
                  Sección de ayuda</RouterLink>
              </div>
            </section>
          </section>

          <div class="my-16 border-t border-gray-200 separador"></div>

          <!-- Categorías -->
          <div class="mt-12 mostrar-768px">
            <div class="b-categorias">
              <h2 class="mb-8 text-3xl font-bold text-center text-gray-800">Nuestras áreas</h2>
              <nav class="grid grid-cols-2 gap-4 categorias-c md:grid-cols-3 lg:grid-cols-4">
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Asesorías
                  Legales</RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Arquitecto
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Import/Export
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Contadores
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Doctores
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Gestoría
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Ing.
                  Computacional</RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Marketing
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Peritaje
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Publicidad
                </RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Servicios
                  Web</RouterLink>
                <RouterLink :to="{ name: 'experts' }"
                  class="p-4 text-center bg-white rounded-lg shadow-md transition-colors hover:bg-blue-50">Traductor
                </RouterLink>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
