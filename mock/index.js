import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { loadingMore, MockArray } from './data/loading.js'
export default {
  newAxios () {
    const mock = new MockAdapter(axios)
    mock.onPost('/loading').reply((config) => {
      return new Promise((resolve, reject) => {
        var data = JSON.parse(config.data)
        loadingMore(data.page, data.size, data.touch, data.loadTime)
        resolve([200, MockArray])
      })
    })
  }
}
