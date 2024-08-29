import { createAction } from "../../utils/reducer/reducer.utils";
import { MODAL_ACTION_TYPES } from "./modal.types";

export const setWelcomeSignIn = (payload) => createAction(MODAL_ACTION_TYPES.SET_WELCOME_SIGN_IN, payload)

export const setSaveThreadsSignIn = (payload) => createAction(MODAL_ACTION_TYPES.SET_SAVE_THREADS_SIGN_IN, payload)

export const setProSignIn = (payload) => createAction(MODAL_ACTION_TYPES.SET_PRO_SIGN_IN, payload)

export const setTryProSearchSignIn = (payload) => createAction(MODAL_ACTION_TYPES.SET_TRY_PRO_SEARCH_SIGN_IN, payload)

export const setAttachmentSignIn = (payload) => createAction(MODAL_ACTION_TYPES.SET_ATTACHMENT_SIGN_IN, payload)

export const setInitialSignIn = (payload) => createAction(MODAL_ACTION_TYPES.SET_INITIAL_SIGN_IN, payload)

export const setAddThread = (payload) => createAction(MODAL_ACTION_TYPES.SET_ADD_THREAD, payload)