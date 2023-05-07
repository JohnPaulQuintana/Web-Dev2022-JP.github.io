 console.log('connected')
 // Animate about section when scrolling down
 $(window).scroll(function() {
    var aboutTop = $('#about').offset().top;
    var windowHeight = $(window).height();
    if (aboutTop < (windowHeight - 100)) {
      $('#about').addClass('show');
    }
  });