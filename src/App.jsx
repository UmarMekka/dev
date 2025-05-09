import game_dev from './assets/Game Dev.png'
import linkedin from './assets/linkedin.png'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>Welcome To My... Portfolio?</h1>
        <img className="logo" src={game_dev} alt="" />
        <p>
          Sorry for all the dust and construction materials. I'm in the middle of rebuilding my portfolio site.
        </p>
      </div>
      <p>
        In the meantime, feel free to check out my LinkedIn!
      </p>
      <a href="https://www.linkedin.com/in/umar-mekkaoui/">
        <img src={linkedin} alt="linkedin icon" />
      </a>
    </>
  )
}

export default App
