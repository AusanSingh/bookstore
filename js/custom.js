
$(document).ready(function(){
  //Mobile version sidebar
    if ($(window).width() < 992) {
        $(".author-of-week h4, .book-of-year h4").on('click', function(event) {
            $(this).next(".list-unstyled").toggle('fast');
            $(this).toggleClass('active');
        });
    }
    
});

//Main Slider
$(function() {
  fr = new FilmRoll({
    container: '#film_roll'
  });
});
$(function() {
  $("#film_roll").swipe();
});

// Gallery filter 
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
