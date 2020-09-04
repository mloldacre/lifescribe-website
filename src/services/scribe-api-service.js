import TokenService from '../services/token-service'
import config from '../config'

const ScribeApiService = {
  getScribes() {
    return fetch(`${config.API_ENDPOINT}/scribes`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getScribe(scribeId) {
    return fetch(`${config.API_ENDPOINT}/scribes/${scribeId}`, {
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
  getScribeScribbles(scribeId) {
    return fetch(`${config.API_ENDPOINT}/scribes/${scribeId}/scribbles`, {
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
  }
}

export default ScribeApiService