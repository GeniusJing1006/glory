/**已登录页面*/
$('.header_img').on('tap',function(){
    location.href = './info_setting.html'
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




