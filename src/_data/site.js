module.exports = {
  url: process.env.URL || 'https://sistemastvo.com',
  name: 'Sistemas TVO',
  css: {
    main: '/css/style.css',
    fonts: '/css/font.css'
  },
  scripts: [
    { src: "/js/main.js", defer: true }
  ],
  typography: {
    fontStack: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
    monoStack: "'Courier New', monospace"
  },
  fonts: {
    // Fuentes actuales: Roboto
    // TODO: reemplazar por Barlow y Barlow Condensed cuando se descarguen los .ttf
    primary: {
      name: "Roboto",
      weights: {
        light:   "/fonts/Roboto-Light.ttf",
        regular: "/fonts/Roboto-Regular.ttf",
        medium:  "/fonts/Roboto-Medium.ttf",
        bold:    "/fonts/Roboto-Bold.ttf"
      }
    },
    display: {
      // TODO: reemplazar por Barlow Condensed
      name: "Roboto",
      weights: {
        regular:   "/fonts/Roboto-Regular.ttf",
        semibold:  "/fonts/Roboto-Medium.ttf",
        bold:      "/fonts/Roboto-Bold.ttf",
        extrabold: "/fonts/Roboto-Bold.ttf"
      }
    }
  }
};
