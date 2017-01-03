$('.icon-back').on('tap',function(){
    location.href = './login.html'
})
$('.finish_ok').on('tap',function(){
    location.href = './login.html'
})
$('.btn_agent').on('tap',function(){
    location.href = './login_finish.html'
})
$('.icon-reg').on('tap',function(){
    location.href = './register.html'
})

$(window).on('keyup',function(){
    var tel = $('#tel').val();
    var pwd = $('#password').val();
    var againpwd = $('#againpwd').val();
    var code = $('#btnpin').val();
    var regTel = /^\d{11}$/;
    if(tel !='' && regTel.test(tel) && pwd.length>=6 && againpwd == pwd && code != ''){
        $('#btn_login').on('tap',function(){
            location.href = './developer.html'
        }).css('background','#ea5404');
        $('#btn_forget').on('tap',function(){
            location.href = './login.html'
        }).css('background','#ea5404');
    }
})

function sendPin(){
    var step = 59;
    $('#btnpin').val('获取验证码');
    var _res = setInterval(function(){
        $('#btnpin').attr('disabled',true);
        $('#btnpin').val(step + "后重新获取");
        $('#btnpin').addClass('btn_ok');
        step -=1;
        if(step<=0){
            $('#btnpin').removeAttr('disabled');
            $('#btnpin').val('获取验证码');
            clearInterval(_res);
        }
    },1000)
}

var $selectTitle = $('.select-title');
var $selectList = $('.select-list')
$selectTitle.on('tap',function(){
    $(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap', function(){
   var $self = $(this);
   var $parent = $self.parent('.select-list');
   var text = $self.text();
   var val = $self.data('val');
   console.log(text, val);
   $parent.siblings('.select-title').text(text).data('val', val);
   $parent.hide();
});