import Vue from 'vue'

export default {
  get: () => {
    return Vue.http.get('person/')
      .then(r => {
        return r.body
      })
  }
}
