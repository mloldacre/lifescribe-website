import TokenService from '../services/token-service'
import config from '../config'

const ScribeApiService = {
  getCurrentScribe() {
    return fetch(`${config.API_ENDPOINT}/scribes/currentScribe`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getScribesByUser() {
    return fetch(`${config.API_ENDPOINT}/scribes/`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getScribeScribbles() {
    return fetch(`${config.API_ENDPOINT}/scribes/scribbles/`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getScribbleById(scribbleId) {
    return fetch(`${config.API_ENDPOINT}/scribbles/${scribbleId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getScribblesForScribe(scribeId) {
    return fetch(`${config.API_ENDPOINT}/scribbles/for_scribe/${scribeId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  postScribe(userId) {
    return fetch(`${config.API_ENDPOINT}/scribes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id: userId
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },


  //TODO Modify to get media scribbles too!
  postScribble(userId, scribeId, text) {
    return fetch(`${config.API_ENDPOINT}/scribbles`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        scribe_id: scribeId,
        scribble_type: 0,
        scribble_content: text,
        user_id: userId
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteScribble(scribbleId) {
    return fetch(`${config.API_ENDPOINT}/scribbles/${scribbleId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : Promise.resolve('')
      })
  },
  
  updateScribble(scribbleId, text) {
    return fetch(`${config.API_ENDPOINT}/scribbles/${scribbleId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        scribble_content: text
      }),
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : Promise.resolve('')
      })
  }

}

export default ScribeApiService