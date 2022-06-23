// Importo módulos necesarios
import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks'

// PARTE PUBLICA
import Home from '@/components/Home'
import Login from '@/components/Login/Login'

// PARTE PRIVADA: NUTRICIONISTA
import DashboardNutricionista from '@/components/DashboardNutricionista/DashboardNutricionista'
import DashboardNutricionistaGestionarPaciente from '@/components/DashboardNutricionistaGestionarPaciente/DashboardNutricionistaGestionarPaciente'
import DashboardNutricionistaNuevosDatos from '@/components/DashboardNutricionistaNuevosDatos/DashboardNutricionistaNuevosDatos'
import DashboardNutricionistaEditarDatos from '@/components/DashboardNutricionistaEditarDatos/DashboardNutricionistaEditarDatos'
import DashboardNutricionistaNuevoPaciente from '@/components/DashboardNutricionistaNuevoPaciente/DashboardNutricionistaNuevoPaciente'
import DashboardNutricionistaEditarPaciente from '@/components/DashboardNutricionistaEditarPaciente/DashboardNutricionistaEditarPaciente'
import DashboardNutricionistaNuevaDieta from '@/components/DashboardNutricionistaNuevaDieta/DashboardNutricionistaNuevaDieta'

// PARTE PRIVADA: PACIENTE
import DashboardPaciente from '@/components/DashboardPaciente/DashboardPaciente'
import PacienteDieta from '@/components/PacienteDieta/PacienteDieta'

import CerrarSesion from '@/components/CerrarSesion/CerrarSesion'
import NotFound from '@/components/NotFound/NotFound'

Vue.use(Router)

// Rutas de la aplicación
const ROUTER = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/nutricionista',
      name: 'dashboardnutricionista',
      component: DashboardNutricionista,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/nutricionista/:id',
      name: 'dashboardnutricionistagestionarpaciente',
      component: DashboardNutricionistaGestionarPaciente,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/nutricionista/nuevosdatos/:id',
      name: 'dashboardnutricionistanuevosdatos',
      component: DashboardNutricionistaNuevosDatos,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/nutricionista/editardatos/:id',
      name: 'dashboardnutricionistaeditardatos',
      component: DashboardNutricionistaEditarDatos,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/nutricionista/nuevopaciente',
      name: 'dashboardnutricionistanuevopaciente',
      component: DashboardNutricionistaNuevoPaciente,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/nutricionista/editarpaciente/:id',
      name: 'dashboardnutricionistaeditarpaciente',
      component: DashboardNutricionistaEditarPaciente,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/nutricionista/nuevadieta/:id',
      name: 'dashboardnutricionistanuevadieta',
      component: DashboardNutricionistaNuevaDieta,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/pacientedatos/:id',
      name: 'dashboardpaciente',
      component: DashboardPaciente,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/pacientedieta/:id',
      name: 'pacientedieta',
      component: PacienteDieta,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/cerrarsesion',
      name: 'cerrarsesion',
      component: CerrarSesion,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

// Hooks de la aplicación
hooks(ROUTER)

// Exportar la información de rutas de la aplicación
export default ROUTER
