$('.icon-back').on('tap',function(){
    location.href = './info_developer.html'
})
//编辑文字时，右侧符号变为“完成”
//符号消失,文字添加
$('.info-content').on('tap',function(){
    $(this).parent('.info-cell').removeClass('info-after');
    $(this).parent('.info-cell').children('.finish').children('.end').removeClass('finish_none')
})
//符号添加，文字消失
$('.info-content').blur(function(){
    $(this).parent('.info-cell').addClass('info-after');
    $(this).parent('.info-cell').children('.finish').children('.end').addClass('finish_none')
})