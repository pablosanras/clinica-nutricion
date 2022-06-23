<template src="./DashboardNutricionistaGestionarPaciente.html" lang="html"></template>


<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'dashboardnutricionistagestionarpaciente',
  // Defino la propiedad que me permite pasar el id del paciente
  props: {
    id: {
      type: String,
      required: true
    }
  },
  // Defino los datos iniciales del componente
  data () {
    return {
      detalle: {},
      datos: {}
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getDetalle()
    this.getDatos()
    this.verificarCuenta()
  },
  // Defino los métodos
  methods: {
    // Método que obtiene los datos del paciente
    getDetalle () {
      return http({
        method: 'GET',
        url: `${process.env.API}datos/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          this.detalle = data
          console.log('Detalles:' + data)
        })

        .catch(error => {
          console.log(error)
        })
    },
    // Método que obtiene las mediciones del paciente
    getDatos () {
      return http({
        method: 'GET',
        url: `${process.env.API}mediciones/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          this.datos = data
          console.log('Datos:' + data)
        })

        .catch(error => {
          console.log(error)
        })
    },
    // Método que muestra mensaje en pantalla
    formActualizado () {
      document.querySelector('.modalNutricionista').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.modalNutricionista').style.display = 'none'
      }, 3000)
    },
    // Método que crea la cuenta acceso del paciente
    crearCuenta () {
      return http({
        method: 'POST',
        url: `${process.env.API}login/nuevo`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          nombre: this.detalle.nombre,
          usuario: this.detalle.dni,
          contrasena: this.$md5(this.detalle.nombre.slice(0, 3) + this.detalle.nombre.length + this.detalle.apellidos.slice(0, 3) + this.detalle.apellidos.length),
          idPaciente: this.detalle._id
        }
      })
        .then(response => response.data)
        .then(data => {
          this.sucess = true
          this.formActualizado()
        })
    },
    // Método que verifica si el paciente ya tiene cuenta acceso
    verificarCuenta () {
      return http({
        method: 'GET',
        url: `${process.env.API}login/verificar/${this.id}`,
        data: {
          idPaciente: this.id
        },
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          if (data == null) {
            this.crearCuenta()
          }
        })
    }
  }
}
</script>