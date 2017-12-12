(function () {
	 //		hanlun
  var oGoodsSearch = document.querySelector('input[name=search_text]');
  var oGoodsSearch0 = document.querySelector('input[name=search_text1]');
  var oSearchDiv = document.querySelector('.search-history');
  var oSearchUlHistory = document.querySelector('#searchulhistory');
  var oMainProList = document.querySelector('.mainProList');
  var lock = true;

  //搜索的搜索框
  oGoodsSearch.onkeyup = function(event) {
    event = event || window.event;
    event.preventDefault();
    if(localStorage.value){
      var str = localStorage.value.split('&');
      console.log(str);
    }
    if (event.keyCode === 13) {
      if (!localStorage.value) {
        localStorage.value = this.value;
      }else{
        localStorage.value += '&' + this.value;
      }
      location.href='goodsSearch.html?search_text='+this.value;
    }

    if (localStorage.value !== ''){
      if (!lock) return;
      lock = false;
      setTimeout(function(){
        lock = true;
      }, 10000);
      for (var i=0;i<str.length;i++) {
		    			var oLiSearch = document.createElement('li');
		    			var oSearchA = document.createElement('a');
		    			oSearchA.innerText = str[i];
		    			oSearchA.href = "goodsSearch.html?search_text=" + oSearchA.innerText;
							oSearchUlHistory.insertBefore(oLiSearch,oSearchUlHistory.children[0]);
		    			oLiSearch.appendChild(oSearchA);
		    		}
    		}
  	}
    
		if(localStorage.value){
      	var str=location.href.split('=');
      	oGoodsSearch.value =decodeURI(str[str.length-1]) ;
      	console.log(str);
    }
    oGoodsSearch.onkeydown= function(){
    	if (localStorage.value) {
    		oSearchDiv.style.display = 'block';
    	}
    }
    oSearchDiv.onmouseleave = function(){
    	oSearchDiv.style.display = 'none';
    }
    window.onclick = function(){
    	oSearchDiv.style.display = 'none';
    }
  //吸顶的搜索框
  var oGoodsSearch1 = document.querySelector('input[name=searchBtn]');
  var oGoodsSearch2 = document.querySelector('input[name=searchBtn1]');
  //搜索的按钮
  oGoodsSearch1.onclick = function(event) {
    event = event || window.event;
    event.preventDefault();
    if (!localStorage.value) {
      localStorage.value = oGoodsSearch.value;
    }else{
      localStorage.value += '&' + oGoodsSearch.value;
    }
    location.href='goodsSearch.html?search_text=' + oGoodsSearch.value;
  }
  //吸顶搜索的按钮

  var search_text = matchQueryString('search_text');
  myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{
    search_text,pagesize:12
  },function(error,responseText){
    var json = JSON.parse(responseText);
    var data = json.data;
    //oMainProList.innerHTML = "";
    for (var i=0;i<data.length;i++) {
      var obj = data[i];
      oMainProList.innerHTML += `<li class="mainProListItem">
            <a href="goodsDetail.html?goods_id=${obj.goods_id}">
              <div class="ProListImg">
                <img src="${obj.goods_thumb}"/>
                <div class="mark"></div>
              </div>
              <div class="ProListInfor">
                <h3 class="ProName" title="仅重600g便携蓝牙音箱 丹麦设计 专业级音质 防滑防水 长续航">${obj.goods_name}</h3>
                <p class="des">${obj.goods_desc}</p>
                <span class="price"><i>&yen;</i>${obj.price}</span>
              </div>
            </a>
          </li>
          `;
    }
  });
})()