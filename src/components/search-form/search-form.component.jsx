import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setAttachmentSignIn, setTryProSearchSignIn } from "../../store/modal/modal.actions";
import Tooltip from '../tooltip/tooltip.component'






const SearchForm = ({ openSuggestionsBox, suggestions }) => {

  const dispatch = useDispatch();

  const [openSuggestions, setOpenSuggestions] = useState(false);

  const [inputSearch, setInputSearch] = useState("")

  const textareaRef = useRef(null);

  const updatedSuggestions = (function () {
    if (!openSuggestionsBox) return [];
    return suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputSearch.toLowerCase()))         /*The last line... */
  })()

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleFocus = () => {
    if (!openSuggestionsBox) return
    setOpenSuggestions(true);
  }

  const handleBlur = () => {
    if (!openSuggestionsBox) return
    setOpenSuggestions(false);
  }

  const handleOpenRequest = (callback) => {
    dispatch(callback(true))
  }

  useEffect(() => {
    setOpenSuggestions(false)
  }, [])


  return (
    <>
      <div className='search-form'>
        <div className="search-input-container">
          <textarea
            ref={textareaRef}
            className="search-input"
            onChange={handleChange}
            onInput={handleInput}
            onClick={handleFocus}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Ask anything..."
            name="search-input"
            id="search-input"
            autoFocus
            autoComplete="false"
          ></textarea>
        </div>
        <div className="search-options">
          <div className="search-option-modes">
            <div className="search-focus-mode">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bullseye" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
              <p>Focus</p>
              <Tooltip>Set a focus for your sources</Tooltip>
              <div className="focus-options">
                <div className="focus-option">
                  <div className="option-title-icon">
                    <div className="option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                      </svg>
                    </div>
                    <p className="option-title">Web</p>
                  </div>
                  <p className="option-text">Search across the entire internet</p>
                </div>
                <div className="focus-option">
                  <div className="option-title-icon">
                    <div className="option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                      </svg>
                    </div>
                    <p className="option-title">Academic</p>
                  </div>
                  <p className="option-text">Search for published academic papers</p>
                </div>
                <div className="focus-option">
                  <div className="option-title-icon">
                    <div className="option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-regex" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 1 1 .707.707m9.9-.707a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707M6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5-6.5a.5.5 0 0 0-1 0v2.117L8.257 5.57a.5.5 0 0 0-.514.858L9.528 7.5 7.743 8.571a.5.5 0 1 0 .514.858L10 8.383V10.5a.5.5 0 1 0 1 0V8.383l1.743 1.046a.5.5 0 0 0 .514-.858L11.472 7.5l1.785-1.071a.5.5 0 1 0-.514-.858L11 6.617z" />
                      </svg>
                    </div>
                    <p className="option-title">Math</p>
                  </div>
                  <p className="option-text">Solve equations and find numerical answers</p>
                </div>
                <div className="focus-option">
                  <div className="option-title-icon">
                    <div className="option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='currentColor' className="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </div>
                    <p className="option-title">Writing</p>
                  </div>
                  <p className="option-text">Generate text or chat without searching the web</p>
                </div>
                <div className="focus-option">
                  <div className="option-title-icon">
                    <div className="option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                      </svg>
                    </div>
                    <p className="option-title">Video</p>
                  </div>
                  <p className="option-text">Discover and watch videos</p>
                </div>
                <div className="focus-option">
                  <div className="option-title-icon">
                    <div className="option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                      </svg>
                    </div>
                    <p className="option-title">Social</p>
                  </div>
                  <p className="option-text">Search for discussions and opinions</p>
                </div>
              </div>
            </div>
            <div className="search-attachment-mode" onClick={() => handleOpenRequest(setAttachmentSignIn)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <p>Attach</p>
              <Tooltip>Attach text or PDF files. Sign in to attach files.</Tooltip>
            </div>
          </div>
          <div className="more-search-options">
            <div className="pro-search" onClick={() => handleOpenRequest(setTryProSearchSignIn)}>
              <div className="toggle-button">
                <div className="toggle-circle"></div>
              </div>
              <p>Pro</p>
              <div className="pro-hover">
                <p><span>Pro</span> Search</p>
                <p>Our most powerful search, ideal for longer answers to complex questions</p>
                <p>Learn More</p>
              </div>
            </div>
            <div className={`search ${inputSearch.length > 0 ? "active-search-button" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
          </div>
        </div>

      </div>
      <div className="search-suggestions-container">
        <div className={`search-suggestions ${(openSuggestionsBox && openSuggestions && updatedSuggestions.length > 0) ? "open-search-suggestions" : ""}`} style={{ height: `` }}>
          {

            updatedSuggestions.map((suggestion, index) => (
              <div key={index} className="suggestion">
                <p>{suggestion}</p>
                <div className="explore-suggestion">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0z" />
                  </svg>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default SearchForm;