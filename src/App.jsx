import { useState } from 'react'
import './App.scss'
import Sidebar from './routes/sidebar/sidebar.component'
import { Routes, Route } from "react-router-dom"
import SearchPage from './routes/searchPage/searchPage.component'
import Modal from './components/modal/modal.component'
import SignInUpModal from './components/sign-in-up-modal/sign-in-up-modal.component'
import SearchForm from './components/search-form/search-form.component'
import { useSelector } from 'react-redux'
import PerplexityLogoSource from "./assets/icons8-perplexity-ai.svg";
import { selectAddThread, selectAttachmentSignIn, selectInitialSignIn, selectProSignIn, selectSaveThreadsSignIn, selectTryProSearchSignIn, selectWelcomeSignIn } from './store/modal/modal.selectors'
import { setAddThread, setProSignIn, setSaveThreadsSignIn, setTryProSearchSignIn, setWelcomeSignIn, setAttachmentSignIn, setInitialSignIn } from './store/modal/modal.actions'



function App() {

  const initialSignIn = useSelector(selectInitialSignIn)
  const welcomeSignIn = useSelector(selectWelcomeSignIn)
  const proSignIn = useSelector(selectProSignIn)
  const tryProSearchSignIn = useSelector(selectTryProSearchSignIn)
  const saveThreadsSignIn = useSelector(selectSaveThreadsSignIn)
  const attachmentSignIn = useSelector(selectAttachmentSignIn)
  const addThread = useSelector(selectAddThread)

  console.log(addThread);
  

  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<SearchPage/>}/>
      </Routes>

      {
        initialSignIn && 
        <div className='sign-in-modal-container'>
          <SignInUpModal setIsOpen={setInitialSignIn}>
            <div className='modal-perplexity-logo-container'>
              <img src={PerplexityLogoSource} alt="perplexity-logo-in-modal" />
            </div>
            <p className='intial-modal-welcome-text'>Sign in or create an account</p>
            <p className='initial-modal-description'>Unlock Pro Search and Thread History</p>
          </SignInUpModal>
        </div>
      }

      {
        welcomeSignIn && 
        <div className='sign-in-modal-container'>
          <SignInUpModal setIsOpen={setWelcomeSignIn}>
            <p className='modal-welcome-text'>Welcome</p>
            <p className='modal-welcome-heading-description'>Sign in or sign up to continue</p>
          </SignInUpModal>
        </div>
      }

      {
        tryProSearchSignIn && 
        <div className='sign-in-modal-container'>
          <SignInUpModal setIsOpen={setTryProSearchSignIn}>
            <p className='modal-try-pro-search'>Try Pro Search for free</p>
            <p className='modal-welcome-heading-description'>Our most powerful search, ideal for complex questions.</p>
          </SignInUpModal>
        </div>
      }

      {
        attachmentSignIn && 
        <div className='sign-in-modal-container attachment-sign-in-modal-container'>
          <SignInUpModal setIsOpen={setAttachmentSignIn} showImage={true}>
            <p className='modal-try-pro-search'>Unlock file uploads</p>
            <p className='modal-welcome-heading-description'>Sign up to access this feature</p>
          </SignInUpModal>
        </div>
      }

      {
        proSignIn &&
        <div className='sign-in-modal-container'>
          <SignInUpModal setIsOpen={setProSignIn}>
            <p className='modal-unlock-pro'>Sign in to unlock Pro</p>
          </SignInUpModal>
        </div>
      }

      {
        saveThreadsSignIn &&
        <div className='sign-in-modal-container'>
          <SignInUpModal setIsOpen={setSaveThreadsSignIn}>
            <p className='modal-unlock-pro'>Sign in to save your threads</p>
          </SignInUpModal>
        </div>
      }

      {
        addThread &&
        <div className='add-thread-modal-container'>
          <Modal setIsOpen={setAddThread}>
            <SearchForm openSuggestionsBox={false}/>
          </Modal>
        </div>
      }

    </>
  )
}

export default App
