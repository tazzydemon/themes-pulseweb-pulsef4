$(document).ready(function () {

//$("#colorbox1").colorbox({width:"80%", height:"80%", iframe:true});

    var config = {
         sensitivity: 3,
         interval: 300,
         over: reveal

    };


    $('area').hoverIntent(config);

    function reveal(){

            var partName = $(this).attr('name');
            var partNumber = partName.slice(1);
            var selector = 'p' + partNumber;
            $("div.map_info").slideUp('fast', 'swing');
            $('#' + selector).slideDown('fast', 'swing');

    }




    $('#map').maphilight();
});


// To prevent default action
// return false;
//}
