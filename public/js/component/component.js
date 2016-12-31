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
$resList.find('.resource_li').on('tap',function(){
    var $self = $(this);
    var $parent = $self.parent('.resource_list');
    var text = $self.text();
    var val = $self.data('val');
    $parent.siblings('.res_list').text(text).data('val',val);
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

//确认发布
$('.header_sure').on('tap',function(){
    $('.cover').css('display','block');
    $('.publish_success').css('display','block');
})
$('.publish_sure').on('tap',function(){
    setTimeout(function(){
        location.href = '../info/info_demand.html'
    },800)
})
//取消发布
$('.header_cancle').on('tap',function(){
    $('.cover').css('display','block');
    $('.publish_cancle').css('display','block');
    $('.resource_out').css('display','block');
})
$('.cancle_sure').on('tap',function(){
    setTimeout(function(){
        location.href = '../index/index.html'
    },800)
})
$('.order_no').on('tap',function(){
    $('.cover').css('display','none');
    $('.publish_cancle').css('display','none');
    $('.resource_out').css('display','none');
})
$('.resource_sure').on('tap',function(){
    setTimeout(function(){
        location.href = '../index/index.html'
    },800)
})
//确认发布
$('.btn_res').on('tap',function(){
    $('.cover').css('display','block');
    $('.publish_out').css('display','block');
})
$('.publish_sure').on('tap',function(){
    setTimeout(function(){
        location.href = '../info/house_publish.html'
    },800)
})
//搜索框
$('.search_input').on('focus',function(){
    $('.search_close').css('display','inline-block')
})
$('.search_input').on('blur',function(){
    $('.search_close').css('display','none')
})
$('.search_close').on('tap',function(){
    document.getElementById("search").value = ''
})
//新增楼盘
$('.house_add').on('tap',function(){
    location.href = './publish_houseadd.html'
})
//返回
$('.icon-back').on('tap',function(){
    location.href = './publish.html'
})
$('.demand_push').on('tap',function(){
    if($('.demand_add').val() != ''){
        $('.cover').css('background','#a7a7aa').css('display','block');
        $('.house_add').css('display','block');
    }
})
$('.house_sure').on('tap',function(){
    location.href = './publish.html'
})