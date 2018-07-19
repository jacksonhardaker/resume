import Vue from 'vue'

export default {
  getWorkAndProjects: () => {
    return Vue.http.get('work/')
      .then(r => {
        return r.body
      })
  },
  getVolunteering: () => {
    return Vue.http.get('volunteer/')
      .then(r => {
        return r.body
      })
  },
  geEducation: () => {
    return Vue.http.get('education/')
      .then(r => {
        return r.body
      })
  },
  getAwards: () => {
    return Vue.http.get('awards/')
      .then(r => {
        return r.body
      })
  },
  getPublications: () => {
    return Vue.http.get('publications/')
      .then(r => {
        return r.body
      })
  },
  getSkills: () => {
    return Vue.http.get('skills/')
      .then(r => {
        return r.body
      })
  },
  getTools: () => {
    return Vue.http.get('tools/')
      .then(r => {
        return r.body
      })
  },
  getLanguages: () => {
    return Vue.http.get('languages/')
      .then(r => {
        return r.body
      })
  },
  getInterests: () => {
    return Vue.http.get('interests/')
      .then(r => {
        return r.body
      })
  },
  getReferences: () => {
    return Vue.http.get('references/')
      .then(r => {
        return r.body
      })
  }
}
