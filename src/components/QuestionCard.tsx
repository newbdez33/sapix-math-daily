import { useState, useRef } from 'react'
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
  const cardRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (!cardRef.current) return

    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const styles = Array.from(document.styleSheets)
      .map(sheet => {
        try {
          return Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n')
        } catch {
          return ''
        }
      })
      .join('\n')

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${question.title}</title>
          <style>${styles}</style>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
          <style>
            body {
              padding: 40px;
              font-family: system-ui, -apple-system, sans-serif;
              max-width: 800px;
              margin: 0 auto;
            }
            .no-print { display: none !important; }
            /* Remove card border and shadow */
            [class*="border-dashed"], [class*="border-2"] {
              border: none !important;
              box-shadow: none !important;
            }
            /* Clean header */
            [class*="CardHeader"] {
              padding-bottom: 16px;
              border-bottom: 1px solid #eee;
            }
            /* Larger formula */
            .katex { font-size: 1.3em; }
            /* Answer area */
            [class*="border-dashed"][class*="h-12"] {
              border: 2px dashed #ccc !important;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          ${cardRef.current.outerHTML}
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.onload = () => {
      printWindow.print()
      printWindow.close()
    }
  }

  return (
    <Card ref={cardRef} className="break-inside-avoid mb-6 border-2 border-dashed border-gray-300 print:border-solid">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              {index + 1}
            </span>
            <span>{question.title}</span>
          </span>
          <span className="flex items-center gap-2 no-print">
            <span className="text-sm font-normal text-muted-foreground">
              {question.date}
            </span>
            <Button variant="ghost" size="sm" onClick={handlePrint} title="Print this question">
              🖨️
            </Button>
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
            <div className="mt-2 space-y-4">
              <div className="flex justify-center text-xl font-bold text-primary">
                <MathFormula formula={`\\square = ${question.answer}`} />
              </div>

              {/* Detailed explanation (if available) */}
              {question.explanation ? (
                <div className="mt-4 space-y-4">
                  {/* Method title */}
                  <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 border border-blue-200">
                    <h4 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                      🧅 {question.explanation.method}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {question.explanation.methodDescription}
                    </p>
                  </div>

                  {/* Steps */}
                  {question.explanation.steps.map((step, i) => (
                    <div key={i} className="rounded-lg bg-muted/50 p-4 space-y-2">
                      <h5 className="font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                          {i + 1}
                        </span>
                        {step.title}
                      </h5>
                      {step.description && (
                        <p className="text-sm text-muted-foreground ml-8">
                          💡 {step.description}
                        </p>
                      )}
                      <div className="ml-8 space-y-1">
                        {step.formulas.map((formula, j) => (
                          <div key={j} className="py-1">
                            <MathFormula formula={formula} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Tips */}
                  {question.explanation.tips && (
                    <div className="rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                      <h5 className="font-bold text-yellow-700 mb-2">📝 ポイントまとめ</h5>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {question.explanation.tips.map((tip, i) => (
                          <div key={i} className="text-sm">
                            <span className="font-medium text-yellow-800">{tip.title}:</span>{' '}
                            <span className="text-gray-600">{tip.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : question.steps ? (
                /* Simple steps (fallback) */
                <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium text-muted-foreground">解き方 / Steps:</p>
                  {question.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-xs text-muted-foreground">{i + 1}.</span>
                      <MathFormula formula={step} display={false} />
                    </div>
                  ))}
                </div>
              ) : null}
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
