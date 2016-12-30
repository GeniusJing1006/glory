var $radioList = $('.radio_box .radio_block');
$radioList.on('tap',function(){
    //console.log($(this).index())
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioList.removeClass('selected');
        $self.addClass('selected');
    }
});

var $radioLi = $('.res_radio .radio_block');
$radioLi.on('tap',function(){
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioLi.removeClass('selected');
        $self.addClass('selected');
    }else{
        $self.removeClass('selected')
    }
});

var $radioLi = $('.res_radio2 .radio_block');
$radioLi.on('tap',function(){
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioLi.removeClass('selected');
        $self.addClass('selected');
    }else{
        $self.removeClass('selected')
    }
});

var $radioLi = $('.res_radio3 .radio_block');
$radioLi.on('tap',function(){
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioLi.removeClass('selected');
        $self.addClass('selected');
    }else{
        $self.removeClass('selected')
    }
});

/**
var $selectTitle = $('.select-title');
var $selectList = $('.select-list')
$selectTitle.on('click',function(){
    $(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap',function(){
    var $self = $(this);
    var $parent = $self.parent('.select-list');
    var text = $self.text();
    var val = $self.data('val');
    //console.log(text.val);
    $parent.siblings('.select-title').text(text).data('val',val);
    $parent.hide();
})
*/


var $resTitle = $('.res_list');
var $resList = $('.resource_list');
$resTitle.on('tap',function(){
    $(this).siblings('.resource_list').toggle();
});
$resList.find('resource_li').on('click',function(){
    var $self = $(this);
    var $parent = $self.parent('.resource_list');
    var text = $self.text();
    var val = $self.data('val');
    $parent.siblings('res_list').text(text).data('val',val);
    $parent.hide();
})

//点击文本框，文字消失
$('.demand_info').on('focus',function(){
    if(this.value == this.defaultValue) {
        this.value='';
        $(this).css('color','#646464');
    }
})
$('.demand_info').on('blur',function(){
    if(this.value == '') {
        this.value=this.defaultValue;
        $(this).css('color','#b4b4b4');
    }
})
//input字体颜色
$('.demand_input').on('focus',function(){
    if(this.value == this.defaultValue) {
        $(this).css('color','#b4b4b4');
    }
})


