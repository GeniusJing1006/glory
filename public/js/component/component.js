var $radioList = $('.radio_box .radio_block');
$radioList.on('click',function(){
    //console.log($(this).index())
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioList.removeClass('selected');
        $self.addClass('selected');
    }
});
/** 
var $selectTitle = $('.select-title');
var $selectList = $('.select-list')
$selectTitle.on('tap',function(){
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
$resTitle.on('click',function(){
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