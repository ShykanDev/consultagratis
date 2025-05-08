<template>
  <MainLayout>
    <template #main>
      <!-- Separador -->
      <div class="my-8 h-2 bg-gray-200 separador"></div>

      <div class="grid grid-cols-1 gap-8 px-4 mx-auto max-w-6xl dividir contenedor md:grid-cols-2">
        <!-- Columna Izquierda: Contacto directo -->
        <div class="treinta">
          <section class="p-6 bg-white rounded shadow contenedor">
            <h3 class="mb-4 text-2xl font-bold text-blue-700">Contacto directo</h3>
            <p class="mb-4 text-slate-700">¿Tiene preguntas? ¿Sugerencias? ¿Comentarios? Redacta tu mensaje.</p>

            <div class="flex items-center mb-6 whats-btn">
              <a href="https://api.whatsapp.com/send?phone=525613742001&text=Hola!%20Quiero%20saber%20más!"
                target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 text-white bg-green-500 rounded transition hover:bg-green-600">
                <v-icon name="bi-whatsapp" class="mr-2 text-white" scale="1.2" />
                Escribir por WhatsApp
              </a>
            </div>

            <p class="mb-2 text-blue-700">¿Tiene dudas?</p>
            <p class="mb-4 text-slate-700">Tenemos una sección donde ponemos las preguntas más frecuentes de los
              usuarios
              con sus respuestas.</p>
            <a class="inline-flex items-center px-6 py-2 text-white bg-blue-600 rounded transition btn-general hover:bg-blue-700"
              href="./ayuda.php">
              <v-icon name="md-contactsupport-round" class="mr-2 text-white" scale="1.2" />
              Ir a la sección de Ayuda
            </a>
          </section>
        </div>

        <!-- Columna Derecha: Formulario de contacto -->
        <div class="setenta">
          <section class="p-6 bg-gray-50 rounded shadow b-contacto contenedor">
            <form method="post" class="space-y-6 formulario" action="enviar-mensaje.php">
              <!-- Se eliminó el JS para controlar la visualización -->

              <div class="nombre">
                <label for="name" class="block mb-1 font-medium text-blue-700">Nombre:</label>
                <input
                  class="p-2 w-full rounded border border-gray-300 inputs focus:outline-none focus:ring focus:border-blue-300"
                  type="text" name="name" id="name" placeholder="Su nombre">
              </div>

              <div class="grid grid-cols-1 gap-4 dividir md:grid-cols-2">
                <div class="dos-partes correo">
                  <label for="email" class="block mb-1 font-medium text-blue-700">Correo electrónico:</label>
                  <input
                    class="p-2 w-full rounded border border-gray-300 inputs focus:outline-none focus:ring focus:border-blue-300"
                    type="email" name="email" id="email" placeholder="Correo Electrónico">
                </div>
                <div class="dos-partes telefono">
                  <label for="phone" class="block mb-1 font-medium text-blue-700">Teléfono:</label>
                  <input
                    class="p-2 w-full rounded border border-gray-300 inputs focus:outline-none focus:ring focus:border-blue-300"
                    type="tel" name="phone" id="phone" placeholder="55-55-55-55-55">
                </div>
              </div>

              <div class="motivo">
                <label for="motivo" class="block mb-1 font-medium text-blue-700">Seleccione un motivo:</label>
                <select v-model="queryType"
                  class="p-2 w-full rounded border border-gray-300 inputs focus:outline-none focus:ring focus:border-blue-300"
                  name="motivo" id="motivo">
                  <option selected disabled value="">Seleccione una opción</option>
                  <option value="contact">Contacto</option>
                  <option value="complaint">Reclamo</option>
                </select>
              </div>

              <!-- Opcional: Secciones a completar según el motivo, usando detalles para togglear -->

              <p :class="{ 'hidden': queryType !== 'hire' }">Seleccione al experto que desea contratar</p>
              <select v-model="expertSelected" :class="{ 'hidden': queryType !== 'hire' }"
                class="p-2 mt-2 w-full rounded border border-gray-300 inputs focus:outline-none focus:ring focus:border-blue-300"
                name="contratar">
                <option selected value="">Seleccione una opción</option>
                <option value="Abogado">Abogado</option>
                <option value="Arquitecto">Arquitecto</option>
                <option value="Comercio Exterior">Comercio Exterior</option>
                <option value="Contadores">Contadores</option>
                <option value="Gestorías">Gestorías</option>
                <option value="Ingeniería Computacional">Ingeniería Computacional</option>
                <option value="Marketing">Marketing</option>
                <option value="Peritaje">Peritaje</option>
                <option value="Publicidad">Publicidad</option>
                <option value="Servicio Web">Servicio Web</option>
                <option value="Traductor">Traductor</option>
              </select>

              <div class="mensaje">
                <label for="message" class="block mb-1 font-medium text-blue-700">Mensaje:</label>
                <textarea v-model="userMessage"
                  class="p-2 w-full rounded border border-gray-300 inputs focus:outline-none focus:ring focus:border-blue-300"
                  name="message" id="message" placeholder="Redacte su mensaje"></textarea>
              </div>


              <div class="btn-enviar-contacto">
                <input class="px-6 py-2 w-full text-white bg-blue-600 rounded transition btn-general hover:bg-blue-700"
                  type="submit" value="Enviar mensaje">
              </div>
            </form>
          </section>
        </div>
      </div>

      <!-- Separador final -->
      <div class="my-8 h-2 bg-gray-200 separador"></div>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { computed, ref } from 'vue';

//User type of query
const queryType = ref('');

//Expert selected
const expertSelected = ref('');

//User name
const userName = ref('');

//User email
const userEmail = ref('');

//User phone
const userPhone = ref('');

//User message
const userMessage = ref('');

//User robot
const userRobot = ref('');


</script>

<style scoped></style>
