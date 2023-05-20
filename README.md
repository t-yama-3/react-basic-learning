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

## MUI

```
npx create-react-app@5.0.1 book-app
npm install @mui/material@5.11.1 @emotion/react@11.10.5 @emotion/styled@11.10.5
npm install @mui/icons-material@5.11.0
npm install react-router-dom@6.6.0
```

```
npm install @mui/material@5.11.1 @emotion/react@11.10.5 @emotion/styled@11.10.5 @mui/icons-material@5.11.0 react-router-dom@6.6.0
```

### レイアウト

```
Box: 基本的にこれを使う。html 要素を設定。
Container: 要素をセンターに寄せる。
Grid: css の flexbox に該当。横に並べるなど。
```

https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3
https://labo.kon-ruri.co.jp/google-books-apis/
https://developers.google.com/books/docs/v1/using?hl=ja
