/**
 * Created by Administrator on 2016/12/7 0007.
 */
var startX,startY,moveX,moveY,times= 0,timeOut;
var dom =document.getElementsByClassName('md')[0];

dom.addEventListener('touchstart',function(e){
		console.log('touchstart');
		var th =e.touches[0];
		startX = th.clientX;
		startY = th.clientY;
	});
dom.addEventListener('touchmove',function(e){
		console.log('touchmove');
		timestamp =0;
		timeOut = setInterval(function(){
			times+=100;
		},100);
		var th =e.touches[0];
		moveX = th.clientX;
		moveY = th.clientY;
	});
dom.addEventListener('touchend',function(e){
		console.log('touchend');
		if(moveY -startY>=100){
			dom.style.color ='red';
		}else if(startY-moveY>=100){
			dom.style.color ='#cecece';
		}
		var fontSize =parseInt(window.getComputedStyle( document.getElementsByClassName('md')[0]).fontSize);
		console.log(fontSize);

		if(moveX -startX>=100){
			fontSize+=2;
			document.getElementsByClassName('md')[0 ].style.fontSize =fontSize+'px';
		}else if(startX-moveX>=100){
			fontSize-=2;
			document.getElementsByClassName('md')[0 ].style.fontSize =fontSize+'px';
		}
		clearInterval(timeOut);

		if(times>=1000){
			console.log('tap');
		}
	});