<template src='./CerrarSesion.html' lang='html'></template>

<script>

export default {
  // Defino nombre del componente
  name: 'CerrarSesion',
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.cerrarSesion()
  },
  // Defino los métodos
  methods: {
    // Método que cierra la sesión
    cerrarSesion () {
      localStorage.removeItem('token')
      setTimeout(() => {
        this.$router.push('/')
      }, 4000)
    }
  }
}
</script>
