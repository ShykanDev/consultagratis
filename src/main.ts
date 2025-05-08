import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaFlag,
  RiZhihuFill,
  BiCalendar2WeekFill,
  MdAddalert,
  FaUserCircle,
  FaIdCard,
  FaTimes,
  FaChevronDown,
  FaMinus,
  FaPlus,
  FaPaperPlane,
  FaUserMd,
  FaBriefcase,
  FaPenFancy,
  FaPhoneAlt,
  BiWhatsapp,
  MdContactsupportRound,
  MdSchedule,
  MdInfooutline,
  BiFilePerson,
  BiArrowRightCircleFill,
} from 'oh-vue-icons/icons'
addIcons(
  FaFlag,
  RiZhihuFill,
  BiCalendar2WeekFill,
  MdAddalert,
  FaUserCircle,
  FaIdCard,
  FaTimes,
  FaChevronDown,
  FaMinus,
  FaPlus,
  FaPaperPlane,
  FaUserMd,
  FaBriefcase,
  FaPenFancy,
  FaPhoneAlt,
  BiWhatsapp,
  MdContactsupportRound,
  MdSchedule,
  MdInfooutline,
  BiFilePerson,
  BiArrowRightCircleFill,
)
import 'notivue/notification.css' // Only needed if using built-in <Notification />
import 'notivue/animations.css' // Only needed if using default animations

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { createNotivue } from 'notivue'
const notivue = createNotivue()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1Lz0ciKRt-JSioyOVnKG4F-DPLVaGxRI',
  authDomain: 'consulta-gratis-en-linea.firebaseapp.com',
  projectId: 'consulta-gratis-en-linea',
  storageBucket: 'consulta-gratis-en-linea.firebasestorage.app',
  messagingSenderId: '577654296577',
  appId: '1:577654296577:web:e4a17761e88153ebacb000',
  measurementId: 'G-MWW1JDGRJ7',
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(appFirebase)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.use(notivue)
app.mount('#app')
