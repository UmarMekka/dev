import game_dev from './assets/Game Dev.png'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>Welcome To My... Portfolio?</h1>
        <img className="logo" src={game_dev} alt="" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
