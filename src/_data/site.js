module.exports = {
  url: process.env.URL || 'https://monolito.lat',

  css: {
    main: '/css/style.css'
  },

  scripts: [
    { src: "/js/main.js", defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js", defer: true }
  ],

  typography: {
    fontStack: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
    monoStack: "'Courier New', monospace"
  },

  fonts: {
    primary: {
      name: "YourFont",
      weights: {
        light: "/fonts/Roboto-light.ttf",
        regular: "/fonts/Roboto-regular.ttf",
        medium: "/fonts/Roboto-medium.ttf",
        bold: "/fonts/Roboto-bold.ttf"
      }
    }
  }
};
