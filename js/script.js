$(function() {
	$('.logo').click(function(){
    swiper1.slideTo( $('.main').index(),600,false );
    $('.nav *').css('color', 'white');
    $('.logo').css('background-image', 'url(./img/mz.png)');
	});

	$('.nav-dev').click(function(){
    swiper1.slideTo( $('.dev').index(),600,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/mz-black.png)');
	});
	
	$('.nav-design').click(function(){
    swiper1.slideTo( $('.design').index(),600,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/mz-black.png)');
	});
	
	$('.nav-about').click(function(){
    swiper1.slideTo( $('.about').index(),600,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/mz-black.png)');
	});
	
	$('.nav-contact').click(function(){
    swiper1.slideTo( $('.contact').index(),600,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/mz-black.png)');
	});
});

$(function(){
    $(".flip-h").flip({
        trigger: 'hover'
    });
    $(".flip-v").flip({
        trigger: 'hover',
        axis: 'x'
    });
});

$(function() {
     $(".contact-form").submit(function(e) {
      var name = $('.name');
      var email = $('.email');
      var message = $('.message');
      console.log(name.val()+" "+email.val()+" "+message.val());
    
      $.ajax({
          method: 'POST',
          url: '//formspree.io/yujiac8000@gmail.com',
          data: $('.contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.success').fadeToggle(400);
    });
  
  $('.fail, .success').click(function() {
    $(this).hide();
  })
});