//跳转到首页
$('.bottom-index').on('tap',function(){
    location.href = '../index/index.html'
})

//跳转到信息
$('.bottom-info').on('tap',function(){
    location.href = '../msg/msg_info.html'
})

//跳转到"我"的页面
$('.bottom-me').on('tap',function(){
    location.href = '../info/info_logged.html'
})


//接单
$('.btn_receive').on('tap',function(){
    //$(this).css('width','90px').css('background','#fff').css('color','#646464').text('已接单，待反馈').css('text-align','right');
    $(this).addClass('also_house').addClass('house_received').text('已接单，待反馈').removeClass('btn_receive');
})

//左滑
$('.subscribe_cell').on('swipeLeft',function(){
    $(this).css('left','-68px');
    $(this).find('.delete').css('display','block').css('right','-68px');
    $('.subscribe_cell').not($(this)).css('left','0');
    $('.subscribe_cell').not($(this)).find('.delete').hide();
}).on('swipeRight',function(){
    $(this).css('left','0');
    $(this).find('.delete').hide();
})
//删除
$('.delete').on('tap',function(){
    $(this).parent().remove();
})


//点击收藏
$('.icon_collect').on('tap',function(){
    if($(this).hasClass('icon_active')){
        $(this).removeClass('icon_active')
    }else{
        $(this).addClass('icon_active')
    }
})
//返回首页
$('.icon-back').on('tap',function(){
    location.href = '../index/index.html'
})
//预约看房
$('.house_order').on('tap',function(){
    location.href = '../info/sub_house.html'
})
//返回房屋详情
$('.house_back').on('tap',function(){
    location.href = '../order/building.html'
})
//点击预约看房
$('.house_edit').on('tap',function(){
    $('.order_out').css('display','block')
})
//预约确定
$('.sub_sure').on('tap',function(){
    location.href = '../order/subscribe_success.html'
})
$('.sub_no').on('tap',function(){
    $('.order_out').css('display','none')
})
//预约成功
$('.success_back').on('tap',function(){
    location.href = '../order/building.html'
})
//查看
$('.success_check').on('tap',function(){
    location.href = '../info/house_order.html'
})

//查看预约详情
$('.house_img').on('tap',function(){
    if($(this).parent().children('.house_info').children('.also_house').hasClass('house_received')){
        location.href = './order_info.html'
    }
})
//接单
$('.house_img').on('tap',function(){
    if($(this).parent().children('.house_info').children('.also_house').hasClass('btn_receive')){
        location.href = './order_sub.html'
    }
})
//电话
$('.order_tel').on('tap',function(){
    $('.cover').css('display','block');
    $('.order_out').css('display','block')
})
$('.take_back').on('tap',function(){
    location.href = './subscribe.html'
})
$('.take_no').on('tap',function(){
    $('.cover').css('display','none');
    $('.order_out').css('display','none')
})
$('.take_sure').on('tap',function(){
    $('.cover').css('display','none');
    $('.order_out').css('display','none')
})
$('.receive_btn').on('tap',function(){
    location.href = './order_info.html'
})
$('.order_back').on('tap',function(){
    location.href = './subscribe.html'
})
//达成
$('.reach_upload').on('tap',function(){
    location.href = './upload.html'
})
//上传
$('.upload_sure').on('tap',function(){
    $('.cover').css('display','block');
    $('.upload_success').css('display','block')
})
$('.upload_yes').on('tap',function(){
    location.href = './order_info.html'
})
$('.upload_cancle').on('tap',function(){
    $('.cover').css('display','block');
    $('.upload_no').css('display','block')
})
$('.sure_cancle').on('tap',function(){
    $('.cover').css('display','none');
    $('.upload_no').css('display','none')
})
$('.sure_sure').on('tap',function(){
    location.href = './order_info.html'
})
$('.order_cancle').on('tap',function(){
    location.href = './order_cancle.html'
})
//其他原因
$('.order_box').on('tap',function(){
    if(!$(this).hasClass('order_active')){
        $(this).addClass('order_active');
    }else{
        $(this).removeClass('order_active');
    }
})
$('.other_box').on('tap',function(){
    if(!$(this).hasClass('order_active')){
        $(this).addClass('order_active');
        $('.cancle_input').css('display','block')
    }else{
        $(this).removeClass('order_active');
        $('.cancle_input').css('display','none')
    }
})
$('.reason_back').on('tap',function(){
    location.href = './order_info.html'
})
//确定取消
$('.reason_sure').on('tap',function(){
    $('.cover').css('display','block');
    $('.reason_success').css('display','block')
})
$('.reason_ok').on('tap',function(){
    location.href = './subscribe.html'
})
//预约改期
$('.update_time').on('tap',function(){
    location.href = './order_update.html'
})
//取消
$('.update_cancle').on('tap',function(){
    location.href = './order_info.html'
})
//确定
$('.update_sure').on('tap',function(){
    $('.cover').css('display','block');
    $('.update_out').css('display','block');
})
$('.update_ok').on('tap',function(){
    location.href = './order_info.html'
})