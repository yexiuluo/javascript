
// function getStyle(obj,attr){
// 	if (obj.currentStyle) {
//         return    obj.currentStyle[attr]
// 	}else{
//         return getComputedStyle(obj,null)[attr]
// 	}
// }


//取一个函数名，和
function getClass(className,range){
	var range= range?range:document;
	    if (range.getElementsByClassName) {
	    	return range.getElementsByClassName(className)
	    }else{
	    	var all=range.getElementsByTagName("*");
	    	var  newArr=[];
	    	for (var i=0;i<all.length;i++){
	    		if (checkClass(all[i],className)) {
	    			newArr.push(all[i])
	    		}
	    	}
	    	return newArr
	    }

}
function checkClass(obj,classname){
	var arrC=obj.className.split(" ")
	for(var i=0;i<arrC.length;i++){
		if (arrC==classname) {
			return true;
		};

	}
	return false;
}
// dollar函数
function $(selecter,ranges){
			var ranges=ranges?ranges:document;
			var first=selecter.charAt(0);//返回在指定位置的字符串
			if(first=='#'){
				return document.getElementById(selecter.substring(1));//截取字符串 substring(起始，结束)不包括结束位置
			}
			else if(first=='.'){
				return getClass(selecter.substring(1),ranges);//类函数
			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//匹配名字是否符合标准//正则表达式
				return ranges.getElementsByTagName(selecter);

			}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
				return ranges.createElement(selecter.slice(1,-1));
			}
			}
			

// ****************************************************************

//getNext(obj ,type)
       //type   true    识别有意义的文本
               // false    忽略文本
      //得到下一个函数，有效的，不是空格或者文本
       function getNext(obj,type){
       		var type=type?type:false;
       		var next=obj.nextSibling;
       		if(type===false){
       			if(!next){
       				return false;
       			}
       			while(next.nodeType==3||next.nodeType==8){
       				next=next.nextSibling;
       				if(!next){
       				return false;
       			}
       			}

       		}
       		else if(type===true){
       			if(!next){
       				return false;
       			}
       			while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
       				next=next.nextSibling;
       				if(!next){
       				return false;
       			}

       		}
       		return next;
       }

     // 往一个元素后面添加插入一个元素（标签，内容）
       //insertAfter(obj,next,type)
       // obj:要插入的元素  对象
       // next:要插入的位置
       // type true 识别有意义的文本
       //      false  忽略文本

       //
       function insertAfter(obj,next,type){
       	var type=type?type:false;
       	var pos=getNext(next,type);
       	var parent=next.parentNode;
       	if(!pos){
       		parent.appendChild(obj);

       	}else{
       		parent.insertBefore(obj,pos);
       	}
       }
 }
		


//obj 要插入的对象
//next  位置







