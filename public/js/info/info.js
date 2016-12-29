/**未登录页面 */
$('.unlog_back').on('tap',function(){
    location.href = './info.html'
})
/**已登录页面*/
//点击跳转到设置页面
$('.header_img').on('tap',function(){
    location.href = './info_setting.html'
})
//点击跳转到个人资料页面
$('.edit_info').on('tap',function(){
    location.href = './info_developer.html'
})

//点击跳转到首页
$('.bottom-index').on('tap',function(){
    location.href = '../index/index.html'
})
//点击跳转到预约页面
//点击跳转到信息页面
/**设置页面 */
//点击返回"我"
$('.icon-back').on('tap',function(){
    location.href = './info_logged.html'
})
//点击跳转到设置关于页面
$('.set_about').on('tap',function(){
    location.href = './info_about.html'
})
//点击清除缓存
$('.set_clear').on('tap',function(){
    $('#set_cover').removeClass('cover_none');
    $('#set_out').removeClass('out_none');
})
$('.set_no').on('tap',function(){
    $('#set_cover').addClass('cover_none');
    $('#set_out').addClass('out_none');
})
$('.set_ok').on('tap',function(){
    $('#set_cover').addClass('cover_none');
    $('#set_out').addClass('out_none');
    document.getElementById('set_M').innerHTML = '0'
})
//点击退出登录
$('.setting_quit').on('tap',function(){
    location.href = './info.html'
})

//点击移动按钮
$('.set_move').on('tap',function(){
    if($(this).hasClass('move')){
        $(this).removeClass('move')
    }else{
        $(this).addClass('move')
    }
})

/**修改个人资料页面 */
//点击增添微信、营业执照或楼宇产证
$('.photo').on('tap',function(){
    if($('.photo-cells').hasClass('photos')){
        $('.photo-cells').removeClass('photos')
        $('.info-cover').removeClass('cover_edit')
    }
})
//点击取消
$('.photo-active').on('tap',function(){
    if(!$('.photo-cells').hasClass('photos')){
        $('.photo-cells').addClass('photos')
        $('.info-cover').addClass('cover_edit')
    }
})

//收藏
$('.s_left').on('tap',function(){
    location.href = './demand_coll.html'
})

//我发布的需求
$('.link_cell').on('tap',function(){
    location.href = './info_demand.html'
})

//我发布的房源


//我预约的房源
$('.link_cell-2').on('tap',function(){
    location.href = './house_order.html'
})

//历史交易
$('.link_cell-3').on('tap',function(){
    location.href = './info_history.html'
})

//过期房源
$('.link_cell-4').on('tap',function(){
    location.href = './info_overdue.html'
})

/**收藏页面 */
//点击需求
$('.banner_left').on('tap',function(){
    $(this).addClass('active');
    $('.banner_right').removeClass('active');
    $('.demand_cells').show();
    $('.house_coll').hide();
})
//点击房源
$('.banner_right').on('tap',function(){
    $(this).addClass('active');
    $('.banner_left').removeClass('active');
    $('.demand_cells').hide();
    $('.house_coll').show();
})
