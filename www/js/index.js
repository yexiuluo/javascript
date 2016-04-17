1.获取到所有的联系人数据=》数组中
如果本地有数据&&本地数据和数据库数据一致
把本地存储的数据放到数组中
如果本地没有数据，发送一次ajax请求，从数据到获取到信息放到数组中（提示用户初始化，请耐心等待，
一段时间后还没有成功，换个提示）
2.把数据渲染到页面中
先把联系人列表和右侧都清空，然后分析数组中的数据
分析数组中的数据，右侧按字母从小到大列处所有联系人的头字母，
左侧列表中按照字母分组展示所有的联系人，先遍历数组，构造一个字典{K:[X1,X2]}
遍历字典，用键去绘制右侧和左侧的头部
用值去绘制联系人列表
3.完成一些展示效果
点击右侧每一个字母，左边切换
在左侧滑动，右侧切换
左侧滑动，分组信息要留在顶部，实时更换
4.实现CURD
点击 + 号，弹出窗口 编辑电话和姓名
点击完成的时候发送一次ajax的请求，把信息传到数据库
然后服务器会返回id  我们把id+姓名+电话 保存到我们的数组中，同时也保存到本地存储中
重新绘制一次页面
删
在列表上向左滑动  出现删除 点击删除
发送一次ajax请求，把id发送过去
从数组中删掉这个id的数据
重新绘制一次页面

改
点击每个条目 弹出一个窗口
窗口中展示电话和姓名以及备注
添加一个编辑按钮，点击让所有的条目可编辑
点击完成的时候把数据发送给服务器，同时把数组中的数据也换掉
重新绘制一次页面

查（更新）
先把所有的数据取出来，和页面中的数据做比对
如果没有变化，什么都不做
如果有变化，页面中的数组换成服务器取回来的那个数组
重新绘制一次页面
var contacts=[
// {id:1001,name:'naruto',phone:13453468184},
// {id:1002,name:'zuozhu',phone:13453468185},
// {id:1003,name:'kakaxi',phone:13453468188},
// {id:1004,name:'zilaiye',phone:13453468182},
// {id:1005,name:'ying',phone:13453468183},
// {id:1006,name:'luwan',phone:13453468186},
// {id:1007,name:'you',phone:13453468187},
// {id:1008,name:'qou',phone:13453468187},
// {id:1009,name:'zilaiye',phone:13453468182},
// {id:1010,name:'ying',phone:13453468183},
// {id:1011,name:'luwan',phone:13453468186},
// {id:1012,name:'you',phone:13453468187},
]
    ajax('./js/students.json',function(data){
        // console.log(JSON.parse(data))
        document.body.innerHTML=data.response;
    })
var $findlist=document.querySelector('.findlist')
var $ul = $findlist.firstElementChild;
var $container=document.querySelector('.container')


var render = function(){
    $ul.innerHTML='';
    $contacts.innerHTML='';
   

var dict={}
contacts.forEach(function(v){
	var k = v.name[0].toUpperCase();
	if (!dict[k]) {
		 dict[k]=[]
	}
      
       dict[k].push(v)
})
console.log(dict)
var zimuliebiao=Object.keys(dict).sort();
zimuliebiao.forEach(function(v){
	//渲染右侧的字母
	//v每一个顺序大写字母
	var $li=document.createElement('li')
	$li.innerHTML='<a href="#'+v+'">'+v+'</a>';
	$ul.appendChild($li)
    //渲染左侧联系人
     
    var $dt=document.createElement('dt');
     $dt.id=v;
    $dt.innerHTML=v;
    $dt.classList.add('contacts')
    $dt.style.background='#bbaaaa';
    // $dt.style.padding='0px 20px 0px 5px';
    $container.appendChild($dt);
    dict[v].forEach(function(v){

    	var $dd=document.createElement('dd')
    	$dd.classList.add('contactsdd')
    $dd.innerHTML='<h5 class="name">'+v.name+'</h5><h6 class="phone">'+v.phone+'</h6>'
    	$container.appendChild($dd)

    })



     

})
$findlist.style.height = $ul.firstElementChild.offsetHeight*zimuliebiao.length  +'px';
}




var $tips=document.querySelector('.tips')
console.log($tips)
var $lianxiren=document.querySelector('.contacts')
 console.log($lianxiren)
$lianxiren.addEventListener('touchstart',function(e){
    console.log(e.target)
         if (e.target.nodeName==='DD'||e.target.nodeName==='DT') {
            $tips.style.display='block';
         };
})
// $tips.addEventListener('touchstart',function(e))