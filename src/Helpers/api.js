import request from 'superagent'
import merge from 'lodash/merge'
import isEmpty from 'lodash/isEmpty'
import { Subject } from 'rxjs'
import { api } from 'Config/App'

export const apiCall = (
  url = api.url,
  endpoint = '',
  method = 'get',
  query = {},
  headers = {}
) => {
  const subject = new Subject()
  // const HTTPMethod = method.toLowerCase()
  request[method](url + endpoint)
    [method](query)
    //   .set(headers)
    .withCredentials()
    .end((error, data) => {
      if (isEmpty(data) || data.body === null) {
        merge(data, { body: { data: [] } })
      }

      if (error) {
        subject.error({ data, error })
      } else {
        subject.next({ rawData: data, method })
        subject.complete()
      }
    })

  return subject
}
