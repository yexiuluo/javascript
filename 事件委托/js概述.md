# javascript 是什么
> 程序语言
# 程序语言是什么
> 和计算机交流的语言
# 计算机是什么？能做什么？
>计算机是用来做计算的

程序语言就是一条条的人类可读的指令
告诉计算机去怎么做计算

程序语言就像一份指令或者菜谱
详细的描述了计算机应该怎么做

一门程序语言必须具备一些能力才能和计算机交流明白
必须能很清楚的告诉计算机怎么去存储数据
必须能很清楚的告诉计算机怎么去做逻辑操作
#javascript中的逻辑操作
#内置逻辑操作
+ - * / % && ||　!　＝　!=  < >=  (规范esLint)
>if(){}
>if(){}else{}
>if(){}else if(){}else{}
>switch(val){
	case1:
	xxxxxx;
	case2:
	xxxxxx;
	default:
	xxxx;
	break;
}
>for(var i = 0; i < 100; i++){
	
}严格规范
>while(i<200){
	console.log(i)
	i++;
}
>do{
	console.log(i)
	i++;
}
while(i<2)
##数据存储
Number 
String
Array
Object
Function  var v=function(){}
undefine    var v=undefined
null         var v=null
Boolean
javascript用类似于一个表来存储数据（对象）
##从函数这个对象说起
var fn =function(){
	alert(1)
	console.log(1)
	return 1
}
>写在函数体中的代码去哪了
>函数会用一个不可见的属性‘调用’来存储函数体中的代码
>{‘调用’:'console.log(1);return 1'}
>函数的特殊之处在于它可以被调用，其他对象不具备
>函数名+() 调用函数
##定义函数发生了什么
>要把代表函数的那张表构建完全
>1.调用这个属性要赋值
>2.需要把当前可见范围内所有的变量，由近及远的记录到一个链条中，形成一条作用域链
##调用函数时发生了什么
>调用函数的时候，函数对象会去读取自己身上‘调用’这个属性的值，取出来一堆字符串，把这些字符串交给JS解析器当>作JAVASCRIPT代码去执行，JS解析器执行时会取到函数作用域链

#在函数中Tthis是什么？
>只有在函数中才有this这个东西
>函数在定义的时候 this什么都不是
>函数在调用的时候 
>根据调用的不同情况，来决定this变成什么
##到底有哪些不同的情况呢？
```javacript
//正常的定义一个函数(不把函数作为某个对象的属性)
var da=function(){
	var fn=function(){
	console.log(this)
}
fn()
}
da()
//正常调用(使用（）的方式调用函数)
//this指向WINDOW
```
```javascript
var obj={
	a:1,
	b:2,
	c:function(){
		console.log(this)
	}

}
obj.c()
//this指向宿主obj对象
```
```javascript
//如果我们需要把this转换为我们任何想要的对象
//需要借助函数的方法call//apply
var obj={a:1,b:2}
obj.c=function(){
	console.log(this)
}
obj.c.call('abcd');
//this 指向call的第一个参数
obj.c.apply([1,2,3,4],[3,4])
//this 指向apply的第一个参数，不同的是写法是数组，第二个参数也是数组
````

##当我们写好一份程序后，计算机在处理的过程中发生了什么？
>对照代码，从上往下开始解析
#用在展示信息的web页面中
#用在web app 中()
localStorage.setItem('d','xx')
//会在浏览器中存储一些数据(取出的也是字符串)
localStorage.getItem('d')
//会从本地存储中取出一些数据(取出的也是字符串)
localStorage.removeItem('d')
//从本地存储中删除一条数据
JSON.stringify()
//把对象转换成字符
//{a:1,b:2}=>'{"a":1,"b":2} '
JSON.parse()
//把字符转换为对象
