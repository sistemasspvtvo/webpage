module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: "defaults, not IE 11",  // Nota: usa comillas simples o dobles consistentes
      modules: false
    }]
  ]
};