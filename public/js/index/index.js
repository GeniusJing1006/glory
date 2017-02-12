//跳转到预约页面
$('.bottom-pre').on('tap',function(){
    location.href = '../order/subscribe.html'
})

//跳转到信息
$('.bottom-info').on('tap',function(){
    location.href = '../msg/msg_info.html'
})

//跳转到已登录页面
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


/**点击搜索 */
$('.search_input').on('tap',function(){
    location.href = './index_search.html'
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

/**选择区域 */
//点击展开或收起下拉菜单
var $queryBlock = $('.query_block')
$('.query_block').on('tap',function(){
    var $self = $(this);
    var index = $(this).index();
    if($self.hasClass('active')){
        $self.removeClass('active');
        //$queryBlock.not($self).addClass('active');
        $('.down-box').hide();
        $self.children('.icon').removeClass('icon_active');
        $('.back_top').show();
        $('.index_cover').hide();
        $self.children('.text').css('color','#646464')
    }else{
        //$queryBlock.removeClass('active');
        $self.addClass('active');
        $queryBlock.not($self).removeClass('active');
        $('.down-box').hide().eq(index).show();
        $self.children('.icon').addClass('icon_active');
        $('.back_top').hide();
        $('.index_cover').show();
        $self.children('.text').css('color','#ea5404')
    }
})

/**"区域"-area下拉界面 */
//选中左边地区，使其背景变成白色
$('.area_li').on('tap',function(){
    $(this).addClass('area_choose');
    $('.area_li').not(this).removeClass('area_choose');
})
//选中“浦东”时，右侧出现浦东的街道，选中其他地区时，右侧街道消失
$('.area_list li.area_pd').on('tap',function(){
    $('.area_right').removeClass('area_none');
})
$('.area_list li.area_li').not($('.area_pd')).on('tap',function(){
    $('.area_right').addClass('area_none');
})
//选中右侧街道时收起下拉区域，并将街道传到区域框中
$('.right_li').on('tap',function(){
    var area = $(this).text();
    $('.query_area').text(area);
    $('.block_area').removeClass('active').children('.icon').removeClass('icon_active');
    $('.down_area').hide();
    $('.index_cover').hide();
    $('.back_top').show();
})

/**"面积"-proportion下拉界面 */
//选择一个面积，背景变白色
$('.proportion_li').on('tap',function(){
    $(this).addClass('area_choose');
    $('.proportion_li').not(this).removeClass('area_choose');
})
//将选中的值传到面积中并收起下拉区域
$('.proportion_li').on('tap',function(){
    var val = $(this).text();
    $('.query_proportion').text(val);
    $('.block_proportion').removeClass('active').children('.icon').removeClass('icon_active')
    $('.down_proportion').hide();
    $('.index_cover').hide();
    $('.back_top').show();
})
//输入框中的值传到面积中，点击"确定"按钮收起下拉区域
$('.fill_sub').on('tap', function(){
    var reg = /^\d{0,6}$/;
    var min = $('.min').val();
    var max = $('.max').val();
    //console.log(min<max)
    if(reg.test(min) && reg.test(max) && min<=max){
        $('.query_proportion').text(min+'-'+max+'m2');
        $('.block_proportion').removeClass('active').children('.icon').removeClass('icon_active')
        $('.down_proportion').hide();
        $('.index_cover').hide();
        $('.back_top').show();
    }
})

/**单价-price */
//选择一个面积，背景变白色
$('.price_li').on('tap',function(){
    $(this).addClass('area_choose');
    $('.price_li').not(this).removeClass('area_choose');
})
//将选中的值传到面积中并收起下拉区域
$('.price_li').on('tap',function(){
    var val = $(this).text();
    $('.price_text').text(val).css('font-size','12px');
    $('.block_price').removeClass('active').children('.icon').removeClass('icon_active')
    $('.down_price').hide();
    $('.index_cover').hide();
    $('.back_top').show();
})
//输入框中的值传到面积中，点击"确定"按钮收起下拉区域
$('.fill_refer').on('tap', function(){
    var reg = /^\d{0,5}$/;
    var minprice = $('.minprice').val();
    var maxprice = $('.maxprice').val();
    //console.log(min<max)
    if(reg.test(minprice) && reg.test(maxprice) && minprice<=maxprice){
        $('.price_text').text(minprice+'-'+maxprice+'元/m2/天');
        $('.block_price').removeClass('active').children('.icon').removeClass('icon_active')
        $('.down_price').hide();
        $('.index_cover').hide();
        $('.back_top').show();
    }
})

/**更多-more */
//选中左边地区，使其背景变成白色
$('.more_li').on('tap',function(){
    $(this).addClass('area_choose');
    $('.more_li').not(this).removeClass('area_choose');
})
//点击更多下拉区域
$('.block_more').on('tap',function(){
    $('.down_more').css('height','420px')
})
//点击地铁，出现右侧选项
$('.more_tube').on('tap',function(){
    $('.tube').removeClass('status');
    $('.type').addClass('status');
    $('.fitment').addClass('status');
    $('.down_more').css('height','420px')
})
//点击房型，出现右侧选项
$('.more_type').on('tap',function(){
    $('.tube').addClass('status');
    $('.type').removeClass('status');
    $('.fitment').addClass('status');
    $('.down_more').css('height','370px')
})
//点击装修，出现右侧选项
$('.more_fitment').on('tap',function(){
    $('.tube').addClass('status');
    $('.type').addClass('status');
    $('.fitment').removeClass('status');
    $('.down_more').css('height','280px')
})
//将选中的值传到更多中并收起下拉区域
$('.tube_li').on('tap',function(){
    var val = $(this).text();
    $('.more_text').text(val).css('font-size','12px');
    $('.block_more').removeClass('active').children('.icon').removeClass('icon_active')
    $('.down_more').hide();
    $('.index_cover').hide();
    $('.back_top').show();
})
$('.type_li').on('tap',function(){
    var val = $(this).text();
    $('.more_text').text(val).css('font-size','12px');
    $('.block_more').removeClass('active').children('.icon').removeClass('icon_active')
    $('.down_more').hide();
    $('.index_cover').hide();
    $('.back_top').show();
})
$('.fitment_li').on('tap',function(){
    var val = $(this).text();
    $('.more_text').text(val).css('font-size','12px');
    $('.block_more').removeClass('active').children('.icon').removeClass('icon_active')
    $('.down_more').hide();
    $('.index_cover').hide();
    $('.back_top').show();
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

/**选择城市 */
$('.city_back').on('tap',function(){
    location.href = './index_city.html'
})
//关闭
$('.icon-close').on('tap',function(){
    location.href = './index.html'
})
//选择城市
$('.city_li').on('tap',function(){
    //console.log($(this).text())
    var val = $(this).text();
    location.href = './index.html'
    $('.icon-back').text(val);
})


/**搜索页面 */
//点击取消，返回主页
$('.search_del').on('tap',function(){
    location.href = './index.html'
})
//点击清除
$('.near_right').on('tap',function(){
    $('.search_cells').remove();
})

//详情
$('.img_box').on('tap',function(){
    location.href = '../order/building.html'
})
