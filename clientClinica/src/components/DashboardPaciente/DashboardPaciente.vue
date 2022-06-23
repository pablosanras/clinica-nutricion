<template src="./DashboardPaciente.html" lang="html"></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'dashboardpaciente',
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
      datos: [
        {
          fecha: 'NaN',
          peso: 'NaN',
          circunferenciCadera: 'NaN',
          circunferenciaCintura: 'NaN',
          grasaCorporal: 'NaN',
          masaMagra: 'NaN',
          aguaCorporal: 'NaN',
          resistenciaOhmios: 'NaN',
          perimetroBrazo: 'NaN',
          imc: 'NaN'
        }
      ]
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getDatos()
    this.getMediciones()
  },
  // Defino los métodos
  methods: {
    // Método que obtiene los datos del paciente
    getDatos () {
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
        })

        .catch(error => {
          console.log(error)
        })
    },
    // Método que obtiene las mediciones del paciente
    getMediciones () {
      return http({
        method: 'GET',
        url: `${process.env.API}mediciones/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          if (data.length !== 0) {
            this.datos = data
          }
        })

        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>