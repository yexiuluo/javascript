#javascript概述

##程序语言
* 一
* 二
* 三
* 四
 ##基础部分
 > 变量 数据类型         (数据存储)
 > 分支和循环 运算符    (逻辑操作)
 > 函数（对语言的扩展）
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

 按照我们正常编程思路
 第一步就是找出元素
 我们从document对象开始  利用它身上的方法
 找出我们需要的元素（dom元素或dom集合）

docementen
 ### 选取元素
 * var el=document.createElement()
 * var el=document.getElementById() 
  *var el=document.querySelector()

   *var el=document.querySelectorAll()
 * var el=documt.getElementsByClassName() [0]
  * var el=document.getElementsByName() [0]
 * var el=document.getElementsByTagName() [0]
 经过这一步我们会得到一个dom元素或dom集合
dom对象
 js会用一个很大的对象来代表页面中所看到那个集合或元素
 dom集合
 在一个类数组中存储很多dom对象构成一个集合

 




 *el.documentElement.clientHeight
 *el.documentElement.documentElement.documentElement.clientLeft
 *el.documentElement.documentElement.clientTop
 *el.documentElement.clientWidth
 ###筛选元素
  >从一个dom对象开始，根据逻辑关系再去寻找dom对象
  >父元素
   *el.parentNode
    *el.parentElement
  >子元素
  *el.childNodes
  *el.firstChild
  *el.lastChild
  *el.firstElementChild
  *el.lastElementChild
  >兄弟元素
  *el.nextSibling
  *el.nextElementSibling

  *el.peviousSibling
  *el.peviousElementSibling

  
 
  ###操作样式
  * el.style.color='red';
  * el.style[color]='red';
 


 

  ###操作属性
  *el.setAttribute
  *el.getAttribute
  *el.removeAttribute
  *el.hasAttribute
  *el.classname=''
  *el.id=''
  *el.classList=''
 ###获取位置信息
   * el.offsetleft
   *el.offsettop
   
 <!--   *scrollTop
   *scrollLeft -->
  

  ###节点操作 (NODE)目标对象
  el.appendChild()
  el.removeChild()
  el.insertBefore()
  el.cloneNode()
  el.replaceChild()
  <!-- *el.nodeName
  *el.nodeType
  *el.nodeValue -->
  ###获取元素信息（HTML ELEMENT）
  //无单位
  *el.offsetWidth 
  * el.offsetleft
   *el.offsettop
   *el.offsetHeight
   *el.offsetParent//具有定位属性的父元素
    *el.getBoundingClietRect()//计算元素距离窗口位置
     *el.innerHTML
      *getComputedStyle(el,null).width  //取出的是一个带单位的字符串
        *el.currentStyle.width
     ###样式操作
      *el.style(读取行内样式的值，设置行内样式的值)
     ### get和set在dom对象中的应用
      `````javascript
     var obj={
      a:1,
      b:2,
      set c (x){console.log(111) },
      get c() {return 5}
      }
      undefined
      console.dir(obj)
      VM1227:2 Objecta: 1b: 2c: (...)get c: c()set c: c(x)__proto__: Object
      undefined
      `````


  ###其他
 


```javascript
var a=12;
var b=function(){
	alert(a)
}
``````

###
####