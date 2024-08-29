import { createSelector } from "reselect";

const selectModal = (state) => state.modal

export const selectWelcomeSignIn = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.welcomeSignIn
)

export const selectProSignIn = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.proSignIn
)

export const selectSaveThreadsSignIn = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.saveThreadsSignIn
)

export const selectTryProSearchSignIn = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.tryProSearchSignIn
)

export const selectAttachmentSignIn = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.attachmentSignIn
)

export const selectInitialSignIn = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.initialSignIn
)

export const selectAddThread = createSelector(
  [selectModal],
  (modalSlice) => modalSlice.addThread
)