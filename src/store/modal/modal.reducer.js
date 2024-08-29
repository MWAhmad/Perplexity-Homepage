import { MODAL_ACTION_TYPES } from "./modal.types"

const INITIAL_STATE = {
  welcomeSignIn: false,
  proSignIn: false,
  saveThreadsSignIn: false,
  tryProSearchSignIn: false,
  attachmentSignIn: false,
  initialSignIn: true,
  addThread: false,
}

const modalReducer = (state = INITIAL_STATE, action = {}) => {
  const {type, payload} = action

  switch(type){
    case MODAL_ACTION_TYPES.SET_WELCOME_SIGN_IN:
      return {...state, welcomeSignIn: payload}
    
    case MODAL_ACTION_TYPES.SET_PRO_SIGN_IN:
      return {...state, proSignIn: payload}
      
    case MODAL_ACTION_TYPES.SET_SAVE_THREADS_SIGN_IN:
      return {...state, saveThreadsSignIn: payload}

    case MODAL_ACTION_TYPES.SET_TRY_PRO_SEARCH_SIGN_IN:
      return {...state, tryProSearchSignIn: payload}

    case MODAL_ACTION_TYPES.SET_ATTACHMENT_SIGN_IN:
      return {...state, attachmentSignIn: payload}

    case MODAL_ACTION_TYPES.SET_INITIAL_SIGN_IN:
      return {...state, initialSignIn: payload}

    case MODAL_ACTION_TYPES.SET_ADD_THREAD:
      return {...state, addThread: payload}

    default:
      return state
  }
}

export default modalReducer;