const popup = document.querySelector('.b-popup')
const button = document.querySelector('[data-popup-button]')

button.addEventListener('click', () => popup.classList.toggle('b-popup_active'))
