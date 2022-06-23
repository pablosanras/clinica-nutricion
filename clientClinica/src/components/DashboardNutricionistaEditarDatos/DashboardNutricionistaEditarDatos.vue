<template src='./DashboardNutricionistaEditarDatos.html' lang='html'></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'DashboardNutricionistaEditarDatos',
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
      datos: {},
      paciente: '',
      fecha: '',
      peso: 0,
      circunferenciCadera: 0,
      circunferenciaCintura: 0,
      grasaCorporal: 0,
      masaMagra: 0,
      aguaCorporal: 0,
      resistenciaOhmios: 0,
      perimetroBrazo: 0,
      imc: 0,
      sucess: false
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getMediciones()
  },
  // Defino los métodos
  methods: {
    // Método que obtiene las mediciones del paciente
    getMediciones () {
      return http({
        method: 'GET',
        url: `${process.env.API}mediciones/editar/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          this.datos = data
        })
        .then(() => {
          this.paciente = this.datos[0].paciente
          this.fecha = this.datos[0].fecha
          this.peso = this.datos[0].peso
          this.circunferenciCadera = this.datos[0].circunferenciCadera
          this.circunferenciaCintura = this.datos[0].circunferenciaCintura
          this.grasaCorporal = this.datos[0].grasaCorporal
          this.masaMagra = this.datos[0].masaMagra
          this.aguaCorporal = this.datos[0].aguaCorporal
          this.resistenciaOhmios = this.datos[0].resistenciaOhmios
          this.perimetroBrazo = this.datos[0].perimetroBrazo
          this.imc = this.datos[0].imc
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
    // Método que actualiza los datos del paciente
    onSubmit () {
      return http({
        method: 'PUT',
        url: `${process.env.API}mediciones/editar/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          paciente: this.datos[0].paciente,
          fecha: this.datos[0].fecha,
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
          console.log(this.datos[0].paciente)
          setTimeout(() => {
            this.$router.push('/nutricionista/' + this.datos[0].paciente)
          }, 3000)
        })
    }
  }
}
</script>