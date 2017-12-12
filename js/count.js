(function(){
  window.oCount = oCount;
  function oCount(){
    var oCount = document.querySelector("#count");
    oCount.addEventListener('click',function(event){
      event = event || window.event;
      var target = event.target || event.srcElement;
      if(target.classList.contains('isCount')){

        var oInputVal = parseInt(oCount.querySelector('input').value);
        // 点击左按钮
        if(target.classList.contains('countLeft')){
          oInputVal --;
          if(oInputVal <= 1){
            oInputVal = 1;
          }
        }else if(target.classList.contains('countRight')){
          oInputVal ++;
          if(oInputVal >= 10){

            // 控制一次最多买10件
            oInputVal = 10;
          }
        }
        oCount.querySelector('input').value = oInputVal;
      }
    },false);
  }
})();