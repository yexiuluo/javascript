#DOM是什么
>Document Object Modal(文档对象模型)
>我们在页面中看到的 div,span,p,h1 等等元素文字
>在javaScript 严重都是一个对象

# 从一个web应用的开发说起

>第一步，从页面中去选取一个元素出来
>当我们的代码在浏览器中去运行时，
>浏览器已经帮我们创建了很多对象，
>对象中有很多方法，可供我们使用
>这些东西都在一个叫做window的全局变量里


>window对象中的属性，可以省略window. 去调用

>选取元素，我们从window.document开始

##选取元素的方式
*document.querySelector()
*document.getElementById()

*document.querySelectorAll()
*document.getElementsByClassName()
*document.getElementsByName()
*document.getElementsByTagName()
这些方法的返回结果是什么？
前两个返回结果是一个代表了页面中某个元素的对象
我们把它叫做DOM对象
后4个返回结果是类数组对象
我们把它叫做DOM集合
```javascript
var obj={
	0：DOM对象，
1：DOM对象，
.......
length:12;
}
```````````````
##DOM对象中的常用的属性和方法

<!-- mdn + 关键字 -->
### Object
*toString()
*valueOf()

###EventTarget
*addEventListener()
*removeEventListener()
*dispatchEvent()

###Node
*appendChild()
*childNodes
*cloneNode()
*compareDocumentPosition()
*contains()
*firstChild
*hasChildNodes()
*insertBefore
*lastChild
*nextSibling
*nodeName
*nodeType
*nodeValue
*parentElement
*parentNode
*priviousSibling
*removeChild()
*replaceChild()
*textContent

###Element
*children
*classList
*className
*firstElementChild
*getAttribute()
*getBoundingClientRect()
*getElementsByClassName()
*getElementsByTagName()
*hasAttribute()
*id
*lastElementChild
*nextElementSibling
*outerHTML
*previousElementSibling
*querySelector()
*queryselectorAll()
*removeAttribute()
*setAttribute()
*scrollLeft
*scrollTop
*tagName


###HTMLElement
*innerText
*offsetHeight
*offsetLeft
*offsetWidth
*offsetParent
*offsetTop
*style

## HTML xxxElement
*value
*checked
*src
*focus()





