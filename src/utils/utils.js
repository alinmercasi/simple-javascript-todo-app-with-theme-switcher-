export const createElement = (tag, ...classes) => {
  let element = document.createElement(tag)
  if (classes) classes.forEach(className => element.classList.add(className))
  return element
}

export const parseBool = val => val === true || val === 'true'

export const clearElement = element => {
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild)
  }
}
