# vercel-env-test

環境変数をどうやってセットするか

```
npx next dev
```

preview 環境の NODE_ENV に development を仕込んで実験

=> https://vercel.com/ojisan/vercel-env-test/settings/environment-variables

Automatically optimizing pages... があるからビルド時にコンポーネント側の環境変数を見る

```
$ curl https://vercel-env-test-git-preview.ojisan.vercel.app/api

{"NODE_ENV":"production","OREORE_NODE_ENV":"oreoreore"}
```

コンソールから設定した値を API から見ることができる。

## memo

- https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
  - NEXT*PUBLIC* について
- next.config.js の env について
  - https://nextjs.org/docs/api-reference/next.config.js/environment-variables
- https://qiita.com/taroodr/items/f8a9eca4db06916d9ed7
- https://qiita.com/chocomintkusoyaro/items/2b1bfa020b80522467ed
  - ビルド時、サーバーサイド、クライアントサイドでの読み込みについて
