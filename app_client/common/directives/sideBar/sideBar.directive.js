(function () {

  angular
    .module('BarberApp')
    .directive('sidebar', sideBar);
  var navIcon = ('#nav-icon2');
  var menu = ('.left-menu').sliiide({place: 'left', exit_selector: '.left-exit', toggle: '#nav-icon2', no_scroll: true});
  var notes = ('.note');
  var toggles = ('.slider-toggle');

  function sideBar () {
    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sideBar/sideBar.template.html'
    };
  }

  

var clickHandler = function() {
  
    var button = (this);
    if (button.hasClass('selected')) {return;}
    navIcon.removeClass('flip animated');
    notes.fadeOut(700);
    var place = button.attr('data-link').split('-')[0];
    var menuPlace = button.attr('data-link');
    var note;
    menu.reset();
    ('.sliding-menu').not('.'+menuPlace).addClass('display-off');
    button.addClass('selected');
    ('.slider-toggle').not(button).removeClass('selected');
    menu = ('.'+menuPlace).sliiide({place: place, exit_selector: '.'+place+'-exit', toggle: '#nav-icon2'});
    navIcon.addClass('flip');
    ('.note[data-link="'+menuPlace+'"]').fadeIn(700).css('display','').removeClass('display-off');
    ('.'+menuPlace).removeClass('display-off');
  
  
}
  toggles.on('click', clickHandler);



})();