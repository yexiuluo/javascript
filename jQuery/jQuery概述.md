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



###jQuery中的大多数方法都会返回一个jQuery集合；
*操作集合的方法返回的就是原集合
*对集合做过过滤或者导致集合改变的一些方法返回改变后的jQuery集合
* $ .append 这一类方法，当涉及到创建DOM对象时，他们会返回创建完成后的一个jQuery集合
```javacript
var obj={
       height:100,
       width:200,

       addH:function(){
       	this.height+=10 ; return this;
       },
    addW:function(){
       	this.width+=10 ; return this;
     }
    }
    obj.addH().addW().addH().addW()
    console.log(obj.width,obj.height)
    ```````````````
*所以在jQuery中链式调用很常见

```javascript
$('#selectors h1')
.width(100)
.height(200)
.css('color','red')
.position();{top:,left}//链条在这里断掉
````````

###jQuery中能使用的选择器
jQuery中选择器使用一个叫sizzle.js的库
.a p > a .item
从后往前找 （在树中，找父元素只是一次查找，找子元素需要遍历）
* parent > child 子选择器 父元素下的直接子元素
*A B 后代选择器
*prev + next 相邻一个选择器
*prev ~ siblings相邻所有选择器

###在找到的元素中筛选
$('.header div:first')
* :animated  所有正在执行jquery动画的元素
             小标等于几的元素
             *:header  h1-h6标签$(this).find('header')
*:lang()            $(this).find('div:lang(spanish)'找出属性中有lang的元素
*:root         找html,iframe
*:target    index.html#A

*:contains 过滤内容中包含某个字符的元素
*:empty  $('p:empty') 没有内容的元素
*:has()  括号中可以接受一个简单选择器
         判断已选中的元素的子元素中是否包含某个规则的元素
*:parent 剔除选中元素中不包含子元素的，就是找爸爸，留爸爸
*:not()  简单的选择器，从选中的元素中剔除符合规则的，没有Not中的标签的，删掉
#可见筛选
*:visible      留下选中元素中可见的元素

*:hidden         留下选中元素中不可见的元素
###属性
*[attr] 筛选出有attr这个属性的
*[attr=aa] 精确等于aa
*[attr !=aa]
*[attr |= aa]  aa||aa-xxxxx
*[attr *= aa]   baac   有就行
*[attr ^=aa]  aabbc aa-cc aa-a1
*[attr ~=aa]  class="xx yy zz" yy 空格隔开的有
*[attr $=aa]  xxx-data yyyy-data  以什么结尾的、


##jQuery中的方法
jquery中的方法分为两类：

1.直接出现在接口函数对象身上，是一些基础性质的工具函数
2.出现在接口.fn函数对象的原型链上，用来批量（或单个）操作接口集合中的盗墓元素


大部分方法重载很严重
````javascript

 $('li').css('width'); //取出选中集合中第一个元素的宽度  +px
 $('li').css('width',200);设置集合中所有元素宽度为200px
 $('li').css({width:200,height:300,border:'1px solid black'})
<!-- 给选中集合中所有的元素  加上传入对象中的所有css样式
给集合中的每一个元素，添加'width'这个属性
 每一个元素的'width'属性的值由第二个参数传入的函数来计算
 也就意味着，接口会对集合中的每一个元素调用回调函数，
 调用的时候会传入两个参数，一个是当前元素的集合中的位置（0,1,2,3,4）
 另一个是当前元素现在的'width'值 -->
 $('li').css('width',function(){
 return Math.random()*120;
 })
 var colors = ['red','blue','green']
 $('li').css({
  width:function(){return Math.random();}
  height:function(){return Math.random();}
  backgroundColor:function(i){return colors[i];}

 })

`````
##接口库设计理念
1.解决兼容性问题
2.让从页面中查找元素变得更轻松
3.提供很多内置方法  使 对盗墓集合的操作 变得更轻松
css
addClass 这些方法通过内置的遍历去操作每一个盗墓元素
遍历的两种情况
1.给集合中每一个盗墓元素设置同样的值或行为
2.给集合中的每一个盗墓元素设置不同的值或行为

````javascript
var colors=['red','blue','orange','black']




`````
1.$('li').attr('data-id');
2.$('li').attr('data-id','12');
3.$('li').attr('data-id,function(){
  return Math.random()
})
4.$('li').attr({data-id:12,data-src:'img.png'});
5.$('li').attr({
  data-id:function(){
  return Math.random()},
  data.src:'img.png'

});
6.以空格分割开的字符串  addClass('a b c')



###节点操作
*.clone()  拷贝后得到对象父元素等信息会丢失

参数：盗墓对象   盗墓集合  html规则的字符串  接口对象  回调函数
返回值：谁调用的返回谁
###给接口中的元素添加子元素
*.append()        添加到最后一个子元素之后
*.prepend()       添加到第一个子元素之前

###给接口对象中的元素添加兄弟元素
*.after()       添加到自己之后
*before()       添加到自己之前


参数：盗墓对象   盗墓集合  接口对象  '选择器'
返回值：谁调用的返回谁



###把接口对象作为子元素添加到某个元素中去
*.appendTo()   
*.prependTo()
###把接口对象作为兄弟元素添加到某个元素身前或身后
*insertAfter
*insertBefore