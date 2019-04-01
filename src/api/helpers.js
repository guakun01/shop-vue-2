import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then(response => {
      const { erron, data } = response.data
      if (erron === ERR_OK) {
        return data
      }
    }).catch(() => {})
  }
}
