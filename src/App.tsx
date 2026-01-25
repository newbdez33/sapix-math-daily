import { useState } from 'react'
import { questionSets, type QuestionSet } from '@/data/questions'
import { HomePage } from '@/components/HomePage'
import { QuestionSetView } from '@/components/QuestionSetView'

type ViewState = {
  type: 'home'
} | {
  type: 'questions'
  set: QuestionSet
  showAnswers: boolean
}

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' })

  const handleSelectSet = (set: QuestionSet, showAnswers: boolean) => {
    setView({ type: 'questions', set, showAnswers })
  }

  const handleBack = () => {
    setView({ type: 'home' })
  }

  if (view.type === 'questions') {
    return (
      <QuestionSetView
        questionSet={view.set}
        showAnswers={view.showAnswers}
        onBack={handleBack}
      />
    )
  }

  return (
    <HomePage
      questionSets={questionSets}
      onSelectSet={handleSelectSet}
    />
  )
}

export default App
