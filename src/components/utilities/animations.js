export default function animations(animItems = []) {
  if (animItems.length > 0) {
    const offset = el => {
      const rect = el.getBoundingClientRect(),
        scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
      return { top: rect.top + scrollTop }
    }

    const animOnScroll = () => {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index]
        const animItemHeight = animItem.offsetHeight
        const animItemOffset = offset(animItem).top
        const animStart = 4
        let animItemPoint = window.innerHeight - animItemHeight / animStart

        // иногда элемент бывает выше окна браузера
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - animItemHeight / animStart
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add('_active-anim')
        } else {
          if (!animItems[index].classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active-anim')
          }
        }
      }
    }

    window.addEventListener('scroll', animOnScroll)
    setTimeout(() => {
      animOnScroll()
    }, 300)
  }

  // if (window.matchMedia('(max-width: 993px)').matches) {
  //   animItems.forEach(item => {
  //     if (!item.classList.contains('_anim-no-hide')) {
  //       item.classList.add('_anim-no-hide')
  //     }
  //   })
  // }
}
