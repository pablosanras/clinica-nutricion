<template src='./DashboardNutricionistaEditarPaciente.html' lang='html'></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'DashboardNutricionistaEditarPaciente',
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
      dni: '',
      nombre: '',
      apellidos: '',
      fechaNacimiento: '',
      sexo: '',
      telefono: '',
      direccion: '',
      correo: '',
      altura: '',
      pesoIdeal: '',
      actividadFisica: '',
      obesidad: '',
      diabetes: '',
      hipertension: '',
      cardiopatias: '',
      cancer: '',
      alergias: '',
      hepatitis: '',
      hipotiroidismo: '',
      hipertiroidismo: '',
      observaciones: '',
      sucess: false
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getDatos()
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
          this.datos = data
        })
        .then(() => {
          this.dni = this.datos.dni
          this.nombre = this.datos.nombre
          this.apellidos = this.datos.apellidos
          this.fechaNacimiento = this.datos.fechaNacimiento
          this.sexo = this.datos.sexo
          this.telefono = this.datos.telefono
          this.direccion = this.datos.direccion
          this.correo = this.datos.correo
          this.altura = this.datos.altura
          this.pesoIdeal = this.datos.pesoIdeal
          this.actividadFisica = this.datos.actividadFisica
          this.obesidad = this.datos.enfermedades[0].obesidad
          this.diabetes = this.datos.enfermedades[0].diabetes
          this.hipertension = this.datos.enfermedades[0].hipertension
          this.cardiopatias = this.datos.enfermedades[0].cardiopatias
          this.cancer = this.datos.enfermedades[0].cancer
          this.alergias = this.datos.enfermedades[0].alergias
          this.hepatitis = this.datos.enfermedades[0].hepatitis
          this.hipotiroidismo = this.datos.enfermedades[0].hipotiroidismo
          this.hipertiroidismo = this.datos.enfermedades[0].hipertiroidismo
          this.observaciones = this.datos.observaciones
        })
        .catch(error => {
          console.log(error)
        })
    },
    // Método que muestra mensaje la edición de datos
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
        url: `${process.env.API}datos/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          dni: this.dni,
          nombre: this.nombre,
          apellidos: this.apellidos,
          fechaNacimiento: this.fechaNacimiento,
          sexo: this.sexo,
          telefono: this.telefono,
          direccion: this.direccion,
          correo: this.correo,
          altura: this.altura,
          pesoIdeal: this.pesoIdeal,
          actividadFisica: this.actividadFisica,
          obesidad: this.obesidad,
          diabetes: this.diabetes,
          hipertension: this.hipertension,
          cardiopatias: this.cardiopatias,
          cancer: this.cancer,
          alergias: this.alergias,
          hepatitis: this.hepatitis,
          hipotiroidismo: this.hipotiroidismo,
          hipertiroidismo: this.hipertiroidismo,
          observaciones: this.observaciones
        }
      })
        .then(response => response.data)
        .then(data => {
          this.sucess = true
          this.formActualizado()
          setTimeout(() => {
            this.$router.push('/nutricionista/' + this.datos._id)
          }, 3000)
        })
    }
  }
}
</script>
