<template src='./Login.html' lang='html'></template>

<script>
// Importo modulo de axios para hacer peticiones http
import http from 'axios'

export default {
  // Defino nombre del componente
  name: 'Login',
  // Defino los datos iniciales del componente
  data () {
    return {
      usuario: '',
      contrasena: '',
      datos: []
    }
  },
  // Defino el método que se ejecuta al montar el componente
  mounted () {
    this.getDatos()
  },
  // Defino los métodos
  methods: {
    // Método que obtiene el token de autenticación
    getToken () {
      return http({
        method: 'POST',
        url: `${process.env.API}auth`,
        data: {
          usuario: this.usuario,
          password: this.$md5(this.contrasena)
        }
      })
        .then(response => response.data)
        .then(data => {
          localStorage.setItem('token', `JWT ${data.token}`)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // Método que obtiene los datos del usuario
    getDatos () {
      return http({
        method: 'POST',
        url: `${process.env.API}datos`,
        headers: {
          'Authorization': localStorage.getItem('token')
        },
        body: {
          usuario: this.usuario,
          password: this.$md5(this.contrasena)
        }
      })
        .then(response => response.data)
        .then(data => {
          this.datos = data
        })

        .catch(error => {
          console.log(error)
        })
    },
    // Método que muestra mensaje en pantalla
    formError () {
      document.querySelector('.modalLogin').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.modalLogin').style.display = 'none'
      }, 5000)
    },
    // Método que da acceso al usuario
    onSubmit () {
      this.getToken()
      setTimeout(() => {
        if (this.usuario === '' || this.contrasena === '') {
          this.$toasted.show('Todos los campos son obligatorios', {
            theme: 'primary',
            position: 'top-center',
            duration: 5000
          })
        } else {
          if (this.usuario === '99999999Z') {
            return http({
              method: 'POST',
              url: `${process.env.API}login`,
              data: {
                usuario: this.usuario,
                contrasena: this.$md5(this.contrasena)
              },
              headers: {
                'Authorization': localStorage.getItem('token')
              }
            })
              .then(response => response.data)
              .then(data => {
                if (data !== null) {
                  localStorage.getItem('token')
                  setTimeout(() => {
                    this.$router.push('/nutricionista')
                  }, 500)
                } else {
                  this.formError()
                }
              })
              .catch(error => {
                console.log(error)
              })
          } else {
            return http({
              method: 'POST',
              url: `${process.env.API}login`,
              data: {
                usuario: this.usuario,
                contrasena: this.$md5(this.contrasena)
              },
              headers: {
                'Authorization': localStorage.getItem('token')
              }
            })
              .then(response => response.data)
              .then(data => {
                if (data !== null) {
                  localStorage.getItem('token')
                  setTimeout(() => {
                    this.$router.push(`/pacientedatos/${data.idPaciente}`)
                  }, 500)
                } else {
                  this.formError()
                }
              })
              .catch(error => {
                console.log(error)
              })
          }
        }
      }, 1000)
    }
  }
}
</script>
