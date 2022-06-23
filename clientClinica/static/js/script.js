window.onclick = function () {
  var acc = document.getElementsByClassName('accordion')
  var i
  // Evento que añade la funcionalidad al menu de acordeon de la página dietas de paciente
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active')
      var panel = this.nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }
    })
  }
}
