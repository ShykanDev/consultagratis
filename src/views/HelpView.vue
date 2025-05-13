<template>
  <MainLayout>
    <template #main>
      <section class="animate-fade-up">

        <div class="block mostrar-768px md:hidden">
          <div class="my-4 h-2 bg-gray-200 separador"></div>
        </div>
        <section class="py-12 bg-gray-100 site-header-ayuda">
          <div class="px-4 mx-auto max-w-6xl contenedor">
            <div class="text-center texto-site-ayuda">
              <h2 class="mb-4 text-3xl font-bold text-gray-800">Sección de Ayuda</h2>
              <p class="text-gray-600">Si no encuentras la solución a tu duda puedes ponerte en contacto con nosotros
                <RouterLink to="/contacto" class="text-blue-600 underline enlace hover:text-blue-800">aquí</RouterLink>
              </p>
            </div>
          </div>
        </section>

        <section class="flex flex-wrap justify-center px-4">
          <div class="treinta-0">
            <div class="contenedor">
              <p class="mb-4 text-lg text-gray-700">Tienes un contacto directo con nosotros para cualquier duda, consejo
                o reclamo</p>
              <div class="my-2 text-center centrar-texto">
                <RouterLink to="/contacto"
                  class="inline-block px-6 py-3 text-white bg-blue-600 rounded transition btn-general hover:bg-blue-700">
                  Contactar
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="p-6 bg-gray-200 rounded-lg setenta-0 fondo-gris-ayuda">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">Preguntas Frecuentes</h2>

            <div class="grid grid-cols-1 gap-4 dividir md:grid-cols-2">
              <div class="cincuenta">
                <!--Spoiler-->
                <input type="checkbox" id="spoiler" class="hidden">
                <label for="spoiler" class="block my-2 font-semibold text-blue-600 cursor-pointer hover:text-blue-600">
                  ¿Por qué se les llama expertos/profesionistas?
                </label>
                <div class="pl-4 mb-4 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Las personas a quienes pedirás apoyo, son expertos en el area que ejercen por
                    sus estudios y experiencias laborales</p>
                </div>

                <input type="checkbox" id="spoiler2" class="hidden">
                <label for="spoiler2" class="block my-2 font-semibold text-blue-600 cursor-pointer hover:text-blue-600">
                  ¿Qué costo tiene?
                </label>
                <div class="pl-4 mb-4 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">El registro no tiene costo, tendrás 15 minutos de asesoría gratuita para
                    poner a prueba o realizar una consulta a nuestros expertos, si después deseas contratarlos o tener
                    más tiempo deberás contratarlo por medio de nuestro formulario para indicarle los precios
                    dependiendo el requerimiento</p>
                </div>

                <input type="checkbox" id="spoiler3" class="hidden">
                <label for="spoiler3" class="block my-2 font-semibold text-blue-600 cursor-pointer hover:text-blue-600">
                  ¿Por qué piden mi identificación?
                </label>
                <div class="pl-4 mb-4 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Para evitar que se abuse del sistema de prueba pedimos como requerimiento una
                    identificación para verificar que el usuario es verídico y pueda contar con la asesoría gratuita</p>
                </div>
              </div>

              <div class="cincuenta">
                <input type="checkbox" id="spoiler4" class="hidden">
                <label for="spoiler4" class="block my-2 font-semibold text-blue-600 cursor-pointer hover:text-blue-600">
                  ¿Mis datos son seguros?
                </label>
                <div class="pl-4 mb-4 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Los datos que ingrese y envié son totalmente confidenciales, el experto
                    firmará un contrato de privacidad el cual obliga ejercer un compromiso ético y profesional hacia los
                    usuarios </p>
                </div>

                <input type="checkbox" id="spoiler5" class="hidden">
                <label for="spoiler5" class="block my-2 font-semibold text-blue-600 cursor-pointer hover:text-blue-600">
                  ¿Cómo contratar a un experto?
                </label>
                <div class="pl-4 mb-4 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Si usted es nuevo usuario, aproveche los 15 minutos de prueba para realizar
                    sus o su consulta, posterior a ello, una vez conociendo al experto puede enviar en el formulario sus
                    datos y en motivo poner "contratar" para que el experto se pueda comunicar con usted.</p>
                </div>

                <input type="checkbox" id="spoiler6" class="hidden">
                <label for="spoiler6" class="block my-2 font-semibold text-blue-600 cursor-pointer hover:text-blue-600">
                  ¿Cuáles son las formas de pago?
                </label>
                <div class="pl-4 mb-4 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Los medios de pago podrán ser por transferencias al número de cuenta que
                    proporcione el experto, medios digitales como PayPal, Mercado Pago, entre otros</p>
                </div>
              </div>
            </div>

          </div>
        </section>
        <div class="my-8 h-2 bg-gray-200 separador"></div>

        <section class="px-4 py-10 mx-auto max-w-6xl contenedor">
          <h2 class="mb-6 text-2xl font-bold text-gray-800">Preguntas Recientes</h2>
          <div class="grid grid-cols-1 gap-8 dividir md:grid-cols-2">
            <div class="space-y-6 dos-partes">
              <div>
                <input type="checkbox" id="spoilerz" class="hidden">
                <label for="spoilerz" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  Necesito al profesional de forma presencial ¿Se puede?
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">El profesional será quien determine la posibilidad de acudir a una reunión
                    presencial, se cuenta con medios digitales como videollamadas para hacer más directa la
                    conversación. Solo se podrá checar la posibilidad contratando al profesional.</p>
                </div>
              </div>

              <div>
                <input type="checkbox" id="spoilera" class="hidden">
                <label for="spoilera" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  Necesito realizar consultas de otros temas
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Al momento tenemos 12 categorías de profesionales que estarán dispuestos a
                    ayudarle dependiendo los horarios de los mismos. Próximamente agregaremos más expertos en diferentes
                    areas</p>
                </div>
              </div>

              <div>
                <input type="checkbox" id="spoilerb" class="hidden">
                <label for="spoilerb" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  El horario del experto no coincide con mis horarios
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">El experto tiene un horario especifico, en caso de querer realizar una
                    contratación podrá enviarnos los datos desde la sección de <RouterLink to="/contacto"
                      class="text-blue-600 underline enlace hover:text-blue-800">Contacto</RouterLink> con
                    la opción de motivo "Contratar"</p>
                </div>
              </div>

              <div>
                <input type="checkbox" id="spoilerc" class="hidden">
                <label for="spoilerc" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  ¿Puedo enviar imágenes y evidencia al experto?
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Podrá enviar diferentes archivos al experto desde su correo una vez que se
                    haya realizado el contacto con el experto </p>
                </div>
              </div>
            </div>

            <div class="space-y-6 dos-partes">
              <div>
                <input type="checkbox" id="spoilerd" class="hidden">
                <label for="spoilerd" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  ¿Cómo puedo reclamar de un experto?
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Para reclamar o realizar quejas, sugerencias o comentarios hacia cualquiera
                    de nuestros expertos podrá realizarlos desde nuestro formulario de <RouterLink to="/contacto"
                      class="text-blue-600 underline enlace hover:text-blue-800">Contacto</RouterLink>
                  </p>
                </div>
              </div>

              <div>
                <input type="checkbox" id="spoilere" class="hidden">
                <label for="spoilere" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  ¿Cómo se que estoy contratando un experto?
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Al realizar el contacto con el profesionista, el le enviará un mensaje de
                    bienvenida en el cual se presentará indicando sus aptitudes en el area</p>
                </div>
              </div>

              <div>
                <input type="checkbox" id="spoiler7" class="hidden">
                <label for="spoiler7" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  ¿Cómo pido otros 15 minutos?
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">No podrá obtener otros 15 minutos si ya ha ocupado los de prueba.</p>
                </div>
              </div>

              <div>
                <input type="checkbox" id="spoilerf" class="hidden">
                <label for="spoilerf" class="block font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                  ¿Tendría un contrato?
                </label>
                <div class="pl-4 mt-2 border-l-4 border-gray-300 spoiler">
                  <p class="text-gray-600">Al contratar un experto, se otorgaría un contrato el cual describiría el
                    trabajo a realizar los precios y tiempos de ser necesario. El contrato indicará las
                    responsabilidades y derechos de ambas partes para tener un acuerdo mutuo</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="my-8 h-2 bg-gray-200 separador"></div>
      </section>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
