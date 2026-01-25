export interface Question {
  id: string
  title: string
  date: string
  formula: string
  answer: string
  steps?: string[]
}

export interface QuestionSet {
  id: string
  title: string
  description?: string
  questions: Question[]
}

export const questionSets: QuestionSet[] = [
  {
    id: 'q1',
    title: 'デイリー 1月24日',
    description: '計算の逆算（分数・小数の混合）',
    questions: [
      {
        id: 'q1-1',
        title: '問題1',
        date: '2025-01-24',
        formula: String.raw`\frac{5}{6} - \left\{ 3.5 \div (4.875 + \square) - \frac{1}{9} \right\} = 0.5`,
        answer: '3',
        steps: [
          String.raw`\{\} = \frac{5}{6} - 0.5 = \frac{5}{6} - \frac{3}{6} = \frac{2}{6} = \frac{1}{3}`,
          String.raw`3.5 \div (4.875 + \square) = \frac{1}{3} + \frac{1}{9} = \frac{3}{9} + \frac{1}{9} = \frac{4}{9}`,
          String.raw`4.875 + \square = 3.5 \div \frac{4}{9} = \frac{7}{2} \times \frac{9}{4} = \frac{63}{8} = 7.875`,
          String.raw`\square = 7.875 - 4.875 = 3`,
        ],
      },
    ],
  },
  {
    id: 'practice',
    title: '追加練習問題',
    description: '同じタイプの類題（計算の逆算）',
    questions: [
      {
        id: 'p1',
        title: '第1題',
        date: '2025-01-24',
        formula: String.raw`\frac{7}{12} - \left\{ 2.5 \div (3 + \square) - \frac{1}{6} \right\} = 0.25`,
        answer: '2',
        steps: [
          String.raw`\{\} = \frac{7}{12} - 0.25 = \frac{7}{12} - \frac{3}{12} = \frac{4}{12} = \frac{1}{3}`,
          String.raw`2.5 \div (3 + \square) = \frac{1}{3} + \frac{1}{6} = \frac{2}{6} + \frac{1}{6} = \frac{3}{6} = \frac{1}{2}`,
          String.raw`3 + \square = 2.5 \div \frac{1}{2} = 2.5 \times 2 = 5`,
          String.raw`\square = 5 - 3 = 2`,
        ],
      },
      {
        id: 'p2',
        title: '第2題',
        date: '2025-01-24',
        formula: String.raw`\frac{3}{4} - \left\{ 2.4 \div (3.2 + \square) - \frac{1}{12} \right\} = 0.5`,
        answer: '4',
        steps: [
          String.raw`\{\} = \frac{3}{4} - 0.5 = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}`,
          String.raw`2.4 \div (3.2 + \square) = \frac{1}{4} + \frac{1}{12} = \frac{3}{12} + \frac{1}{12} = \frac{4}{12} = \frac{1}{3}`,
          String.raw`3.2 + \square = 2.4 \div \frac{1}{3} = 2.4 \times 3 = 7.2`,
          String.raw`\square = 7.2 - 3.2 = 4`,
        ],
      },
      {
        id: 'p3',
        title: '第3題',
        date: '2025-01-24',
        formula: String.raw`\frac{11}{12} - \left\{ 1.8 \div (3.1 + \square) - \frac{1}{18} \right\} = 0.75`,
        answer: '5',
        steps: [
          String.raw`\{\} = \frac{11}{12} - 0.75 = \frac{11}{12} - \frac{9}{12} = \frac{2}{12} = \frac{1}{6}`,
          String.raw`1.8 \div (3.1 + \square) = \frac{1}{6} + \frac{1}{18} = \frac{3}{18} + \frac{1}{18} = \frac{4}{18} = \frac{2}{9}`,
          String.raw`3.1 + \square = 1.8 \div \frac{2}{9} = 1.8 \times \frac{9}{2} = 8.1`,
          String.raw`\square = 8.1 - 3.1 = 5`,
        ],
      },
      {
        id: 'p4',
        title: '第4題',
        date: '2025-01-24',
        formula: String.raw`\frac{2}{3} - \left\{ 1.5 \div (3 + \square) - \frac{1}{15} \right\} = 0.4`,
        answer: '1.5',
        steps: [
          String.raw`\{\} = \frac{2}{3} - 0.4 = \frac{2}{3} - \frac{2}{5} = \frac{10}{15} - \frac{6}{15} = \frac{4}{15}`,
          String.raw`1.5 \div (3 + \square) = \frac{4}{15} + \frac{1}{15} = \frac{5}{15} = \frac{1}{3}`,
          String.raw`3 + \square = 1.5 \div \frac{1}{3} = 1.5 \times 3 = 4.5`,
          String.raw`\square = 4.5 - 3 = 1.5`,
        ],
      },
      {
        id: 'p5',
        title: '第5題',
        date: '2025-01-24',
        formula: String.raw`\frac{5}{8} - \left\{ 4.5 \div (3 + \square) - \frac{1}{8} \right\} = 0.25`,
        answer: '6',
        steps: [
          String.raw`\{\} = \frac{5}{8} - 0.25 = \frac{5}{8} - \frac{2}{8} = \frac{3}{8}`,
          String.raw`4.5 \div (3 + \square) = \frac{3}{8} + \frac{1}{8} = \frac{4}{8} = \frac{1}{2}`,
          String.raw`3 + \square = 4.5 \div \frac{1}{2} = 4.5 \times 2 = 9`,
          String.raw`\square = 9 - 3 = 6`,
        ],
      },
    ],
  },
]
