import type { QuestionSet } from '@/data/questions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface HomePageProps {
  questionSets: QuestionSet[]
  onSelectSet: (set: QuestionSet, showAnswers: boolean) => void
}

export function HomePage({ questionSets, onSelectSet }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            🧮 SAPIX算数デイリー
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Daily Math Practice
          </p>
          <p className="mt-2 text-muted-foreground">
            デイリーサピックスの復習問題集
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            問題を選んで、印刷して練習しよう！
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {questionSets.map((set) => (
            <Card
              key={set.id}
              className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg"
            >
              <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100">
                <CardTitle className="text-xl">{set.title}</CardTitle>
                {set.description && (
                  <CardDescription>{set.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-1">
                    📝 {set.questions.length} 問
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => onSelectSet(set, false)}
                  >
                    ✏️ 問題のみ
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => onSelectSet(set, true)}
                  >
                    📖 解答付き
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>印刷して、紙と鉛筆で解いてみよう！🖨️✏️</p>
          <p className="mt-1 text-xs">SAPIX デイリーサピックス 復習用</p>
        </div>
      </div>
    </div>
  )
}
