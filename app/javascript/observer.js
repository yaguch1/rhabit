window.addEventListener('load', function(){

  const addBtn = document.querySelector('.add-btn');

  //オプション
  const options = {
      childList: true, //直接の子の変更を監視
      //characterData: true,　 //文字の変化を監視
      // characterDataOldValue: true,　//属性の変化前を記録
      // attributes: true,　 //属性の変化を監視
      subtree: true, //全ての子要素を監視
  }
  //コールバック関数
  function callback(mutationsList, observer) {
      for(const mutation of mutationsList) {
          
        const lifeBar = document.getElementById('life-bar')         // ライフバー
        const lifeMark = document.getElementById('life-mark')       // ライフの光部分
        const increaseBtn = document.getElementsByClassName('increase-btn') // + ボタン
        for(i=0;i<increaseBtn.length;i++){
          increaseBtn[i].onclick = function () {
          alterLife( 10 )
          count_value += 1;
          count_disp.innerHTML = count_value;
         } 
        }
        const decreaseBtn = document.getElementsByClassName('decrease-btn') // - ボタン
        for(i=0;i<decreaseBtn.length;i++){
          decreaseBtn[i].onclick = function () {
            alterLife( -10 )
          count_value -= 1;
          count_disp.innerHTML = count_value;
         } 
        }

        let life =   0                                              // ライフ初期値
        lifeBar.style.width = "0%"                                  // ライフ初期幅
        var count_value = 0
        var count_disp = document.getElementById("coins"); 
    
        // *** ライフ変更処理 ***
        function alterLife( value ){
            // lifeの値を算出する
            life += value 
            if ( life <= 0 ){
                // 算出の結果 0 以下になった場合
                life = 0
                // 0.3秒後に光部分を非表示にする
                setTimeout(function(){
                    lifeMark.style.visibility = 'hidden'
                }, 300)
            } else {
                // 算出の結果 100 を超過した場合
                if ( life > 100 ) {
                    life = 100
                }
                // 光部分を表示する
                lifeMark.style.visibility = 'visible'
            }
            // スタイル(幅)を更新する
            lifeBar.style.width = life + "%"
        }

      };
  }
  //ターゲット要素をDOMで取得
  const target = document.querySelector('.task');
  //インスタンス化
  const obs = new MutationObserver(callback);
  //ターゲット要素の監視を開始
  obs.observe(target, options);
  
})
