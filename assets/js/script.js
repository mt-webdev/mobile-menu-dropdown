/// <reference path="../..//bower_components/jquery/dist/jquery.js" />

(function() {
    
   var burger = $('.burger-container'),
   header = $('header');
   
   burger.click(function() {
       header.toggleClass('menu-open');
   });
}());
