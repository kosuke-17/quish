## フロント src ディレクトリの構成(優先度 → 上：高,下:低)

#### Atomic Desgin とサイト記事を参考にしながら src ディレクトリの構成を考えました。

[参考記事](https://maku.blog/p/4is2ahp/)

---

**見た目を定義するディレクトリ(Presentational Components)**
役割 :「ロジックを持たず、渡された props を描画するコンポーネント」

- components/

  - atoms/
  - molecules/
  - organisms/

---

**ページディレクトリ**
役割 :「URL パスに応じた tsx ファイルの表示,templates/にデータを流す」

- pages/

  - api/ ← データフェッチ関数使用のため
  - 「page 名」.tsx

---

**テンプレートディレクトリ**
役割 :「pages/から受け取ったデータをもとに処理を行う。components/に props を渡す」

- templates/

---

**カスタム処理用ディレクトリ**
役割 :「カスタムフックスや共通処理の保有」

- hooks/

---

**共通データ用ディレクトリ**
役割 :「型定義や共通定数を保有するディレクトリ」

- common/

---

**CSS の記述**
役割 :「CSS のコードを記述」

- styles/

---
