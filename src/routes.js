import json from './assets/json/cv'

const routes = [
  {
    method: 'GET',
    url: 'person/',
    response: json.basics
  },
  {
    method: 'GET',
    url: 'work/',
    response: json.work
  },
  {
    method: 'GET',
    url: 'volunteer/',
    response: json.volunteer
  },
  {
    method: 'GET',
    url: 'education/',
    response: json.education
  },
  {
    method: 'GET',
    url: 'awards/',
    response: json.awards
  },
  {
    method: 'GET',
    url: 'publications/',
    response: json.publications
  },
  {
    method: 'GET',
    url: 'skills/',
    response: [
      'JavaScript (ES6)', 'HTML5', 'CSS3', 'PHP', 'SQL', 'C#'
    ]
  },
  {
    method: 'GET',
    url: 'tools/',
    response: json.tools
  },
  {
    method: 'GET',
    url: 'languages/',
    response: json.languages
  },
  {
    method: 'GET',
    url: 'interests/',
    response: json.interests
  },
  {
    method: 'GET',
    url: 'references/',
    response: json.references
  }
]

export default routes
