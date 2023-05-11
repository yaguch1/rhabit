window.addEventListener('load', function(){
  var btn = document.getElementById('btn');
  var modal = document.getElementById('modal');
  
  btn.addEventListener('click', function() {
    modal.style.display = 'block';

   
      document.querySelector("#audio2").play();
      // ガチャデータを取得する
      function getConfig() {
        return [
          { id: '大当たり', val: 1 },
          { id: '当たり', val: 10 },
          { id: 'はずれ', val: 89 },
        ];
      }
      
      // 設定データを元にガチャ抽選を行う
      function gachaRun(config) {
      
          const min = 1; // 最小値
          const max = 100; // 最大値
      
          // 乱数生成（抽選）
          const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
      
          let result = [];
          let totalProb = 0;
          for (let i = 0; i < config.length; i++) {
              totalProb += config[i].val;
              if( randomNum <= totalProb ) {
                  result = config[i];
                  break;
              }
          };
      
          return result;
      }
      
      // 実行
      const config = getConfig();
      console.log(gachaRun(config));
      
      })


  var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
})
  

  });
