export interface ExplanationStep {
  title: string
  description?: string
  formulas: string[]
}

export interface Question {
  id: string
  title: string
  date: string
  formula: string
  answer: string
  steps?: string[]
  explanation?: {
    method: string
    methodDescription: string
    steps: ExplanationStep[]
    tips?: { title: string; description: string }[]
  }
}

export interface QuestionSet {
  id: string
  title: string
  description?: string
  questions: Question[]
}

export const questionSets: QuestionSet[] = [
  {
    id: 'irreducible-fractions',
    title: '既約分数（やくぶんできない分数）',
    description: '分母と分子が仲良しじゃない分数を見つけよう！',
    questions: [
      {
        id: 'ir1',
        title: '問題1（基本）',
        date: '2025-01-27',
        formula: String.raw`\frac{1}{96}, \frac{2}{96}, \frac{3}{96}, \cdots, \frac{94}{96}, \frac{95}{96}, \frac{96}{96} のうち、約分できない分数は\fbox{　}個、その和は\fbox{　}`,
        answer: '32個、和は16',
        explanation: {
          method: '仲間はずれ探しゲーム',
          methodDescription: '96と「仲良し」（共通の約数がある）な数を除外して、「仲間はずれ」を探そう！',
          steps: [
            {
              title: 'ステップ1：96を分解しよう',
              description: '96は2と3の仲間だけでできている！',
              formulas: [
                String.raw`96 = 2 \times 2 \times 2 \times 2 \times 2 \times 3 = 2^5 \times 3`,
                String.raw`つまり、96は「2の仲間」と「3の仲間」だけ！`,
              ],
            },
            {
              title: 'ステップ2：約分できない条件は？',
              description: '分子が2でも3でも割れない数だけが「仲間はずれ」＝約分できない！',
              formulas: [
                String.raw`約分できない = 2でも3でも割り切れない数`,
                String.raw`1〜6の中で、2でも3でも割れないのは...`,
                String.raw`1 ✓, 2 ✗(2で割れる), 3 ✗(3で割れる), 4 ✗(2で割れる), 5 ✓, 6 ✗(両方で割れる)`,
                String.raw`答え：1と5の\textbf{2個}だけ！`,
              ],
            },
            {
              title: 'ステップ3：全部で何個？',
              description: '6個中2個のパターンが繰り返される！',
              formulas: [
                String.raw`96 \div 6 = 16（グループが16個）`,
                String.raw`各グループに2個ずつ仲間はずれがいるから...`,
                String.raw`2 \times 16 = \textbf{32個}`,
              ],
            },
            {
              title: 'ステップ4：和を求める（ペア作戦！）',
              description: '不思議なことに、仲間はずれ同士はペアで1になる！',
              formulas: [
                String.raw`\frac{1}{96} + \frac{95}{96} = \frac{96}{96} = 1`,
                String.raw`\frac{5}{96} + \frac{91}{96} = \frac{96}{96} = 1`,
                String.raw`32個の分数 = 16ペア`,
                String.raw`和 = 1 \times 16 = \textbf{16}`,
              ],
            },
          ],
          tips: [
            { title: '因数分解', description: '分母を素因数分解して「仲間」を見つける' },
            { title: 'パターン発見', description: '6個ごとに同じパターンが繰り返す' },
            { title: 'ペアの魔法', description: 'n/96 と (96-n)/96 は足すと1になる' },
            { title: 'オイラー関数', description: 'φ(96) = 96×(1-1/2)×(1-1/3) = 32' },
          ],
        },
      },
      {
        id: 'ir2',
        title: '問題2（練習）',
        date: '2025-01-27',
        formula: String.raw`\frac{1}{24}, \frac{2}{24}, \frac{3}{24}, \cdots, \frac{23}{24}, \frac{24}{24} のうち、約分できない分数は\fbox{　}個、その和は\fbox{　}`,
        answer: '8個、和は4',
        steps: [
          String.raw`24 = 2^3 \times 3 より、2でも3でも割れない数を探す`,
          String.raw`1〜6で条件を満たすのは1, 5の2個`,
          String.raw`24 \div 6 = 4 より、2 \times 4 = 8個`,
          String.raw`和 = 8 \div 2 = 4（ペアが4組で各1）`,
        ],
      },
      {
        id: 'ir3',
        title: '問題3（練習）',
        date: '2025-01-27',
        formula: String.raw`\frac{1}{48}, \frac{2}{48}, \frac{3}{48}, \cdots, \frac{47}{48}, \frac{48}{48} のうち、約分できない分数は\fbox{　}個、その和は\fbox{　}`,
        answer: '16個、和は8',
        steps: [
          String.raw`48 = 2^4 \times 3 より、2でも3でも割れない数を探す`,
          String.raw`1〜6で条件を満たすのは1, 5の2個`,
          String.raw`48 \div 6 = 8 より、2 \times 8 = 16個`,
          String.raw`和 = 16 \div 2 = 8（ペアが8組で各1）`,
        ],
      },
      {
        id: 'ir4',
        title: '問題4（応用）',
        date: '2025-01-27',
        formula: String.raw`\frac{1}{30}, \frac{2}{30}, \frac{3}{30}, \cdots, \frac{29}{30}, \frac{30}{30} のうち、約分できない分数は\fbox{　}個、その和は\fbox{　}`,
        answer: '8個、和は4',
        steps: [
          String.raw`30 = 2 \times 3 \times 5 より、2でも3でも5でも割れない数を探す`,
          String.raw`1〜30で条件を満たすのは: 1, 7, 11, 13, 17, 19, 23, 29の8個`,
          String.raw`（2, 3, 5の最小公倍数30で1周期）`,
          String.raw`和 = (1+29)/30 + (7+23)/30 + (11+19)/30 + (13+17)/30 = 4`,
        ],
      },
      {
        id: 'ir5',
        title: '問題5（チャレンジ）',
        date: '2025-01-27',
        formula: String.raw`\frac{1}{60}, \frac{2}{60}, \frac{3}{60}, \cdots, \frac{59}{60}, \frac{60}{60} のうち、約分できない分数は\fbox{　}個、その和は\fbox{　}`,
        answer: '16個、和は8',
        steps: [
          String.raw`60 = 2^2 \times 3 \times 5 より、2でも3でも5でも割れない数を探す`,
          String.raw`1〜30で条件を満たすのは8個（問題4と同じパターン）`,
          String.raw`60 \div 30 = 2 より、8 \times 2 = 16個`,
          String.raw`和 = 16 \div 2 = 8（ペアが8組で各1）`,
        ],
      },
    ],
  },
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
        explanation: {
          method: 'たまねぎの皮むき法',
          methodDescription: 'この問題は「たまねぎ」のようになっています。外側から順番に皮をむいていくように、一つずつ計算していきましょう！',
          steps: [
            {
              title: 'ステップ1：一番外側の { } を求める',
              description: '「5/6 から何かを引くと 0.5 になる」ということは...',
              formulas: [
                String.raw`\frac{5}{6} - \{なにか\} = 0.5`,
                String.raw`\{なにか\} = \frac{5}{6} - 0.5`,
                String.raw`0.5 = \frac{1}{2} = \frac{3}{6}`,
                String.raw`\frac{5}{6} - \frac{3}{6} = \frac{2}{6} = \frac{1}{3}`,
                String.raw`\{なにか\} = \frac{1}{3}`,
              ],
            },
            {
              title: 'ステップ2：割り算の部分を求める',
              description: '「何かから 1/9 を引くと 1/3 になる」ということは...',
              formulas: [
                String.raw`3.5 \div (なにか) - \frac{1}{9} = \frac{1}{3}`,
                String.raw`3.5 \div (なにか) = \frac{1}{3} + \frac{1}{9}`,
                String.raw`\frac{1}{3} = \frac{3}{9}`,
                String.raw`\frac{3}{9} + \frac{1}{9} = \frac{4}{9}`,
                String.raw`3.5 \div (なにか) = \frac{4}{9}`,
              ],
            },
            {
              title: 'ステップ3：( ) の中を求める',
              description: '「3.5 を何かで割ると 4/9 になる」→ 分数で割るときは、ひっくり返してかける！',
              formulas: [
                String.raw`なにか = 3.5 \div \frac{4}{9}`,
                String.raw`3.5 = \frac{7}{2}`,
                String.raw`\frac{7}{2} \div \frac{4}{9} = \frac{7}{2} \times \frac{9}{4} = \frac{63}{8} = 7.875`,
                String.raw`4.875 + \square = 7.875`,
              ],
            },
            {
              title: 'ステップ4：□を求める',
              description: '',
              formulas: [
                String.raw`\square = 7.875 - 4.875 = 3`,
              ],
            },
          ],
          tips: [
            { title: '外から内へ', description: 'たまねぎの皮むきのように、外側から順番に解く' },
            { title: '逆算', description: '「A - B = C」なら「B = A - C」' },
            { title: '分数の通分', description: '分母をそろえてから計算する' },
            { title: '分数の割り算', description: 'ひっくり返してかける' },
          ],
        },
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
