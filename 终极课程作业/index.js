var wrap = document.getElementsByClassName('wrap')[0];
var num = document.getElementsByClassName('num')[0];
var i=0;
var images=wrap.getElementsByTagName('a');
var nav=document.getElementsByClassName('nav1')[0];
var li=nav.getElementsByTagName('li');//获取下拉表单元素
var box=document.getElementById('box');
var fon=document.getElementById('fon');//获取上弹方块
function imgtab(){
	images[i%11].style.display ='none';
	i++;
	images[i%11].style.display ='block';
}
var timer =setInterval(imgtab,1500);
wrap.onmouseover = function(){
	clearInterval(timer)
}
wrap.onmouseout = function(){
	timer=setInterval(imgtab,1500)
}//图片轮播
for(i=0;i<li.length;i++)
{
	li[i].onmouseover=function(){
		this.className="nav2";
	}
	li[i].onmouseout=function(){
	this.className="";
	}
}//下拉列表
box.onmouseover=function(){
	var repeat=50;
	var timer=setInterval(function(){
		if(repeat==0){
			clearInterval(timer);
		}
		else{
			fon.style.height=parseInt(fon.style.height)+2+'px';
			
			repeat--;
		}
	},1);
	fon.style.display='block';
}
box.onmouseout=function(){
	var repeat=0;
	var timer=setInterval(function(){
		if(repeat==50){
			clearInterval(timer);
		}
		else{
			fon.style.height=parseInt(fon.style.height)-2+'px';
			repeat++;
		}
	},1);
	fon.style.display='none';
}//弹出层