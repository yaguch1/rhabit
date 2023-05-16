# アプリケーション名
Rhabit

# アプリケーション概要
タスクの登録・削除機能、一覧機能によって、タスク管理をすることができる。

# URL
https://rhabit.onrender.com

# テスト用アカウント
・Basic認証パスワード：admin
・Basic認証ID：2222
・メールアドレス：test@com
・パスワード：aaaaaa

# 利用方法
## タスク登録
1.「add」ボタンを押し、モーダルウィンドウにタスク名を記入する。
2.登録ボタンを押すとタスクが登録される。
※登録を取り消す場合は「閉じる」ボタンを押す。
## タスク削除
タスク名をクリックするとタスクが削除される。

# アプリケーションを作成した背景
私自身、タスク管理が苦手であるという点が課題だった。
そこで、やるべきことを一覧機能で把握し、さらに追加機能によってモチベーションを維持するようなアプリを開発して、課題解決を図った。

# 洗い出した要件
要件定義シート（https://docs.google.com/spreadsheets/d/1cUkQ8MCpCki4fszdTFzLRlOoc-F9NgcgLQvAEgGdnGc/edit）

# 実装した機能についての画像やGIFおよびその説明


# 実装予定の機能
アイテム一覧機能によって、獲得したアイテムを確認できるようにする。
フレンド機能によって、自分がフォローしているフレンドのタスク等を閲覧できるようにする。
タスク達成によって集めた石の情報をDBに保存し、ユーザーごとに管理できるようにする。

# データベース設計
## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               |
| email              | string | null: false               |
| encrypted_password | string | null: false               |

### Association

- has_many :tasks
- has_many :coins
- has_many :items


## tasks テーブル

| Column             | Type       | Options                        |
| ------------------ | ---------- | ------------------------------ |
| task_name          | string     | null: false                    |
| user               | references | null: false, foreign_key: true |

### Association

- belongs_to :user


## coins テーブル

| Column           | Type       | Options                        |
| ---------------- | ---------- | ------------------------------ |
| gold             | integer    | null: false                    |
| silver           | integer    | null: false                    |
| bronze           | integer    | null: false                    |
| user             | references | null: false, foreign_key: true |

### Association

- belongs_to :user


## items テーブル

| Column           | Type       | Options                        |
| ---------------- | ---------- | ------------------------------ |
| item_name        | string     | null: false                    |

### Association

- belongs_to :user

# 開発環境
Ruby/Ruby on Rails/MySQL/Github/Visual Studio Code

# 工夫したポイント
Ajaxによる非同期通信を行うことで、ユーザビリティの向上に努めた。
ガチャ機能を実装することで、タスク達成に対するモチベーション維持を図った。