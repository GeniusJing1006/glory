//弹出发布蒙版
$('.bottom-more').on('tap',function(){
    $('.publish_cover').removeClass('publish_none');
    $('.publish').removeClass('publish_none');
    $('.publish_bottom').removeClass('publish_none');
    $('.publish_close').removeClass('publish_none');
})
//关闭
$('.publish_close').on('tap',function(){
    $('.publish_cover').addClass('publish_none');
    $('.publish').addClass('publish_none');
    $('.publish_bottom').addClass('publish_none');
    $('.publish_close').addClass('publish_none');
})

//发布需求跳转
$('.demand').on('tap',function(){
    location.href = '../component/publish_demand.html'
})
//发布房源跳转
$('.resource').on('tap',function(){
    setTimeout(function(){
        location.href = '../component/publish.html'
    },600)
})