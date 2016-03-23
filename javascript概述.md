#javascript概述

##程序语言
* 一
* 二
* 三
* 四
##基础部分
 >变量 数据类型         (数据存储)
 >分支和循环 运算符              (逻辑操作)
 >函数（对语言的扩展）
````javascript
  ###变量 数据类型
 var a1=1;      //number
 var a2="1";   //string
 var a3=false  //boolean
 var a4=true  //boolean
 var a5=[1,2,3,4] //arr
 var a6={b1:1,b2:2} //object
 var a4=undefined
 var a4=null 
###分支和循环 运算符     
 + - * / % === !=== < > >= <= && || !
 if(true) {}  else if(){}    else{}    // if
 ###循环语句
 for(var i=0;i<a.length;i++){}           //for
 while(true){

 }            //while
   do{}while()          //do while
   switch(x)  {
   c 1:
   break;
   c 2: continue;
   default 3: break;

   }         //switch
   ###函数
   function xx(){}
   var fn=function (){ //arguments}
   fn (a,b)
   
###数组的常用方法
###字符串中常用的方法
###函数对象中的方法 bind apply call
###对象的增删改查 原型链
###数字对象身上的方法 toFixed()
###Math对象身上 的方法


``````
##针对特定用途的部分
 > 当js来浏览器运行的那一刻
 >浏览器会创建一个window对象
 >window对象中很多属性和方法
 >这些属性和方法是不用加window.就可以调用使用
 document.getElementById() 
 dom对象 dom集合

docement
 ### 选取元素
 * var el=document.getElementById() 
 * var el=document.getElementsByClassName() [0]
 * var el=document.getElementsByTagName() [0]
 
 *el.parentNode
 *el.childNode

 *getComputedStyle(el,null) width
 *el.currentStyle.width
 *el.documentElement.clientHeight
 *el.documentElement.documentElement.documentElement.clientLeft
 *el.documentElement.documentElement.clientTop
 *el.documentElement.clientWidth
 ###筛选元素
  *el.nextSibling
  *el.peviousSibling

   *el.firstChild
  *el.lastChild
 
  ###操作样式
  * el.style.color='red';
  * el.style[color]='red';
 


  ###获取位置信息
   * el.offsetleft
   *el.offsettop
   *el.offsetparent
   *scrollTop
   *scrollLeft

  ###操作属性
  *el.classname=''
  

  ###节点操作
  *el.nodeName
  *el.nodeType
  *el.nodeValue
  ###其他

 


```javascript
var a=12;
var b=function(){
	alert(a)
}
``````

###
####