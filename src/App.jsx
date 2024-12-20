import './App.css'
import { ResultCard } from './components/ResultCard/ResultCard'

import { SummaryCard } from './components/SummaryCard/SummaryCard'


function App() {

  return (
    <article className='main-content'> 
        <ResultCard/>
        <SummaryCard/>
    </article>
  )
}

export default App
