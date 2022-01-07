## フロント src ディレクトリの構成

[参考記事](https://maku.blog/p/4is2ahp/)

**見た目を定義するディレクトリ(Presentational Components)**
役割 :「ロジックを持たず、渡された props を描画するコンポーネント」

- components/

  - atoms/
  - molecules/
  - organisms/
  - templates/

**ロジックを定義するディレクトリ(Container Components)**
役割 :「ロジックを持たせ、components ディレクトリに props を渡すコンポーネント」
(もし tailwind を適用させるなら、tailwind.config に dir 名を追加)

- containers/

  - atoms/
  - hooks/ ← カスタムフックを使用するため
  - molecules/
  - organisms/
  - templates/

**ページディレクトリ**
役割 :「URL パスに応じた tsx ファイルの表示」

- pages/
  - api/ ← データフェッチ関数使用のため
  - 「page 名」.tsx

**共通データ用ディレクトリ**
役割 :「型定義や共通定数を保有するディレクトリ」

- common/

**CSS の記述**
役割 :「CSS のコードを記述」

- styles/
