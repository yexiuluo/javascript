window.onload=function(){
        var floor=$(".floor");
        // alert(floor.length)
       // 计算每一楼的高度（坐标）（不断变大的一个数）
        var floorArr=[];
        
        for(var i=0;i<floor.length;i++){
             floorArr.push(floor[i].offsetTop)       
        } 
        //fanhui
        // var back=$(".back")[0]
        // back.onclick=function(){
        //   var obj=document.body.scrollTop?document.body:document.documentElement
        //   animate(obj,{scrollTop:0},function(){
            
        //   })
        // }

      // //楼层跳转
      // var jump=$(".jump")[0];
      // var lis=$("li",jump);
      // var jH=jump.offsetHeight;
      // var flag=true;
      // jump.style.top=(cH-jH)/2+"px";
      // for (var i = 0; i < lis.length; i++) {
      //   lis[i].index=i
      //   lis[i].onclick=function(){
          // flag=false;
      //      var obj=document.body.scrollTop?document.body:document.documentElement
      //      animate(obj,{scrollTop:floor[this.index].offsetTop},function(){
            // flag=true;
      //      }) 
      //      for (var j = 0; j < lis.length; j++) {
      //         lis[j].style.background="#f4f4f4"
      //       }; 
      //       lis[this.index].style.background="red"
      //   }
      // }
       
         







    //按需加载
        // alert(floorArr.length)
        // console.log(floorArr)
     var cH=document.documentElement.clientHeight;
             // alert(cH)
             // console.log(document.documentElement.scrollTop)
             //当大于高度(可视范围+滚轮>=floor[i].offsetTop)，就把图片给当前楼层
     window.onscroll=function(){
	   var obj=document.body.scrollTop?document.body:document.documentElement

     var tops=obj.scrollTop;
              // alert(tops)
	           // 谷歌用document.boy.scrollTop获取滚轮以上的屏幕大小
             //   var tops=document.body.scrollTop;
               for (var i = 0; i < floor.length; i++) {
                   if (tops+cH>=floorArr[i]+200) {
                   	var imgs=$("img",floor[i]);
                   	// alert(imgs.length)
                   	// alert(imgs[0].src)
                   	for (var j = 0; j < imgs.length; j++) {
                   		imgs[j].src=imgs[j].title

                   	}

                   }
               }
               
//jump色块


// for (var i = 0; i < floor.length; i++) {
//             if (tops+cH>=floorArr[i]+200) {
//                     var imgs=$("img",floor[i]);
//                     // alert(imgs.length)
//                     // alert(imgs[0].src)
//                     for (var j = 0; j < imgs.length; j++) {
//                       imgs[j].src=imgs[j].title

//                     }
// }

//              }


//back 点击事件开关
// if(tops>=500){
//   animate(back,{opacity:1})
//   console.log(1)
// }else {
//   animate(back,{opacity:0})
//   console.log(2)
// }


}}

//按需加载练习
// window.onload=function(){
// var obj=document.body.scrollTop?document.body:document.documentElement
// var tops=obj.scrollTop;

// }

