<template src='./DashboardNutricionistaNuevaDieta.html' lang='html'></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'DashboardNutricionistaNuevaDieta',
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
      lunesDesayuno: '',
      lunesAlmuerzo: '',
      lunesComida: '',
      lunesMerienda: '',
      lunesCena: '',
      martesDesayuno: '',
      martesAlmuerzo: '',
      martesComida: '',
      martesMerienda: '',
      martesCena: '',
      miercolesDesayuno: '',
      miercolesAlmuerzo: '',
      miercolesComida: '',
      miercolesMerienda: '',
      miercolesCena: '',
      juevesDesayuno: '',
      juevesAlmuerzo: '',
      juevesComida: '',
      juevesMerienda: '',
      juevesCena: '',
      viernesDesayuno: '',
      viernesAlmuerzo: '',
      viernesComida: '',
      viernesMerienda: '',
      viernesCena: '',
      sabadoDesayuno: '',
      sabadoAlmuerzo: '',
      sabadoComida: '',
      sabadoMerienda: '',
      sabadoCena: '',
      domingoDesayuno: '',
      domingoAlmuerzo: '',
      domingoComida: '',
      domingoMerienda: '',
      domingoCena: '',
      sucess: false,
      dia: ''
    }
  },
  // Defino los métodos que se ejecuta al montar el componente
  mounted () {
    this.getDieta()
    this.siguiente()
  },
  // Defino los métodos
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
          this.datos = data
        })
        .then(() => {
          this.lunesDesayuno = this.datos[0].lunesDesayuno
          this.lunesAlmuerzo = this.datos[0].lunesAlmuerzo
          this.lunesComida = this.datos[0].lunesComida
          this.lunesMerienda = this.datos[0].lunesMerienda
          this.lunesCena = this.datos[0].lunesCena
          this.martesDesayuno = this.datos[0].martesDesayuno
          this.martesAlmuerzo = this.datos[0].martesAlmuerzo
          this.martesComida = this.datos[0].martesComida
          this.martesMerienda = this.datos[0].martesMerienda
          this.martesCena = this.datos[0].martesCena
          this.miercolesDesayuno = this.datos[0].miercolesDesayuno
          this.miercolesAlmuerzo = this.datos[0].miercolesAlmuerzo
          this.miercolesComida = this.datos[0].miercolesComida
          this.miercolesMerienda = this.datos[0].miercolesMerienda
          this.miercolesCena = this.datos[0].miercolesCena
          this.juevesDesayuno = this.datos[0].juevesDesayuno
          this.juevesAlmuerzo = this.datos[0].juevesAlmuerzo
          this.juevesComida = this.datos[0].juevesComida
          this.juevesMerienda = this.datos[0].juevesMerienda
          this.juevesCena = this.datos[0].juevesCena
          this.viernesDesayuno = this.datos[0].viernesDesayuno
          this.viernesAlmuerzo = this.datos[0].viernesAlmuerzo
          this.viernesComida = this.datos[0].viernesComida
          this.viernesMerienda = this.datos[0].viernesMerienda
          this.viernesCena = this.datos[0].viernesCena
          this.sabadoDesayuno = this.datos[0].sabadoDesayuno
          this.sabadoAlmuerzo = this.datos[0].sabadoAlmuerzo
          this.sabadoComida = this.datos[0].sabadoComida
          this.sabadoMerienda = this.datos[0].sabadoMerienda
          this.sabadoCena = this.datos[0].sabadoCena
          this.domingoDesayuno = this.datos[0].domingoDesayuno
          this.domingoAlmuerzo = this.datos[0].domingoAlmuerzo
          this.domingoComida = this.datos[0].domingoComida
          this.domingoMerienda = this.datos[0].domingoMerienda
          this.domingoCena = this.datos[0].domingoCena
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
    // Método que crea la dieta del paciente
    crearDieta () {
      return http({
        method: 'POST',
        url: `${process.env.API}dieta`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          idPaciente: this.id,
          lunesDesayuno: this.lunesDesayuno,
          lunesAlmuerzo: this.lunesAlmuerzo,
          lunesComida: this.lunesComida,
          lunesMerienda: this.lunesMerienda,
          lunesCena: this.lunesCena,
          martesDesayuno: this.martesDesayuno,
          martesAlmuerzo: this.martesAlmuerzo,
          martesComida: this.martesComida,
          martesMerienda: this.martesMerienda,
          martesCena: this.martesCena,
          miercolesDesayuno: this.miercolesDesayuno,
          miercolesAlmuerzo: this.miercolesAlmuerzo,
          miercolesComida: this.miercolesComida,
          miercolesMerienda: this.miercolesMerienda,
          miercolesCena: this.miercolesCena,
          juevesDesayuno: this.juevesDesayuno,
          juevesAlmuerzo: this.juevesAlmuerzo,
          juevesComida: this.juevesComida,
          juevesMerienda: this.juevesMerienda,
          juevesCena: this.juevesCena,
          viernesDesayuno: this.viernesDesayuno,
          viernesAlmuerzo: this.viernesAlmuerzo,
          viernesComida: this.viernesComida,
          viernesMerienda: this.viernesMerienda,
          viernesCena: this.viernesCena,
          sabadoDesayuno: this.sabadoDesayuno,
          sabadoAlmuerzo: this.sabadoAlmuerzo,
          sabadoComida: this.sabadoComida,
          sabadoMerienda: this.sabadoMerienda,
          sabadoCena: this.sabadoCena,
          domingoDesayuno: this.domingoDesayuno,
          domingoAlmuerzo: this.domingoAlmuerzo,
          domingoComida: this.domingoComida,
          domingoMerienda: this.domingoMerienda,
          domingoCena: this.domingoCena
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
    },
    // Método que actualiza la dieta del paciente
    actualizarDieta () {
      return http({
        method: 'PUT',
        url: `${process.env.API}dieta/editar/${this.id}`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        data: {
          idPaciente: this.id,
          lunesDesayuno: this.lunesDesayuno,
          lunesAlmuerzo: this.lunesAlmuerzo,
          lunesComida: this.lunesComida,
          lunesMerienda: this.lunesMerienda,
          lunesCena: this.lunesCena,
          martesDesayuno: this.martesDesayuno,
          martesAlmuerzo: this.martesAlmuerzo,
          martesComida: this.martesComida,
          martesMerienda: this.martesMerienda,
          martesCena: this.martesCena,
          miercolesDesayuno: this.miercolesDesayuno,
          miercolesAlmuerzo: this.miercolesAlmuerzo,
          miercolesComida: this.miercolesComida,
          miercolesMerienda: this.miercolesMerienda,
          miercolesCena: this.miercolesCena,
          juevesDesayuno: this.juevesDesayuno,
          juevesAlmuerzo: this.juevesAlmuerzo,
          juevesComida: this.juevesComida,
          juevesMerienda: this.juevesMerienda,
          juevesCena: this.juevesCena,
          viernesDesayuno: this.viernesDesayuno,
          viernesAlmuerzo: this.viernesAlmuerzo,
          viernesComida: this.viernesComida,
          viernesMerienda: this.viernesMerienda,
          viernesCena: this.viernesCena,
          sabadoDesayuno: this.sabadoDesayuno,
          sabadoAlmuerzo: this.sabadoAlmuerzo,
          sabadoComida: this.sabadoComida,
          sabadoMerienda: this.sabadoMerienda,
          sabadoCena: this.sabadoCena,
          domingoDesayuno: this.domingoDesayuno,
          domingoAlmuerzo: this.domingoAlmuerzo,
          domingoComida: this.domingoComida,
          domingoMerienda: this.domingoMerienda,
          domingoCena: this.domingoCena
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
    },
    // Método para pasar al dia siguiente en el formulario
    siguiente (dia) {
      let diaActual = dia
      switch (diaActual) {
        case 'lunes':
          document.querySelector('#lunes').classList.remove('activar')
          document.querySelector('#lunes').classList.add('ocultar')
          document.querySelector('#martes').classList.remove('ocultar')
          document.querySelector('#martes').classList.add('activar')
          break
        case 'martes':
          document.querySelector('#martes').classList.remove('activar')
          document.querySelector('#martes').classList.add('ocultar')
          document.querySelector('#miercoles').classList.remove('ocultar')
          document.querySelector('#miercoles').classList.add('activar')
          break
        case 'miercoles':
          document.querySelector('#miercoles').classList.remove('activar')
          document.querySelector('#miercoles').classList.add('ocultar')
          document.querySelector('#jueves').classList.remove('ocultar')
          document.querySelector('#jueves').classList.add('activar')
          break
        case 'jueves':
          document.querySelector('#jueves').classList.remove('activar')
          document.querySelector('#jueves').classList.add('ocultar')
          document.querySelector('#viernes').classList.remove('ocultar')
          document.querySelector('#viernes').classList.add('activar')
          break
        case 'viernes':
          document.querySelector('#viernes').classList.remove('activar')
          document.querySelector('#viernes').classList.add('ocultar')
          document.querySelector('#sabado').classList.remove('ocultar')
          document.querySelector('#sabado').classList.add('activar')
          break
        case 'sabado':
          document.querySelector('#sabado').classList.remove('activar')
          document.querySelector('#sabado').classList.add('ocultar')
          document.querySelector('#domingo').classList.remove('ocultar')
          document.querySelector('#domingo').classList.add('activar')
          break
      }
    },
    // Método para pasar al dia anterior en el formulario
    anterior (dia) {
      let diaActual = dia
      switch (diaActual) {
        case 'martes':
          document.querySelector('#martes').classList.remove('activar')
          document.querySelector('#martes').classList.add('ocultar')
          document.querySelector('#lunes').classList.remove('ocultar')
          document.querySelector('#lunes').classList.add('activar')
          break
        case 'miercoles':
          document.querySelector('#miercoles').classList.remove('activar')
          document.querySelector('#miercoles').classList.add('ocultar')
          document.querySelector('#martes').classList.remove('ocultar')
          document.querySelector('#martes').classList.add('activar')
          break
        case 'jueves':
          document.querySelector('#jueves').classList.remove('activar')
          document.querySelector('#jueves').classList.add('ocultar')
          document.querySelector('#miercoles').classList.remove('ocultar')
          document.querySelector('#miercoles').classList.add('activar')
          break
        case 'viernes':
          document.querySelector('#viernes').classList.remove('activar')
          document.querySelector('#viernes').classList.add('ocultar')
          document.querySelector('#jueves').classList.remove('ocultar')
          document.querySelector('#jueves').classList.add('activar')
          break
        case 'sabado':
          document.querySelector('#sabado').classList.remove('activar')
          document.querySelector('#sabado').classList.add('ocultar')
          document.querySelector('#viernes').classList.remove('ocultar')
          document.querySelector('#viernes').classList.add('activar')
          break
        case 'domingo':
          document.querySelector('#domingo').classList.remove('activar')
          document.querySelector('#domingo').classList.add('ocultar')
          document.querySelector('#sabado').classList.remove('ocultar')
          document.querySelector('#sabado').classList.add('activar')
          break
      }
    },
    // Método para comprobar que a que método se llama
    onSubmit () {
      if (this.datos.length === 0) {
        this.crearDieta()
      } else {
        this.actualizarDieta()
      }
    }
  }
}
</script>