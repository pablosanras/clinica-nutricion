<template src='./DashboardNutricionistaNuevosDatos.html' lang='html'></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'DashboardNutricionistaNuevosDatos',
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
      datos: this.id,
      paciente: '',
      peso: '',
      circunferenciCadera: '',
      circunferenciaCintura: '',
      grasaCorporal: '',
      masaMagra: '',
      aguaCorporal: '',
      resistenciaOhmios: '',
      perimetroBrazo: '',
      imc: '',
      sucess: false
    }
  },
  // Defino los métodos
  methods: {
    // Método que muestra mensaje en pantalla
    formActualizado () {
      document.querySelector('.modalNutricionista').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.modalNutricionista').style.display = 'none'
      }, 3000)
    },
    // Método que añade una nueva medición
    onSubmit () {
      return http({
        method: 'POST',
        url: `${process.env.API}mediciones`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          paciente: this.id,
          fecha: new Date().toLocaleDateString(),
          peso: this.peso,
          circunferenciCadera: this.circunferenciCadera,
          circunferenciaCintura: this.circunferenciaCintura,
          grasaCorporal: this.grasaCorporal,
          masaMagra: this.masaMagra,
          aguaCorporal: this.aguaCorporal,
          resistenciaOhmios: this.resistenciaOhmios,
          perimetroBrazo: this.perimetroBrazo,
          imc: this.imc
        }
      })
        .then(response => response.data)
        .then(data => {
          this.sucess = true
          this.formActualizado()
          setTimeout(() => {
            this.$router.push('/nutricionista/' + this.id)
          }, 3000)
        })
    }
  }
}
</script>