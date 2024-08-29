import { useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/chevron-compact-down.svg"

const options = [
  {
    name: 'English(US)',
    value: 'English'
  },
  {
    name: 'French(Francais)',
    value: 'French'
  },
  {
    name: 'Standard German(Deutsch)',
    value: 'German'
  },
  {
    name: 'Japanese',
    value: 'Japanese'
  },
  {
    name: 'Korean',
    value: 'Korean'
  },
  {
    name: 'Simplified Chinese',
    value: 'Chinese'
  },
  {
    name: 'Spanish(Espanol)',
    value: 'Spanish'
  },
  {
    name: 'Hindi',
    value: 'Hindi'
  }
]


const HomeFooter = () => {

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectWidth, setSelectWidth] = useState('auto');
  const selectRef = useRef(null);
  const widthRef = useRef(null);

  useEffect(() => {
    // Measure the width of the selected option text
    if (selectRef.current && widthRef.current) {
      const selectedText = options.find(option => option.value === selectedOption)?.name || '';
      widthRef.current.textContent = selectedText;
      setSelectWidth(widthRef.current.scrollWidth + 24); // Adding some space for the arrow
    }
  }, [selectedOption]);
  

  useEffect(() => {
    // Measure the width of the selected option text
    if (selectRef.current && widthRef.current) {
      const selectedText = options.find(option => option.value === selectedOption)?.name || options[0].name;
      widthRef.current.textContent = selectedText;
      setSelectWidth(widthRef.current.scrollWidth + 24); // Adding some space for the arrow
    }
  }, []);


  return (
    <div className="home-page-footer">
      <p>Pro</p>
      <p>Enterprise</p>
      <p>Playground</p>
      <p>Blog</p>
      <p>Encyclopedia</p>
      <p>Careers</p>
      <div className="select-wrapper" style={{ width: selectWidth }}>
        <select
          ref={selectRef}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="language-selector"
          name="languages-selector"
          id="home-page-footer-language-selector"
        >
          {options.map((option, index) => (
            <option className="language-option" key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="select-arrow">
          <img src={ArrowDown} alt="arrow" />
        </div>
        {/* Invisible element to measure text width */}
        <span
          ref={widthRef}
          style={{
            position: "absolute",
            visibility: "hidden",
            height: "auto",
            whiteSpace: "nowrap",
            fontSize: "16px", // Match the font size of select
          }}
        ></span>
      </div>
    </div>
  )
}

export default HomeFooter