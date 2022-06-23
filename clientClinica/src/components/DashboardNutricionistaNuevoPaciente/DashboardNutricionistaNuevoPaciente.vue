<template src='./DashboardNutricionistaNuevoPaciente.html' lang='html'></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'DashboardNutricionistaNuevoPaciente',
  // Defino los datos iniciales del componente
  data () {
    return {
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
  // Defino los métodos
  methods: {
    // Método que valida que el DNI no existe
    validarDNI (dni) {
      return http({
        method: 'GET',
        url: `${process.env.API}datos/validarDNI/${dni}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          if (data !== null) {
            document.querySelector('.input span').style.display = 'block'
          } else {
            document.querySelector('.input span').style.display = 'none'
            this.sucess = true
          }
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
    // Método que muestra mensaje de error
    formError () {
      document.querySelector('.modalError').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.modalError').style.display = 'none'
      }, 5000)
    },
    // Método que crea un nuevo paciente
    onSubmit () {
      if (this.sucess) {
        return http({
          method: 'POST',
          url: `${process.env.API}datos`,
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
              this.$router.push('/nutricionista/')
            }, 3000)
          })
      } else {
        this.formError()
      }
    }
  }
}
</script>
