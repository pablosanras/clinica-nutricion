<template src="./Inicio.html" lang="html"></template>

<script>
export default {
  // Defino nombre del componente
  name: 'inicio'
}
</script>

<script>
// Importo modulo para en envío de correos
import emailjs from 'emailjs-com'

export default {
  // Defino nombre del componente
  name: 'ContactUs',
  // Defino los datos iniciales del componente
  data () {
    return {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    }
  },
  // Defino los métodos
  methods: {
    // Método que muestra mensaje en pantalla
    formEnviado () {
      document.querySelector('.modalInicio').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.modalInicio').style.display = 'none'
      }, 3000)
    },
    // Método que envia el formulario
    onSubmit (e) {
      try {
        emailjs.send(
          'service_221dptk',
          'template_cixz7s6',
          {
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            mensaje: this.mensaje
          },
          'lB0lROIzjY99eCjJL'
        )
        this.formEnviado()
      } catch (error) {
        console.log({error})
      }
      this.nombre = ''
      this.email = ''
      this.telefono = ''
      this.mensaje = ''
    }
  }
}
</script>