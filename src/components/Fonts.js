const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Montserrat'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('Montserrat')

  roboto.load().then(() => {
    document.documentElement.classList.add('Montserrat')
  })
}

export default Fonts