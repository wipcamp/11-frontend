//this is hard code for use axios by 1 file not dynamic hahahahah
import axios from 'axios'


const createInstance = (headers) => {
  return axios.create({
    baseURL: process.env.REACT_APP_PATH_CAMPERS,
    headers: {
      'Authorization': `Bearer `,
      'Content-Type': 'application/json'
    }
  })
}

const handleResponse = res => !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res.data.error))

const catchError = err => Promise.reject(err.message)

const api = {
  get: (path, headers = {}) => (
    createInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}

const service = {
    getScore : async ()=>{
      return await api.get('http://127.0.0.1:8002/api/test/score')
    }
}
export default service;