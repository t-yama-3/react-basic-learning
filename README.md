## CDN 参考

https://ja.legacy.reactjs.org/docs/cdn-links.html
https://dev-k.hatenablog.com/entry/how-to-use-react-in-cdn-dev-k

## 拡張機能

React Developer Tools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja

「ファイルの URL へのアクセスを許可する」を有効にする

## useState

```
# 構文
const [ステート変数, 更新用の関数] = useState(初期値)

# 使用例
const [count, setCount] = useState(0)
```

## create-react-app

```
npx create-react-app@5.0.1 my-app

Success! Created my-app at C:\Users\t-yam\workspace\react\react-basic-learning\section6\my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start
```

## eject

config などの設定ファイル等を書き出して詳細設定を行う

```
  "scripts": {
    "eject": "react-scripts eject"
  },
```

## Styled Components

```
npm install --sava styled-components@5.3.6
```

## react-router-dom

```
npm install react-router-dom@6.6.0
```

```
BrowserRouter: アプリ内に１つ
Routes (Switch): 切り替えたい Route を囲む
Route: コンポーネントを指定する
```

```
useSearchParams: クエリパラメータを取得
useLocation: ページの情報を取得
```
