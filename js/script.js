$(function(){
    $('.skills').myskillbar({});



    /* $gallOpen.on('click',function(event){
      event.preventDefault();
      var src = $(this).attr('href');
  
      $gallImg.css({
        backgroundImage : 'url('+src+')'
      }).parent().fadeIn();
    });
  
    $gallClose.on('click',function(event){
      event.preventDefault();
      $gall.fadeOut();
    });
  
    $gall.on('click',function(){
      $gall.fadeOut();
    });//end of design */

    $('.pop').click(function(e){
      e.preventDefault();
      $('.popup').fadeIn(500);
  });
  $('.close').click(function(){
      $('.popup').fadeOut(500);
  });
  $('.pop2').click(function(e){
    e.preventDefault();
    $('.popup2').fadeIn(500);
});
$('.close').click(function(){
    $('.popup2').fadeOut(500);
});

$('.pop3').click(function(e){
    e.preventDefault();
    $('.popup3').fadeIn(500);
});
$('.close').click(function(){
    $('.popup3').fadeOut(500);
});
});
