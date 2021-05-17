const popup = document.querySelector('.b-popup')
const button = document.querySelector('[data-popup-button]')

button.addEventListener('click', () => {
  popup.classList.toggle('b-popup_active')
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = '0px'
})
