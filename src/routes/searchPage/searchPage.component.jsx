import SearchForm from "../../components/search-form/search-form.component";
import SearchTopic from "../../components/search-topic/search-topic.component";
import FilmLogo from "../../assets/film.svg"
import TreeLogo from "../../assets/tree.svg"
import CashStackLogo from "../../assets/cash-stack.svg"
import CalenderLogo from  "../../assets/calendar2-week.svg"
import HomeFooter from "../../components/home-footer/home-footer.component";
import FloatingIcon from "../../components/floating-icon/floating-icon.component";
import PersonArmsUp from "../../assets/person-arms-up.svg";
import Gem from "../../assets/gem.svg"
import BookMarks from "../../assets/bookmarks.svg"
import PowerUp from "../../assets/capslock.svg"
import PersonAskingForHelp from "../../assets/person-raised-hand.svg"


const suggestions = [
  "Uranus's Moons May Harbor Oceans",
  "Second Largest Diamond Found",
  "Meta Cancels Vision Pro Competitor",
  "Telegram Founder Arrested in France",
  "The Largest Protein Discovered",
  "Voting From Space"
]

const floatingMenu = [
  {
    text: "Get Started",
    icon: PersonArmsUp
  },
  {
    text: "What is Pro Search?",
    icon: Gem
  },
  {
    text: "Help & FAQs",
    icon: PersonAskingForHelp
  },
  {
    text: "Keyboard Shortcuts",
    icon: BookMarks
  },
  {
    text: "Perplexity Pro",
    icon: PowerUp
  },
]

const SearchPage = () => {

  return (
    <div className='search-page'>
      <div className='search-heading'>
        <p>Where Knowledge Begins</p>
      </div>

      <div className="search-form-container">
        <SearchForm openSuggestionsBox={true} suggestions={suggestions}/>
      </div>

      <div className="suggested-search-topics">
        <div className="row-1">
          <SearchTopic sideLogo={FilmLogo} text={"Most popular Youtube creators in 2024"}/>
          <SearchTopic sideLogo={CalenderLogo} text={"Upcoming tech conferences"}/>
        </div>
        <div className="row-2">
          <SearchTopic sideLogo={CashStackLogo} text={"What is Adobe’s revenue for 2023?"}/>
          <SearchTopic sideLogo={TreeLogo} text={"World's greatest hikes"}/>
        </div>
      </div>

      <div className="home-page-footer-container">
        <HomeFooter/>
      </div>

      <FloatingIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
        </svg>
        <div className="floating-menu">
          {
            floatingMenu.map((item, index) =>
              <div key={index} className="menu-item">
                <div className="item-icon">
                  <img src={item.icon} alt={`menu-item${index}`} />
                </div>
                <p>{item.text}</p>
              </div>
            )
          }
          <p className="bold-item">Terms of Service</p>
          <p className="bold-item">Privacy Policy</p>
        </div>
      </FloatingIcon>
    </div>
  )
}

export default SearchPage;