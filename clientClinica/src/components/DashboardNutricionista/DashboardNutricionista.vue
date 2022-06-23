<template src="./DashboardNutricionista.html" lang="html"></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'dashboardnutricionista',
  // Defino los datos iniciales del componente
  data () {
    return {
      cards: []
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getPacientes()
  },
  // Defino los métodos
  methods: {
    // Método que obtiene los pacientes
    getPacientes () {
      return http({
        method: 'GET',
        url: `${process.env.API}datos`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          this.cards = data
        })

        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>