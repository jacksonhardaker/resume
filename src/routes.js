const routes = [
  {
    method: 'GET',
    url: 'person/',
    response: {
      'name': 'John Doe',
      'label': 'Programmer',
      'picture': '',
      'email': 'john@gmail.com',
      'phone': '(912) 555-4321',
      'website': 'http://johndoe.com',
      'summary': 'A summary of John Doe...',
      'location': {
        'address': '2712 Broadway St',
        'postalCode': 'CA 94115',
        'city': 'San Francisco',
        'countryCode': 'US',
        'region': 'California'
      },
      'profiles': [
        {
          'network': 'Twitter',
          'username': 'john',
          'url': 'http://twitter.com/john'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: 'work/',
    response: [
      {
        'company': 'Company',
        'position': 'President',
        'website': 'http://company.com',
        'startDate': '2013-01-01',
        'endDate': '2014-01-01',
        'summary': 'Description...',
        'highlights': [
          'Started the company'
        ]
      }
    ]
  },
  {
    method: 'GET',
    url: 'volunteer/',
    response: [
      {
        'organization': 'Organization',
        'position': 'Volunteer',
        'website': 'http://organization.com/',
        'startDate': '2012-01-01',
        'endDate': '2013-01-01',
        'summary': 'Description...',
        'highlights': [
        ]
      }
    ]
  },
  {
    method: 'GET',
    url: 'education/',
    response: [
      {
        'institution': 'University',
        'area': 'Software Development',
        'studyType': 'Bachelor',
        'startDate': '2011-01-01',
        'endDate': '2013-01-01',
        'gpa': '4.0',
        'courses': [
          'DB1101 - Basic SQL'
        ]
      }
    ]
  },
  {
    method: 'GET',
    url: 'awards/',
    response: [
      {
        'title': 'Award',
        'date': '2014-11-01',
        'awarder': 'Company',
        'summary': 'There is no spoon.'
      }
    ]
  },
  {
    method: 'GET',
    url: 'publications/',
    response: [
      {
        'name': 'Publication',
        'publisher': 'Company',
        'releaseDate': '2014-10-01',
        'website': 'http://publication.com',
        'summary': 'Description...'
      }
    ]
  },
  {
    method: 'GET',
    url: 'skills/',
    response: [
      {
        'name': 'Web Development',
        'level': 'Master',
        'keywords': [
          'HTML',
          'CSS',
          'Javascript'
        ]
      }
    ]
  },
  {
    method: 'GET',
    url: 'languages/',
    response: [
      {
        'name': 'English',
        'level': 'Native speaker'
      }
    ]
  },
  {
    method: 'GET',
    url: 'interests/',
    response: [
      {
        'name': 'Wildlife',
        'keywords': [
          'Ferrets',
          'Unicorns'
        ]
      }
    ]
  },
  {
    method: 'GET',
    url: 'references/',
    response: [
      {
        'name': 'Jane Doe',
        'reference': 'Reference...'
      }
    ]
  }
]

export default routes
