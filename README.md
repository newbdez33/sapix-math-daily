# 🧮 SAPIX算数デイリー練習

SAPIX（サピックス）に通う子供のための算数デイリー復習サイトです。

**サイト:** https://newbdez33.github.io/sapix-math-daily/

## 特徴

- 📝 **問題のみ表示** - 印刷して紙で解く用
- 📖 **解答付き表示** - 解き方のステップ付き
- 🖨️ **印刷対応** - きれいに印刷できるレイアウト
- 🧮 **数式表示** - KaTeXによる美しい数式レンダリング

## 使い方

1. 問題セットを選ぶ
2. 「問題のみ」または「解答付き」を選択
3. 印刷ボタンで印刷

## 開発

```bash
pnpm install
pnpm dev
```

## ブランチ運用

- `develop` - 開発用ブランチ（デフォルト）
- `main` - 本番用ブランチ（GitHub Pagesへデプロイ）

`main`ブランチへのPRマージ時に自動デプロイされます。

## 技術スタック

- React + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui
- KaTeX

## ライセンス

MIT
