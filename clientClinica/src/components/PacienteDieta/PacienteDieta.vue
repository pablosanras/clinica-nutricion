<template src="./PacienteDieta.html" lang="html"></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'pacientedieta',
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
      dietaCompleta: {},
      mensaje: ''
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getDieta()
  },
  // Defino el método
  methods: {
    // Método que obtiene la dieta del paciente
    getDieta () {
      return http({
        method: 'GET',
        url: `${process.env.API}dieta/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          if (data.length === 0) {
            this.mensaje = 'Dieta no disponible actualmente'
          } else {
            this.dietaCompleta = data
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>