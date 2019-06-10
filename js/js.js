$(document).ready(function(){
  var docWidth = $('body').width(),
      $images = $('#imgs'),
      slidesWidth = $images.width();
  
  $(window).on('resize', function(){
    docWidth = $('body').width();
    slidesWidth = $('#imgs').width();
  })
  
  $(document).mousemove(function(e) {
    var mouseX = e.pageX,
        offset = mouseX / docWidth * slidesWidth - mouseX / 2;
    
    $images.css({
      '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
              'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
})

$(document).ready(function(){

   var $sm = 480;
   var $md = 768;

   function resizeThis() {
      $imgH = $('.middle img').width();
      if ($(window).width() >= $sm) {
         $('.left,.right,.section').css('height', $imgH);
      } else {
         $('.left,.right,.section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('.section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });

   $('.btn-primary').click(function(){
      alert('I lied');
   });
});

let thumbnails = document.getElementsByClassName('thumbnail');
let timeline = document.getElementsByClassName('thumbnail__timeline--progress');
let videos = document.querySelectorAll('video');
let loader = document.getElementsByClassName('thumbnail__loader');

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', () => {
    videos[i].play();
    timeline[i].style.transition = `width ${videos[i].duration}s linear`
    timeline[i].style.width = '100%'
  })
  thumbnails[i].addEventListener('mouseout', () => {
    videos[i].currentTime = 0;
    videos[i].pause();
    timeline[i].style.transition = `width 0s linear`
    timeline[i].style.width = '0%'
  })
}

for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener('loadeddata', function() {
    thumbnails[i].classList.add('thumbnail__loaded');
  }, false);
}


$(document).ready(function(){
  $(".labelImg").click(function(){
    var foto = $(this).css('background-image');
    $(".imgFull").css('background-image', foto);
    $(".lightbox").css("display","block");
  });

  $(".lightbox").click(function(){
    $(this).css("display","none");
 });
});

