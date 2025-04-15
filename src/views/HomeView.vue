<template>
   <MainLayout>
    <template #main>

      <section class="animate-fade">

  <!-- Hero Section -->
  <section class="flex flex-col items-center p-8 md:flex-row" >
    <div class="space-y-4 md:w-1/2">
      <h1 class="text-3xl font-semibold">Consulta todas tus dudas a expertos en el área</h1>
      <p>Contacta a los expertos desde diferentes medios para resolver todas tus dudas, inquietudes o tener consultas y asesorías de forma sencilla y rápida.</p>
      <p class="text-sm font-medium text-gray-600">
        Antes de contratar o pagar por un servicio profesional, indaga primero si puede realizar el trabajo.
        <span class="font-semibold text-blue-700">Tienes 15 minutos para despejar tus dudas</span>
      </p>
      <div class="flex space-x-4">
        <button class="px-4 py-2 font-semibold text-white bg-yellow-400 rounded">HORARIOS DE LOS EXPERTOS</button>
        <button class="px-4 py-2 font-semibold text-white bg-blue-800 rounded">SABER MÁS DEL SITIO</button>
      </div>
    </div>
    <div class="mt-8 md:w-1/2 md:mt-0">
      <img src="../assets/img/header.jpg" alt="People texting" class="rounded shadow-lg">
    </div>
  </section>

  <!-- Ads Section -->
  <section class="grid grid-cols-1 gap-4 p-8 md:grid-cols-3">
    <div class="p-2 text-center rounded-3xl border border-sky-900">
      <p class="text-sm text-gray-500">Publicidad</p>
      <img src="../assets/img/anuncio-empleador.png" alt="miempleador.com" class="mx-auto">
      <p class="mt-2 text-sm">Sitio para delatar, comentar e investigar situaciones laborales...</p>
    </div>
    <div class="p-2 text-center rounded-3xl border border-sky-900">
      <p class="text-sm text-gray-500">Publicidad</p>
      <img src="../assets/img/anuncio-reclamos.png" alt="misreclamos.com" class="mx-auto">
      <p class="mt-2 text-sm">¿Tiene algún reclamo? Comente sus experiencias aquí...</p>
    </div>
    <div class="p-2 text-center rounded-3xl border border-sky-900">
      <p class="text-sm text-gray-500">Publicidad</p>
      <img src="../assets/img/anuncio-arrendador.png" alt="miarrendador.com" class="mx-auto">
      <p class="mt-2 text-sm">Busca y conoce todas las experiencias al rentar un inmueble...</p>
    </div>
  </section>

  <!-- Expert Categories -->
  <section class="p-8 bg-gray-100">
    <h2 class="mb-6 text-xl font-semibold text-orange-500">Diferentes profesiones y expertos a tu disposición</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
  <!-- Marketing -->
  <div class="overflow-hidden relative col-span-2 h-64 rounded shadow">
  <img src="../assets/img/publicidad-index.jpg" class="object-cover absolute inset-0 w-full h-full brightness-75" alt="Marketing" />
  <div class="flex relative z-10 flex-col justify-end p-4 h-full text-white">
    <h3 class="text-lg font-semibold text-yellow-400">Marketing</h3>
    <p class="text-sm">¿Necesitas conocer mejor a tu consumidor?</p>
    <button class="px-3 py-2 mt-4 text-white bg-blue-800 rounded">PREGUNTA A UN EXPERTO</button>
  </div>
</div>


  <!-- Doctores -->
  <div class="overflow-hidden relative h-64 rounded shadow">
  <img src="../assets/img/doctor-index.jpg" class="object-cover absolute inset-0 w-full h-full brightness-75" alt="Marketing" />
  <div class="flex relative z-10 flex-col justify-end p-4 h-full text-white">
    <h3 class="text-lg font-semibold text-yellow-400">Marketing</h3>
    <p class="text-sm">¿Necesitas conocer mejor a tu consumidor?</p>
    <button class="px-3 py-2 mt-4 text-white bg-blue-800 rounded">PREGUNTA A UN EXPERTO</button>
  </div>
</div>

  <!-- Arquitecto -->
  <div class="overflow-hidden relative h-64 rounded shadow">
  <img src="../assets/img/arquitectura-index.jpg" class="object-cover absolute inset-0 w-full h-full brightness-75" alt="Marketing" />
  <div class="flex relative z-10 flex-col justify-end p-4 h-full text-white">
    <h3 class="text-lg font-semibold text-yellow-400">Arquitecto</h3>
    <p class="text-sm">¿Tienes dudas en el diseño de tu inmueble?</p>
    <button class="px-3 py-2 mt-4 text-white bg-blue-800 rounded">PREGUNTA A UN EXPERTO</button>
  </div>
</div>

  <!-- Contadores -->
  <div class="overflow-hidden relative h-64 rounded shadow">
  <img src="../assets/img/contador-index.jpg" class="object-cover absolute inset-0 w-full h-full brightness-75" alt="Marketing" />
  <div class="flex relative z-10 flex-col justify-end p-4 h-full text-white">
    <h3 class="text-lg font-semibold text-green-100">Contadores</h3>
    <p class="text-sm">¿Necesitas ayuda en tus finanzas?</p>
      <button class="px-3 py-2 mt-4 text-white bg-blue-800 rounded">PREGUNTA A UN EXPERTO</button>
    </div>
  </div>

  <!-- Servicios WEB -->
  <div class="overflow-hidden relative h-64 rounded shadow">
  <img src="../assets/img/web-index.jpg" class="object-cover absolute inset-0 w-full h-full brightness-75" alt="Marketing" />
  <div class="flex relative z-10 flex-col justify-end p-4 h-full text-white">
    <h3 class="text-lg font-semibold text-green-100">Servicios WEB</h3>
    <p class="text-sm">¿Necesitas ayuda con tu sitio web?</p>
    <button class="px-3 py-2 mt-4 text-white bg-blue-800 rounded">PREGUNTA A UN EXPERTO</button>
    </div>
  </div>
</div>

    <!-- Acerca del sitio -->
    <section class="px-6 py-10 space-y-8">
      <div class="space-y-6 text-center">
        <h2 class="text-2xl font-bold">ACERCA DEL SITIO:</h2>
        <div class="flex flex-col gap-8 justify-center text-left md:flex-row">
          <div>
            <h3 class="text-lg font-bold">🟢 SITIO PROFESIONAL</h3>
            <p>
              Solo profesionales. En el sitio encontrarás a expertos en
              diferentes áreas que podrán ayudarte a despejar dudas, podrán
              ofrecerte asesorías y consultas a la vez que un medio de
              comunicación cómodo y seguro.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold">📌 SITIO ÚNICO</h3>
            <p>
              El sitio ofrece una nueva forma de contratar a expertos en
              diferentes áreas. El uso es sencillo y rápido para contactar a un
              profesional en el área de Tecnologías, Salud, Leyes, Comercio y
              mucho más.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold">🏃‍♂️ SITIO DINÁMICO</h3>
            <p>
              Muchas de las formas de contacto en la actualidad disponibles
              para una comodidad mayor hacia el usuario, puede ser desde
              videollamadas, mensajería, messenger, whatsapp entre otros.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Cómo Funciona? -->
    <section class="p-6 mx-auto my-10 max-w-2xl bg-amber-400 rounded-md">
      <h2 class="mb-4 text-xl font-bold">¿CÓMO FUNCIONA?</h2>
      <p class="mb-4">
        El sitio realiza la función de comunicar y enlazar profesionales en
        diferentes áreas con usuarios para brindar asesoría y/o consultas
      </p>
      <form class="space-y-4">
        <p class="px-2 py-3 text-sm bg-white rounded font-openSans">¿Cómo se enlaza el usuario/experto?</p>
        <h3 class="text-lg font-bold text-gray-800">Con diferentes herramientas de comunicación sean via texto, llamada o videollamada podrás comunicarte con el profesional para aclarar tus dudas de forma sencilla y rápida</h3>
        <p class="px-2 py-3 text-sm bg-white rounded font-openSans">¿Tiene algún costo?</p>
        <h3 class="text-lg font-bold text-gray-800">La página tiene una pregunta de prueba con una duración máxima de 15 minutos, sea en llamada, videollamada o en texto</h3>
        <p class="px-2 py-3 text-sm bg-white rounded font-openSans">¿Qué tan segura es?</p>
        <h3 class="text-lg font-bold text-gray-800">Los expertos han firmado un contrato de confidecialidad para llevar sus casos de forma remota con la mayor seguridad y ética profesional</h3>
        <button
          type="submit"
          class="px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-800"
        >
          SABER MÁS
        </button>
      </form>
    </section>

    <!-- Imagenes ilustrativas -->
    <section class="grid grid-cols-1 gap-6 px-6 my-10 md:grid-cols-2">
      <img
        src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
        alt="Personas trabajando"
        class="w-full rounded"
      />
      <img
        src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"
        alt="Grupo colaborando"
        class="w-full rounded"
      />
    </section>

    <!-- Panel de expertos -->
    <section class="px-6 py-10 text-center bg-gray-100">
      <h2 class="mb-2 text-2xl font-bold text-amber-500">
        ÚNETE AL PANEL DE EXPERTOS
      </h2>
      <p class="mb-6">
        Llena el formulario para sacar una cita y poder conocerte
      </p>
      <div class="flex flex-col gap-4 justify-center mb-6 md:flex-row">
        <div class="px-6 py-3 bg-white rounded shadow">SEGURO</div>
        <div class="px-6 py-3 bg-white rounded shadow">FÁCIL</div>
        <div class="px-6 py-3 bg-white rounded shadow">RÁPIDO</div>
      </div>
      <button
        class="px-6 py-2 text-white bg-blue-900 rounded hover:bg-blue-800"
      >
        ¡UNIRME!
      </button>
    </section>

    <!-- Contactar Profesional -->
    <section class="flex justify-center px-6 my-10">
      <button
        class="flex gap-2 items-center px-6 py-2 text-white bg-blue-900 rounded hover:bg-blue-800"
      >
        Contactar Profesional 💬
      </button>
    </section>
  </section>

<div class="w-full">

  <!-- Sección únete -->
  <div class="flex flex-col gap-8 items-center p-8 md:flex-row">
    <img src="../assets/img/img-unirme.png" alt="Panel de expertos" class="w-full rounded shadow md:w-1/2">
    <div class="flex flex-col gap-4 md:w-1/2">
      <h2 class="text-2xl font-bold text-orange-600">ÚNETE AL PANEL DE EXPERTOS</h2>
      <p class="text-gray-700">Llena el formulario para sacar una cita y poder conocerte</p>
      <div class="flex gap-4 text-sm">
        <span class="px-4 py-2 bg-gray-200 rounded">SEGURO</span>
        <span class="px-4 py-2 bg-gray-200 rounded">FÁCIL</span>
        <span class="px-4 py-2 bg-gray-200 rounded">RÁPIDO</span>
      </div>
      <button class="px-6 py-2 mt-2 text-white bg-blue-900 rounded w-fit">¡UNIRME!</button>
    </div>
  </div>

  <!-- Categorías -->
  <div class="px-6 md:px-12">
    <h3 class="mb-6 text-xl font-semibold">NUEVAS CATEGORÍAS</h3>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="flex flex-col gap-2">
        <img src="../assets/img/comercio-index.jpg" alt="Importación" class="rounded shadow">
        <div>
          <h4 class="font-semibold">IMPORTACIÓN Y EXPORTACIÓN</h4>
          <p class="text-sm">¿Tienes dudas con aduanas?</p>
          <a href="#" class="text-sm text-rose-700 underline font-openSans">Pregunta a un experto --&gt;</a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <img src="../assets/img/peritaje-index.png" alt="Peritaje" class="rounded shadow">
        <div>
          <h4 class="font-semibold">PERITAJE PROFESIONAL</h4>
          <p class="text-sm">¿Necesitas ayuda en un área en general?</p>
          <a href="#" class="text-sm text-rose-700 underline font-openSans">Pregunta a un experto --&gt;</a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <img src="../assets/img/traductor-index.png" alt="Traductor" class="rounded shadow">
        <div>
          <h4 class="font-semibold">TRADUCTOR</h4>
          <p class="text-sm">¿Necesitas traducir de forma exacta un texto, audio o video?</p>
          <a href="#" class="text-sm text-rose-700 underline font-openSans">Pregunta a un experto --&gt;</a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <img src="../assets/img/gestoria-index.png" alt="Gestorías" class="rounded shadow">
        <div>
          <h4 class="font-semibold">GESTORÍAS</h4>
          <p class="text-sm">¿Requieres de trámites gubernamentales?</p>
          <a href="#" class="text-sm text-rose-700 underline font-openSans">Saber más --&gt;</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Botón flotante -->
  <div class="fixed bottom-4 left-4 px-4 py-2 text-sm text-white bg-blue-800 rounded shadow hover:bg-blue-900">
    Contactar Profesional
  </div>
</div>

</section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date())

const disableWeekends = (date) => {
  // 0 = domingo, 6 = sábado
  const day = date.getDay()
  return day === 0 || day === 6
}

// Función para bloquear todas las fechas excepto hoy
const disableAllExceptToday = (inputDate) => {
  const today = new Date()

  // Normalizamos ambas fechas para comparar solo día/mes/año (sin hora)
  const input = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  return input.getTime() !== current.getTime()
}
</script>

<style scoped>

</style>
