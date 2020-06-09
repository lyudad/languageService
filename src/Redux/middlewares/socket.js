// import { MOUNT_CHANNELS, mountChannels } from 'Redux/actions/chat'

// import io from 'socket.io-client'
// import { chatApi } from 'Config/App'
// import {
//   inSocketTypes,
//   notificationType
// } from '../../Constants/socketEventTypes'
// import { getToken } from 'Redux/selectors/auth'

let socket

const socketMiddleware = store => next => action => {
  // const token = getToken(store.getState())
  // const candidateId = localStorage.getItem('candidate_id')

  // if (action.type === MOUNT_CHANNELS) {
  //   socket = io(`${chatApi.url}?token=${token}`)

  //   // Object.keys(inSocketTypes).forEach(typeName => {
  //   //   const type = inSocketTypes[typeName]

  //   //   socket.on(type, data => {
  //   //     next({ type: `socket/${type.toUpperCase()}`, payload: { data } })
  //   //   })
  //   // })
  //   // socket.on(`candidate_${candidateId}_notification`, data => {
  //   //   next({ type: notificationType, payload: { data } })
  //   // })

  //   return next(mountChannels())
  // }
  if (action.meta && action.meta.socket && action.meta.socket.channel) {
    if (action.meta.socket.namespace) {
      socket = socket.of(action.meta.socket.namespace)
    }
    if (action.meta.socket.room) {
      socket = socket.to(action.meta.socket.room)
    }

    next({ type: action.types.REQUEST, payload: action.payload })

    socket.emit(action.meta.socket.channel, action.payload, payload => {
      if (payload.error) {
        return next({ type: action.types.FAILURE, payload })
      }

      return next({ type: action.types.SUCCESS, payload })
    })

    return
  }

  return next(action)
}

export default socketMiddleware
