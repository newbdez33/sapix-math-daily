import { useState } from 'react'
import type { Question } from '@/data/questions'
import { MathFormula } from './MathFormula'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface QuestionCardProps {
  question: Question
  index: number
  showAnswer?: boolean
}

export function QuestionCard({ question, index, showAnswer = false }: QuestionCardProps) {
  const [revealed, setRevealed] = useState(showAnswer)

  return (
    <Card className="break-inside-avoid mb-6 border-2 border-dashed border-gray-300 print:border-solid">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              {index + 1}
            </span>
            <span>{question.title}</span>
          </span>
          <span className="text-sm font-normal text-muted-foreground no-print">
            {question.date}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center py-4 text-xl">
          <MathFormula formula={question.formula} />
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">答え / Answer:</span>
            {!showAnswer && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRevealed(!revealed)}
                className="no-print"
              >
                {revealed ? '隠す' : '表示'}
              </Button>
            )}
          </div>

          {(revealed || showAnswer) && (
            <div className="mt-2 space-y-2">
              <div className="flex justify-center text-xl font-bold text-primary">
                <MathFormula formula={`\\square = ${question.answer}`} />
              </div>

              {question.steps && (
                <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium text-muted-foreground">解き方 / Steps:</p>
                  {question.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-xs text-muted-foreground">{i + 1}.</span>
                      <MathFormula formula={step} display={false} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {!revealed && !showAnswer && (
            <div className="mt-2 h-12 rounded border-2 border-dashed border-gray-200 flex items-center justify-center text-muted-foreground">
              ここに答えを書いてね ✏️
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
