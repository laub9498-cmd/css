import RunningSlider from './components/RunningSlider/RunningSlider.jsx'
import CssFunctions from './components/CssFunctions/CssFunctions.jsx'
import ImageEffects from './components/ImageEffects/ImageEffects.jsx'
import AtRulesDemo from './components/AtRulesDemo/AtRulesDemo.jsx'
import './App.css'

function App() {
  return (
    <>
      <RunningSlider />
      <main className="content-shell">
        <CssFunctions />
        <ImageEffects />
        <AtRulesDemo />
      </main>
    </>
  )
}

export default App
