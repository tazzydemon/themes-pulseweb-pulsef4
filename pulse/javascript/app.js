(function ($, window, document, undefined) {
    'use strict';

    var mql = window.matchMedia("screen and (max-width: 768px)")
    if(mql){
      //  console.log('small');
      //  $('.slideshow-wrapper ul').removeAttr('data-orbit');
    }


    // Initialize Foundation
    $(document).foundation();

    // Kitchen sink joyride demo
/*
    $('#start-jr').on('click', function () {
        $(document).foundation('joyride', 'start');
    });
*/

   // $.fn.foundationMediaQueryViewer ? $fn.foundationMediaQueryViewer() : null;
/*    $('#map').mapster({
           fillColor: 'ff0000',
           fillOpacity: 0.3,
           scaleMap: true,
      //  mapKey: 'data-key'
       });*/
            //.mapster('set',true,'AU');

//    jQuery('form label.placeholder').each(function(){
//      jQuery(this).parent().find('input, textarea').attr('placeholder', jQuery(this).html());
//      jQuery(this).remove();
//    })




    $('form label.placeholder').each(function(){
            if(placeholderIsSupported()){
                $(this).parent().find('.text, textarea').attr('placeholder', jQuery(this).html());
                $(this).remove();
//            }else{
//                convertLabel(jQuery(this));
            }
    });



}(jQuery, this, this.document));

$(window).load(function() {
    $("[data-match-height]").each(function() {

      var parentRow = $(this),
      childrenCols = $(this).find("[data-height-watch]"),
      childHeights = childrenCols.map(function(){ return $(this).height(); }).get(),
      tallestChild = Math.max.apply(Math, childHeights);
      //alert(tallestChild + childHeights);
      childrenCols.css('min-height', tallestChild+40);

    });
});

    function placeholderIsSupported() {
        test = document.createElement('input');
        return ('placeholder' in test);
    }