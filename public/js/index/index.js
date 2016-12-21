//点击跳转到已登录
$('.bottom-me').on('tap',function(){
    location.href = '../info/info_logged.html'
})

/**轮播图 */
//获取轮播每个元素
var $slider = $('.slider_block');
//获取轮播容器
var $sliderCon = $('.slider_container');
//获取所有的点
var $point = $('.point_block');

//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $slider.length;
//计算容器宽度
var allWd = wd * lg;
//计算元素高度
var hg = wd * 0.85;
//设置容器宽度
$sliderCon.width(allWd);
//设置元素宽高
$slider.width(wd).height(hg);

//表示当前元素
var swipeNow = 0;
var slideTime;
//添加滑动事件
$sliderCon.on('swipeLeft', function(){
    clearTimeout(slideTime);
    if(swipeNow < lg - 1){
        //计算滑动距离，改变当前元素
        var swipeWd = (++swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
$sliderCon.on('swipeRight', function(){
    clearTimeout(slideTime);
    if(swipeNow > 0){
        //计算滑动距离，改变当前元素
        var swipeWd = (--swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});

function autoSwipe(){
    slideTime = setTimeout(function(){
        if(swipeNow < lg - 1){
            //计算滑动距离，改变当前元素
            var swipeWd = (++swipeNow) * wd;
            $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
            //改变点的选中
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    }, 2000);
}
autoSwipe();

var $queryBlock = $('.query_block')
$('.query_block').on('tap',function(){
    var $self = $(this);
    var index = $(this).index();
    if($self.hasClass('active')){
        $self.removeClass('active')
    }else{
        $queryBlock.removeClass('active')
        $self.addClass('active')
        $('.down-box').hide().eq(index).show();
    }
})

/**价格升降 */
$('#price').on('tap',function(){
    if($(this).hasClass('asc_price')){
        $(this).removeClass('asc_price').addClass('desc_price');
        $('#prinfo').removeClass('price-info');
        $('#descinfo').removeClass('price_none')
        $('#ascinfo').addClass('price_none')
    }else if($(this).hasClass('desc_price')){
        $(this).removeClass('desc_price');
        $('#prinfo').addClass('price-info');
    }else{
        $(this).addClass('asc_price')
        $('#prinfo').removeClass('price-info');
        $('#descinfo').addClass('price_none')
    }
})


/**点击收藏 */
$('.index_img').on('tap',function(){
    if($(this).hasClass('index_collect')){
        $(this).removeClass('index_collect');
    }else{
        $(this).addClass('index_collect');
    }
    
})


/**返回顶部*/
window.onload = function(){
  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  window.onscroll = function(){
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  }
  $('#backtop').on('tap',function(){
     document.documentElement.scrollTop = document.body.scrollTop =0;
  })
}  

