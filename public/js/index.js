
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
        
        console.log(times)
		if(times>=1000){
			console.log('tap');
		}
	});

    // //创建一个xhr 实例
    // var xhr = new XMLHttpRequest();
    // //打开一个连接 请求方式，请求路径
    // xhr.open('http://127.0.0.1:9888/index');//122.10.30.153:9901
    // //发送请求
    // xhr.send();
    // //监听状态变更
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState === 200 || xhr.readyState === 4){   //这两个都代表请求完成
    //         console.log('success',JSON.parse(xhr.response));
    //     }
    // }
    
    
    $.ajax({
        url:'/api/index',
        type:'get',
        dataType:'json',
        success:function(result){
            console.log('result',result)
        },
        complete:function(res){
            console.log('res',res)
        }
    })
	