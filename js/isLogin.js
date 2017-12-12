(function(){
  var myFiveList = document.querySelector('.myFiveList');
  var allMyFiveList = myFiveList.querySelectorAll('a');
  var buyCar = document.querySelector('.buyCar');
  buyCar.addEventListener('click',function(event) {
    event = event || window.event;
    if(!localStorage.token){
      event.preventDefault();
      location.href='login.html';
    } else {
      location.href='buyCar.html';
    }

  },false);

  for(var i = 0; i < allMyFiveList.length; i++){
      allMyFiveList[i].addEventListener('click',function(event){
        event = event || window.event;
        var target = event.target || event.srcElement;
        if(!localStorage.token){
          event.preventDefault();
          location.href='login.html';
        }else{
          if(target.innerText === '我的订单'){
            location.href='orderPage.html';
          }else if(target.innerText === '我的收货地址'){
            location.href='address.html';
          }
        }
      },false);
  }
})();