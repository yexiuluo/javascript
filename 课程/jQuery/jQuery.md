#jQuery


前端开发在开始写代码之前，一般首先要解决的两个问题
1.解决js标准本身的兼容性问题 es5shim.js
2.解决DOM扩展部分的兼容性问题

第一个引入的js库用来解决兼容性问题
<script src="jquery.js"></script>
<script src="index.js"></script>


分开引用的js文件一定要解决的一个问题
不能污染全局变量
```JavaScript
var getEle = function(selector){
	if(document.querySelector){
	return document.querySelector(seletor)
}else{
	console.error('请更换浏览器')
}
}
````
上面这种写法的两个问题
1.用户需要学习一门全新的语法
2.用户需要避开那个库中的所有全局变量