window.addEventListener('load', function(){
// オートセーブする変数を定義する
let count = 0;

// ページが読み込まれたときに、保存されたデータがあれば取得する
if (localStorage.getItem("count")) {
  count = parseInt(localStorage.getItem("count"));
}

// 変数を増減させる関数を定義する
function incrementCount() {
  count++;
  saveCount();
}

function decrementCount() {
  count--;
  saveCount();
}

// 変数を保存する関数を定義する
function saveCount() {
  localStorage.setItem("count", count.toString());
}
})