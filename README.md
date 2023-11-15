[Next.js](https://nextjs.org/) を使って Github copilot chat のデモを実施します。

## Getting Started

Node.js: 18.0 以上が必要です。

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## demo scenario

### Copilot Chat との比較のために、Copilot でコードを書く

- app/page.tsx を開きます。
- Copilot のデモ
  - `null`を削除して、`<Typography` と入力して Copilot のサジェストにそってテキストの追加
- Copilot で対応が難しいケースのデモ
  - コメントを追加　`{/* MUI select component */}`
    - Copilot のサジェストで期待するコードが出ない事を確認
  - コメントに以下の長い文章を追加して Copilot の出力を確認するが、MUI が使われない事を確認
    - `{/* - mui v5 のselect コンポーネントを使用して「選択１」、「選択２」、「選択３」から選択できるようにして下さい。- 選択肢は配列で定義されます。例：[”選択１”, ”選択２”, ”選択３”]- selectで選択した後に、その下の「Build」ボタンをクリックしたら関連するプロンプトが表示されるようにしてください。 */}`

### Copilot Chat と対話の開始

```
以下の条件を満たすReact componentを出力してください。

- TyeScriptで記述してください
- mui v5のライブラリを使用します
- mui v5 のselect コンポーネントを使用して「選択１」、「選択２」、「選択３」から選択できるようにして下さい。
- 選択肢は配列で定義されます。例：[”選択１”, ”選択２”, ”選択３”]
- selectで選択した後に、その下の「Build」ボタンをクリックしたら関連するプロンプトが表示されるようにしてください。
```

- 新規ファイルとしてコンポーネントを保存して、`app/page.tsx` に import する
- チャットで新規に作成したコンポーネントファイルに対して、以下のように指示を出す

  - このコードの概要を教えてください。
  - このコンポーネントにキャンセルボタンを追加して、ボタンをクリックしたら、選択を解除してください。
  - キャンセルボタンの位置だけを変えます。右寄せにしてください
  - 最後にコンポーネントのコードを整える

  ```

  リファクタリングしてください。

  - デバック用のコードと思われるものを削除してください。
  - 変数名や関数名などで改善すべき点を指摘してください。
  - 可読性や処理性能を上げるために変更すべき点を指摘してください。
  - エラーハンドリングを改善してください。
  - コードの責務が曖昧な場合、分割する案を提示してください。
  - その他、改善すべき点があれば指摘してください。
  ```
