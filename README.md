# README

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


## itemss テーブル

| Column           | Type       | Options                        |
| ---------------- | ---------- | ------------------------------ |
| item_name        | string     | null: false                    |

### Association

- belongs_to :user