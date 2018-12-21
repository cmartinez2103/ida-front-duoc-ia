$(document).ready(function() {
   $('[data-tooltips]').on('mouseenter', function(ev) {
      var $text = $(ev.currentTarget).data('tooltips')
      $('<div/>', {
         'class': 'tooltips',
         'html': '<span>' + $text + '</span>'
      }).appendTo(ev.currentTarget);
   }).on('mouseleave', function(ev) {
      $('.tooltips').remove();
   })

   var selector = $('#select_action');
   selector.change(function () {
      if ($(this).val() == 'evaluadores') {
         $('.group-evaluadores').show();
         $('.group-etapa').hide();
      }else if ($(this).val() == 'etapa') {
         $('.group-etapa').show();
         $('.group-evaluadores').hide();
      }else {
         $('.group-etapa').hide();
         $('.group-evaluadores').hide();
      }
   });

   $('[name="master"]').on('change', function(ev){
      var valor = $(ev.currentTarget).prop("checked");
      if(!valor){
         $('[type="checkbox"]').prop("checked", false);
      }
      if(valor){
         $('[type="checkbox"]').prop("checked", true);
      }
   });

   $( "#btn-login" ).click(function() {
     $( ".module__login" ).toggle();
     console.log('TEST1');
   });

});

$(document).ready(function (e) {
   function t(t) {
       e(t).bind("click", function (t) {
           t.preventDefault();
           e(this).parent().fadeOut()
       })
   }
   e(".dropdown-toggle").click(function () {
       var t = e(this).parents(".button__simple--select").children(".dropdown-menu").is(":hidden");
       e(".button__simple--select .dropdown-menu").hide();
       e(".button__simple--select .dropdown-toggle").removeClass("active");
       if (t) {
           e(this).parents(".button__simple--select").children(".dropdown-menu").toggle().parents(".button__simple--select").children(".dropdown-toggle").addClass("active")
       }
   });
   e(document).bind("click", function (t) {
       var n = e(t.target);
       if (!n.parents().hasClass("button__simple--select")) e(".button__simple--select .dropdown-menu").hide();
   });
   e(document).bind("click", function (t) {
       var n = e(t.target);
       if (!n.parents().hasClass("button__simple--select")) e(".button__simple--select .dropdown-toggle").removeClass("active");
   })
});
