export default function scrollTo(elementId) {
  const element = document.getElementById(elementId)
  const navBar = document.querySelector('header')
  const scrollValue =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    navBar.offsetHeight

  window.scrollTo({
    top: scrollValue,
    behavior: 'smooth',
  })
}
