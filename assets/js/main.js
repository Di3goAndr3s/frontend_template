$( document ).ready(function() {
   $(".region-menu-principal > ul > li:nth-of-type(1) > a").click(function(e) {
  event.preventDefault();
   $(".region-banner .views-row-1").stop().animate({opacity: 1}, "slow").css( "z-index", 99 );
   $(".region-banner .views-row-4, .region-banner .views-row-2, .region-banner .views-row-3").stop().animate({opacity: 0}, "slow").css( "z-index", 10 );
   $(this).next("ul").stop(true).slideDown(500);
  });

   $(".region-menu-principal > ul > li:nth-of-type(2) > a").click(function(e) {
  event.preventDefault();
   $(".region-banner .views-row-2").stop().animate({opacity: 1}, "slow").css( "zIndex", 99 );
   $(".region-banner .views-row-1, .region-banner .views-row-3, .region-banner .views-row-4").stop().animate({opacity: 0}, "slowast").css( "z-index", 10 );
   $(this).next("ul").stop(true).slideDown(500);
  });

   $(".region-menu-principal > ul > li:nth-of-type(3) > a").click(function(e) {
  event.preventDefault();
   $(".region-banner .views-row-3").stop().animate({opacity: 1}, "slow").css( "z-index", 99 );
   $(".region-banner .views-row-1, .region-banner .views-row-2, .region-banner .views-row-4").stop().animate({opacity: 0}, "slow").css( "z-index", 10 );
    $(this).next("ul").stop(true).slideDown(500);
  });

$(".region-menu-principal > ul > li:nth-of-type(4) > a").click(function(e) {
  event.preventDefault();
   $(".region-banner .views-row-4").stop().animate({opacity: 1}, "slow").css( "z-index", 99 );
   $(".region-banner .views-row-1, .region-banner .views-row-2, .region-banner .views-row-3").stop().animate({opacity: 0}, "slow").css( "z-index", 10 );
   $(this).next("ul").stop(true).slideDown(500);
  });

$(".region-menu-principal ul.menu li").mouseleave(function(){
   $(this).find("ul").stop(true).slideUp(500);
   });

});


Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

  //MENÚ SECUNDARIO Y BANNER PRINCIPAL



//    $('.region-menu-principal ul.menu li.expanded ul.menu').attr({
//   'title': 'Title modificado por jQuery',
//   'style': 'height: auto'
//
//});


$( ".cajas .views-row" ).append( "<div class='cont_expandecaja'><a class='vermas'></a></div>" );

jQuery.fn.animateAuto = function(prop, speed, callback){
    var elem, height, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"height":"auto"}).appendTo(el.parent());
        height = elem.css("height"),
        width = elem.css("width"),
        elem.remove();

        if(prop === "height")
            el.animate({"height":height}, speed, callback);
        else if(prop === "width")
            el.animate({"width":width}, speed, callback);
        else if(prop === "both")
            el.animate({"width":width,"height":height}, speed, callback);
    });
}


        var alto=false;
       $(".vermas").bind("click", function(e){
        if(alto==false){
        console.log('abierto');
        alto = true;

        $(this).parent(".cont_expandecaja").parent(".views-row").animateAuto("height", 500);
        $(this).parent(".cont_expandecaja").css("height", "0px");
        $(this).addClass("vermenos");
//        $(".view-somos-carval .cajas .views-row").css({height:"320px"}, 700);

        }
        else {
        $(this).parent(".cont_expandecaja").parent(".views-row").animate({height:"320px"}, 700);
        $(this).parent(".cont_expandecaja").css("height", "40px");
        $(this).removeClass("vermenos");
        console.log('cerrado');
        alto = false;
        }



      });











//     $( ".i18n-es .view-productos-y-servicios .form-item-shs-term-node-tid-depth" ).append( "<div class='label-buscador1'>Productos</div><div class='label-buscador2'>Marcas</div><div class='label-buscador3'>Especies</div>" );

//     var alto=false;
//      $(".vermas").click(function (e) {
//        if(alto==false){
//        console.log('abierto');
//        alto = true;
////        $(".view-somos-carval .cajas .views-row").css("height", "320px");
//        $(this).parent(".cont_expandecaja").parent(".views-row").css("height", "auto");
//        $(this).parent(".cont_expandecaja").css("height", "0px");
//        $(this).addClass("vermenos");
//
//        }
//        else {
//        $(this).parent(".cont_expandecaja").parent(".views-row").css("height", "320px");
//        $(this).parent(".cont_expandecaja").css("height", "40px");
//        $(this).removeClass("vermenos");
//        console.log('cerrado');
//        alto = false;
//        }
//
//
//
//      });

//    $("#edit-shs-term-node-tid-depth-select-1").click(function(e) {
//     $(".label-buscador2").css("display", "block");
//    });









//    var imagenes = $('.cajas .field-name-field-imagen').length;
//    if(imagenes > 0){
//      $('.cajas .field-name-field-video').hide();
//    }



//      var alto=false;
//      $(".vermas").click(function (e) {
//        if(alto==false){
//        console.log('abierto');
//        alto = true;
////        $(".view-somos-carval .cajas .views-row").css("height", "320px");
//        $(this).parent(".cont_expandecaja").parent(".field-name-vermas-cajas").parent(".node-productos-por-tipo").parent(".views-row").css("height", "auto");
//        $(this).addClass("vermenos");
//
//        }
//        else {
//        $(this).parent(".cont_expandecaja").parent(".field-name-vermas-cajas").parent(".node-productos-por-tipo").parent(".views-row").css("height", "320px");
//        $(this).removeClass("vermenos");
//        console.log('cerrado');
//        alto = false;
//        }
//
//
//
//      });

  //DESTACADOS

//  $(".modulo-laboratorio-animed").hover(function(){
//    $(".modulo-noticias-home").addClass("modulohome_inactivo");
//    $(this).addClass("modulohome_activo").removeClass("modulohome_inactivo");
//  });
//
//  $(".modulo-laboratorio-animed").mouseleave(function(){
//    $(".modulo-noticias-home").removeClass("modulohome_inactivo");
//    $(this).removeClass("modulohome_activo");
//  });
//
//  $(".modulo-noticias-home").hover(function(){
//    $(".modulo-laboratorio-animed").addClass("modulohome_inactivo");
//    $(this).addClass("modulohome_activo").removeClass("modulohome_inactivo");
//  });
//
//  $(".modulo-noticias-home").mouseleave(function(){
//    $(".modulo-laboratorio-animed").removeClass("modulohome_inactivo");
//    $(this).removeClass("modulohome_activo");
//  });



   //APPENDS








    //ARTICULOS
//  $(".bt_expandecaja").click(function(event) {
//    event.preventDefault();
//
//    if ($(this).text() == '+') {
//      if ($(this).parent(".cont_expandecaja").parent(".views-row").find(".views-field").length){
//        var altocontenido = parseInt($(this).parent(".cont_expandecaja").parent(".views-row").find(".views-field").css('height'));
//        console.log(altocontenido);
//        $(this).parent(".cont_expandecaja").parent(".views-row").css("height", altocontenido + 40);
//        $(this).text('-');
//      }
//      if ($(this).parent(".cont_expandecaja").parent(".views-row").find(".node-productos-por-tipo").length){
//        var altocontenido = parseInt($(this).parent(".cont_expandecaja").parent(".views-row").find(".node-productos-por-tipo").css('height'));
//        console.log(altocontenido);
//        $(this).parent(".cont_expandecaja").parent(".views-row").css("height", altocontenido + 40);
//        $(this).text('-');
//      }
//    }
//    else {
//      $(this).parent(".cont_expandecaja").parent(".views-row").css("height", "320px");
//      $(this).text('+');
//    }
//
//  });


 //CLASES

//  $("footer").parent("section").addClass("inline100");
//  $("region-menu-principal").parent("nav").addClass("nav95");


  }
};


