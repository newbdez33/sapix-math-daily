import type { QuestionSet } from '@/data/questions'
import { QuestionCard } from './QuestionCard'
import { Button } from '@/components/ui/button'

interface QuestionSetViewProps {
  questionSet: QuestionSet
  showAnswers: boolean
  onBack: () => void
}

export function QuestionSetView({ questionSet, showAnswers, onBack }: QuestionSetViewProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 print:bg-white">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between no-print">
          <Button variant="ghost" onClick={onBack}>
            ← 戻る
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            🖨️ 印刷 / Print
          </Button>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {questionSet.title}
          </h1>
          {questionSet.description && (
            <p className="mt-2 text-muted-foreground">{questionSet.description}</p>
          )}
          <p className="mt-2 text-sm text-muted-foreground">
            {showAnswers ? '📝 解答付き / With Answers' : '✏️ 問題のみ / Questions Only'}
          </p>
        </div>

        <div className="space-y-6">
          {questionSet.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              showAnswer={showAnswers}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground no-print">
          <p>がんばってね！💪 デイリーサピックス復習</p>
        </div>
      </div>
    </div>
  )
}
