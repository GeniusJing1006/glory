$('.bt-reg').on('tap',function(){
    location.href = './register.html'
})
$('.bt-passwd').on('tap',function(){
    location.href = './forget.html'
})
$('.icon-back').on('tap',function(){
    location.href = '../loading.html'
})


$(window).on('keyup',function(){
    var tel = $('#tel').val();
    var pwd = $('#password').val();
    var regTel = /^\d{11}$/;
    if(tel !='' && regTel.test(tel) && pwd.length>=6){
        $('#btnlogin').on('tap',function(){
            location.href = '../index/index.html'
        }).css('background','#ea5404')
    }
})