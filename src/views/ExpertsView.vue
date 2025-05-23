<template>
  <MainLayout>
    <template #main>
      <section class="animate-fade-up">

        <!-- Hero Section -->
        <section class="py-16 text-white bg-gradient-to-r from-blue-500 to-blue-700">
          <div class="container px-6 mx-auto text-center">
            <h1 class="mb-4 text-4xl font-bold md:text-5xl">Descubre a Nuestros Expertos</h1>
            <p class="mb-8 text-lg md:text-xl">Soluciones personalizadas y asesoramiento profesional en diversas áreas
            </p>
            <a href="#expertos"
              class="px-8 py-3 text-blue-700 bg-white rounded-full shadow-lg transition duration-300 hover:bg-gray-100">
              Ver Categorías
            </a>
          </div>
        </section>
        <!--Setting a different name for each expert-->
        <!-- Video & Sobre Nosotros -->
        <section class="py-16">
          <div class="container flex flex-col gap-12 items-center px-6 mx-auto md:flex-row">
            <div class="md:w-1/2">
              <h2 class="mb-4 text-3xl font-bold">¿Por qué elegir nuestros expertos?</h2>
              <p class="mb-6 leading-relaxed text-gray-600">
                Nuestros profesionales están comprometidos con brindarte un servicio a medida, respondiendo a tus dudas
                y ayudándote a lograr tus objetivos de manera rápida y eficiente.
              </p>
              <RouterLink :to="{ name: 'contact' }"
                class="px-6 py-2 text-white bg-blue-700 rounded-full transition duration-300 hover:bg-blue-800">
                Contáctanos
              </RouterLink>
            </div>
            <div class="md:w-1/2">
              <img src="../assets/img/llamada.jpg" alt="">
            </div>
          </div>
        </section>

        <!-- Expertos Más Consultados -->
        <section id="expertos" class="py-16 bg-white">
          <div class="container px-6 mx-auto">
            <h2 class="mb-12 text-3xl font-bold text-center">Expertos Más Consultados</h2>
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <!-- Card 1 -->
              <div class="overflow-hidden bg-gray-50 rounded-xl shadow-md transition duration-300 hover:shadow-xl">
                <img src="../assets/img/categoria-1.jpg" alt="Importación y Exportación"
                  class="object-cover w-full h-48">
                <div class="p-6">
                  <h3 class="mb-3 text-2xl font-semibold">Importación y Exportación</h3>
                  <p class="mb-4 text-gray-600">
                    Facilitamos el intercambio de bienes y servicios a nivel internacional con normativas seguras.
                  </p>
                  <RouterLink @click="setUserStore('Luis Ángel Suárez', 'Importación y Exportación', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'importacion-y-exportacion' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card 2 -->
              <div class="overflow-hidden bg-gray-50 rounded-xl shadow-md transition duration-300 hover:shadow-xl">
                <img src="../assets/img/categoria-2.jpg" alt="Asesorías Legales" class="object-cover w-full h-48">
                <div class="p-6">
                  <h3 class="mb-3 text-2xl font-semibold">Asesorías Legales</h3>
                  <p class="mb-4 text-gray-600">
                    Abogados expertos para ofrecer asesoría y representación en procesos judiciales y administrativos.
                  </p>
                  <RouterLink @click="setUserStore('Mario López Gómez', 'Asesorías Legales', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'asesorias-legales' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card 3 -->
              <div class="overflow-hidden bg-gray-50 rounded-xl shadow-md transition duration-300 hover:shadow-xl">
                <img src="../assets/img/categoria-3.jpg" alt="Médico" class="object-cover w-full h-48">
                <div class="p-6">
                  <h3 class="mb-3 text-2xl font-semibold">Médico</h3>
                  <p class="mb-4 text-gray-600">
                    Profesionales de la salud comprometidos en atender tus necesidades médicas de forma personalizada.
                  </p>
                  <RouterLink @click="setUserStore('Luis Ángel Suárez', 'Médico', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'medico' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Áreas de Especialización -->
        <section class="py-16 bg-gray-100">
          <div class="container px-6 mx-auto">
            <h2 class="mb-12 text-3xl font-bold text-center">Áreas de Especialización</h2>
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
              <!-- Card: Contador -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/calculadora.jpg" alt="Contador" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Contador</h3>
                  <p class="mb-4 text-gray-600">
                    Expertos en contabilidad para gestionar tus finanzas de forma precisa y confiable.
                  </p>
                  <RouterLink @click="setUserStore('Angela Ruiz Martinez', 'Contador', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'contador' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Arquitecto -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/arquitecto-categoria.jpg" alt="Arquitecto" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Arquitecto</h3>
                  <p class="mb-4 text-gray-600">
                    Diseño y planificación de espacios con profesionalismo y creatividad.
                  </p>
                  <RouterLink @click="setUserStore('Alberto Jimenez Castro', 'Arquitecto', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'arquitecto' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Servicios Web -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/web-categoria.jpg" alt="Servicios Web" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Servicios Web</h3>
                  <p class="mb-4 text-gray-600">
                    Desarrollo de soluciones digitales a medida para potenciar tu presencia online.
                  </p>
                  <RouterLink @click="setUserStore('Carlos Ignacio Beltrán', 'Servicios Web', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'servicios-web' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Publicidad -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/publicidad-categoria.jpg" alt="Publicidad" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Publicidad</h3>
                  <p class="mb-4 text-gray-600">
                    Estrategias creativas para difundir y potenciar la imagen de tu marca.
                  </p>
                  <RouterLink @click="setUserStore('Bryan Juarez Mendoza', 'Publicidad', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'publicidad' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Traductores -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/traductor-categoria.jpg" alt="Traductores" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Traductores</h3>
                  <p class="mb-4 text-gray-600">
                    Especialistas en comunicación multilingüe para romper barreras idiomáticas.
                  </p>
                  <RouterLink @click="setUserStore('Luis Miguel Acosta', 'Traductores', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'traductores' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Peritaje -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/peritaje-categoria.jpg" alt="Peritaje" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Peritaje</h3>
                  <p class="mb-4 text-gray-600">
                    Evaluaciones técnicas y profesionales con rigor y precisión.
                  </p>
                  <RouterLink @click="setUserStore('Roberto Gutierrez Olguín', 'Peritaje', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'peritaje' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Ingeniería en Computación -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/computacion-categoria.jpg" alt="Ingeniería en Computación"
                  class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Ingeniería en Computación</h3>
                  <p class="mb-4 text-gray-600">
                    Innovación tecnológica y desarrollo de sistemas a la vanguardia.
                  </p>
                  <RouterLink @click="setUserStore('Dana Mora Durán', 'Ingeniería en Computación', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'ingenieria-en-computacion' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Gestoría en Trámites -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/gestoria-categoria.jpg" alt="Gestoría en Trámites"
                  class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Gestoría en Trámites</h3>
                  <p class="mb-4 text-gray-600">
                    Optimiza tus gestiones administrativas con asesorías especializadas.
                  </p>
                  <RouterLink @click="setUserStore('Rodrigo Vallencia Mendoza', 'Gestoría en Trámites', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'gestoria-en-tramites' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Marketing -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/marketing-categoria.jpg" alt="Marketing" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Marketing</h3>
                  <p class="mb-4 text-gray-600">
                    Conecta con tu audiencia a través de estrategias innovadoras y efectivas.
                  </p>
                  <RouterLink @click="setUserStore('Jorge Salinas Gutierrez ', 'Marketing', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'marketing' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Abogado -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/law.jpg" alt="Abogado" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Abogado</h3>
                  <p class="mb-4 text-gray-600">
                    Conecta con un abogado especializado para recibir asesoría legal directa y resolver tus asuntos
                    jurídicos.
                  </p>
                  <RouterLink @click="setUserStore('Miguel Hernandez Campos', 'Abogado', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'abogado' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Psicología -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/psychologist.jpg" alt="Psicólogo/a" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Psicólogo/a</h3>
                  <p class="mb-4 text-gray-600">
                    Asesoría psicológica para resolver tus dudas y resolver tus problemas.
                  </p>
                  <RouterLink @click="setUserStore('Gabriel Navarro Valdez', 'Psicólogo/a', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'psicologia' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Maestro -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/teacher.jpg" alt="Maestro" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Maestro</h3>
                  <p class="mb-4 text-gray-600">
                    Asesoría educativa para resolver tus dudas y resolver tus problemas.
                  </p>
                  <RouterLink @click="setUserStore('Emilio Soto Ruíz', 'Maestro', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'maestro' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
              <!-- Card: Chef -->
              <div
                class="flex overflow-hidden flex-col bg-white rounded-xl shadow-md transition duration-300 md:flex-row hover:shadow-xl">
                <img src="../assets/img/chef.jpg" alt="Chef" class="object-cover md:w-1/3">
                <div class="p-6 md:w-2/3">
                  <h3 class="mb-2 text-2xl font-semibold">Chef</h3>
                  <p class="mb-4 text-gray-600">
                    Asesoría culinaria para resolver tus dudas y resolver tus problemas.
                  </p>
                  <RouterLink @click="setUserStore('Emilio Florez García', 'Chef', '003123')"
                    :to="{ name: 'expertInfo', params: { name: 'chef' } }"
                    class="font-medium text-blue-600 hover:underline">
                    Consultar
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call To Action -->
        <section id="contacto" class="py-16 text-white bg-gradient-to-r from-blue-600 to-blue-700">
          <div class="container px-6 mx-auto text-center">
            <h2 class="mb-4 text-3xl font-bold">¿Listo para empezar?</h2>
            <p class="mb-8 text-lg">
              Conéctate ahora y encuentra al experto que necesitas, de manera rápida y eficiente.
            </p>
            <RouterLink :to="{ name: 'contact' }"
              class="px-8 py-3 text-blue-700 bg-white rounded-full shadow-lg transition duration-300 hover:bg-gray-100">
              Empezar Contacto
            </RouterLink>
          </div>
        </section>

        <!-- Testimoniales -->
        <section class="py-16 bg-gray-50">
          <div class="container px-6 mx-auto">
            <h2 class="mb-12 text-3xl font-bold text-center">Testimoniales</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div class="p-6 bg-white rounded-xl shadow-md">
                <p class="mb-4 italic text-gray-600">
                  <i class="fas fa-quote-left"></i> La ayuda que recibí fue rápida, eficiente y totalmente adaptada a
                  mis necesidades. <i class="fas fa-quote-right"></i>
                </p>
                <p class="font-semibold text-right text-gray-700">Jorge Ahumada, Estudiante</p>
              </div>
              <div class="p-6 bg-white rounded-xl shadow-md">
                <p class="mb-4 italic text-gray-600">
                  <i class="fas fa-quote-left"></i> Gracias a la asesoría en comercio exterior pude impulsar mi negocio
                  de forma notable. <i class="fas fa-quote-right"></i>
                </p>
                <p class="font-semibold text-right text-gray-700">Carlos Montiel, Empresario</p>
              </div>
              <div class="p-6 bg-white rounded-xl shadow-md">
                <p class="mb-4 italic text-gray-600">
                  <i class="fas fa-quote-left"></i> La prueba de 15 minutos me ayudó a decidir rápidamente y con total
                  confianza. <i class="fas fa-quote-right"></i>
                </p>
                <p class="font-semibold text-right text-gray-700">Vanessa Cervantes, RRHH</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Publicidad -->
        <section class="py-16">
          <div class="container px-6 mx-auto">
            <h2 class="mb-12 text-3xl font-bold text-center">Publicidad</h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <fieldset class="p-6 rounded-xl border">
                <legend class="mb-4 text-2xl font-bold">miexpareja.net</legend>
                <p class="mb-4 text-gray-600">
                  Descubre cómo las experiencias del pasado pueden ayudarte a conocer mejor a esa persona especial.
                </p>
                <a href="http://miexpareja.net" target="_blank" rel="noopener noreferrer"
                  class="px-4 py-2 text-white bg-blue-700 rounded-full transition duration-300 hover:bg-blue-800">
                  Ir al sitio
                </a>
              </fieldset>
              <fieldset class="p-6 rounded-xl border">
                <legend class="mb-4 text-2xl font-bold">miarrendatario.com</legend>
                <p class="mb-4 text-gray-600">
                  Encuentra la propiedad perfecta conociendo de antemano a inquilinos y dueños.
                </p>
                <a href="http://miarrendatario.com" target="_blank" rel="noopener noreferrer"
                  class="px-4 py-2 text-white bg-blue-700 rounded-full transition duration-300 hover:bg-blue-800">
                  Ir al sitio
                </a>
              </fieldset>
            </div>
          </div>
        </section>

        <div class="container flex flex-col gap-3 items-center px-6 py-12 mx-auto text-white">
          <p class="mb-4">Página certificada con seguridad SSL</p>
          <img src="../assets/img/SSL-certificado.png" alt="Certificado SSL" class="mx-auto w-32">
          <RouterLink :to="{ name: 'home' }"
            class="px-4 py-2 text-white bg-blue-700 rounded-full transition duration-300 hover:bg-blue-800">
            Volver al inicio
          </RouterLink>
        </div>

      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import expertStore from '@/stores/expert';



const setUserStore = (expertName: string, expertArea: string, expertUid?: string) => {
  expertStore().setExpertName(expertName);
  expertStore().setExpertArea(expertArea);
  if (expertUid) expertStore().setExpertUid(expertUid);
}
</script>

<style scoped></style>
