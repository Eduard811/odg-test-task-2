'use strict'

function Popup() {
  const popup = document.querySelector('.b-popup')
  const openButton = document.querySelector('[data-popup-button]')
  const closeButton = document.querySelector('.b-popup__close')
  const inside = document.querySelector('.b-popup__wrapper')
  let isOpen = false

  const openOrClose = () => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    document.body.style.position = isOpen ? 'fixed' : ''
    document.body.style.width = isOpen ? '100%' : ''
    document.body.style.top = isOpen ? '0px' : ''

    setTimeout(() => {
      isOpen
        ? document.addEventListener('click', handleOutsideClick)
        : document.removeEventListener('click', handleOutsideClick)
    })
  }

  const open = () => {
    popup.classList.add('b-popup_active')
    isOpen = true
    openOrClose()
  }

  const close = () => {
    popup.classList.remove('b-popup_active')
    isOpen = false
    openOrClose()
  }

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    !path.includes(inside) && close()
  }

  openButton.addEventListener('click', open)
  closeButton.addEventListener('click', close)
}

document.addEventListener('DOMContentLoaded', () => {
  Popup()
})
