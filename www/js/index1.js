//获取所有联系人数据，构建核心数据结构

var contacts=[];
var $findlist = document.querySelector('.findlist')
var $ul = $findlist.firstElementChild;
var $dl = document.querySelector('.contacts')
var $tips = document.querySelector('.tips')
var $cancle = document.querySelector('.cancle')
var $add = document.querySelector('.add')
var $zuzhi = document.querySelector('#zuzhi')
var $done = document.querySelector('.done')
var $inputName = $tips.querySelector('input[name=name]')
var $inputPhone = $tips.querySelector('input[name=phone]')
var $inputBeizhu = $tips.querySelector('input[name=beizhu]')
var $delete = document.querySelector('.delete')



if (localStorage.data) {
	contacts=JSON.parse(localStorage.data)
	render()
}else{
  $.ajax('/php/huoqulianxiren.php',function(data){
         contacts=JSON.parse(data)
         localStorage.data=JSON.stringify(contacts)
         render()
  })
}


function render(){
	$ul.innerHTML='';
	$dl.innerHTML='';
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
     	var $li = document.createElement('li')
     	   $li.innerHTML = '<a href="#'+v+'">'+v+'</a>'
       $ul.appendChild($li)

       $dt = document.createElement('dt')
          $dt.id = v;
       $dt.innerHTML = v;
       $dt.classList.add('contacts')
     $dl.appendChild($dt)
     dict[v].forEach(function(v){
     	 $dd = document.createElement('dd')
  $dd.innerHTML = '<h5 class="name">'+v.name+'</h5><h6 class="phone">'+v.phone+'</h6><a href="" data-id="'+v.id+'"></a'
      $dd.classList.add('contactsdd')
     $dl.appendChild($dd)
     })
    
     })
     $findlist.style.height = $ul.offsetHeight + 'px';

    
      
} 

function show(){
	$tips.style.display='block';
}
function hide(){
	$tips.style.display = 'none';
}
function stop(e){
	e.stopPropagation()
}
// $dl.addEventListener('click',show)
$cancle.addEventListener('click',hide)
$add.addEventListener('click',show)
$add.addEventListener('click',function(){
	$delete.style.display='none'
})
$tips.addEventListener('click',hide)
// $zuzhi.addEventListener('click',function(e){
// 	e.stopPropagation()
// })
$zuzhi.addEventListener('click',stop)
//新增联系人
$done.addEventListener('click',function(){
	$done.innerHTML = '保存中···'
	var name= document.querySelector("input[name=name]").value;
	var phone = document.querySelector('input[name=phone]').value;
	var beizhu = document.querySelector('input[name=beizhu]').value;
	if (!name|| !phone) {return};
	var url = '/php/xinzeng.php?name='+name+'&phone='+phone+'&beizhu='+beizhu;
	$.ajax(url,function(data){
		hide();
		$done.innerHTML='完成'
		contacts.push({id:data,name:name,phone:phone,beizhu:beizhu});
		localStorage.data = JSON.stringify(contacts);
		hide()
		$inputName.value=$inputPhone.value=$inputBeizhu.value='';
		$delete.style.display='block'
		render()
	})
})
//删除联系人
// $dl.addEventListener('touchstart',function(e){
//    e.target.getAttribute('data-id')
// })