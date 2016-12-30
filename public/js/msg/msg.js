//跳转到首页
$('.bottom-index').on('tap',function(){
    location.href = '../index/index.html'
})

//跳转到预约页面
$('.bottom-pre').on('tap',function(){
    location.href = '../order/subscribe.html'
})

//跳转到已登录页面
$('.bottom-me').on('tap',function(){
    location.href = '../info/info_logged.html'
})

//切换
$('.tab_bar-cell').on('tap',function(){
    $(this).addClass('active')
    $('.tab_bar-cell').not($(this)).removeClass('active')
})
$('.info').on('tap',function(){
    $('.info_cells').show();
    $('.notice_cells').hide();
    $('.demand_list').hide();
})
$('.notice').on('tap',function(){
    $('.info_cells').hide();
    $('.notice_cells').show();
    $('.demand_list').hide();
})
$('.demand').on('tap',function(){
    $('.info_cells').hide();
    $('.notice_cells').hide();
    $('.demand_list').show();
})
