
const SearchTopic = ({sideLogo, text}) => {
  return (
    <div className='search-topic'>
      <div className='topic-illustration'>
        <img src={sideLogo} alt="side-logo"/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default SearchTopic