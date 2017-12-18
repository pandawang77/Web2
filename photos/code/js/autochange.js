window.onload=function(){
	var pic=document.getElementById("picScroll");
	var pic1=document.getElementById("picScroll1");
	var l=setInterval(changeToLeft,10);	
	function changeToLeft(){
		if(pic.scrollLeft>=pic1.offsetWidth){
			pic.scrollLeft=0;
		}	
		else{
			pic.scrollLeft+=1;
		}	   
	}		
	pic.onmouseover=function(){
		clearInterval(l);
	}
	pic.onmouseout=function(){
		l=setInterval(changeToLeft,10);
	}
}