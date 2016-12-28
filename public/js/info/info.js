/**未登录页面 */
$('.unlog_back').on('tap',function(){
    location.href = './info.html'
})
/**已登录页面*/
//点击跳转到设置页面
$('.header_img').on('tap',function(){
    location.href = './info_setting.html'
})
//点击修改个人资料
$('.edit_info').on('tap',function(){
    location.href = './info_developer_edit.html'
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
    var photos = document.getElementById("photos");
    /**
    if($('.photo-cells').style.display == 'none'){
        $('.photo-cells').style.display == 'block'
    }else{
        $('.photo-cells').style.display == 'none'
    } */
    if(photos.style.display == 'none'){
        //photos.style.display == 'block'
        console.log(1)
    }else{
        photos.style.display == 'block'
        console.log(2)
    }
})

