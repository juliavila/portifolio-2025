import './App.scss'
import InternacionalizationProvider from './context/internacionalizationContext'
import { BentoHome } from './Pages/BentoHome'

function App() {
  return <InternacionalizationProvider>
    <BentoHome />
  </InternacionalizationProvider>
}

export default App
