import Modal from "../modal/modal.component"
import SearchForm from "../search-form/search-form.component"
import imageSrc from "../../assets/abstract.jpg"



const SignInUpModal = ({ setIsOpen, children, showImage}) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="sign-in-up-links-and-side-image-container">
        {
          showImage && 
            <div className="sign-in-modal-image">
              <img src={imageSrc} alt="abstract-side-image" />
            </div>
        }
      <div className="sign-in-up-links">
        <div className="heading">
          {children}
        </div>

        <div className="sign-in-options">
          <div className="google-sign-in">
            <div className="google-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
              </svg>
            </div>
            <p>Continue with Google</p>
          </div>
          <div className="apple-sign-in">
            <div className="apple-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
              </svg>
            </div>
            <p>Continue with Apple</p>
          </div>
          <div className="single-sign-in">
            <div className="key-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-key" viewBox="0 0 16 16">
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>
            </div>
            <p>Single Sign-on (SAML SSO)</p>
          </div>
          <div className="sign-in-options-lines"></div>
          <div className="sign-in-with-email-container">
            <input className="sign-with-email" type="text" placeholder="Your Email" />
          </div>
          <p className="sign-in-with-email-button">Continue with Email</p>
        </div>
      </div>
      </div>
    </Modal>
    

    // <div className="add-thread-form">
    //     <SearchForm openSuggestionsBox={false}/>
    //   </div>
  )
}

export default SignInUpModal