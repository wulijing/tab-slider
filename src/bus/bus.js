export default {
  install: (Vue, options) => {
    const Bus = new Vue()
    if (!window.Bus) {
      window.Bus = Bus
    }
    if (!Vue.prototype.Bus) {
      Vue.prototype.Bus = Bus
    } else {
      return 'The bus already exists!'
    }
  }
}
