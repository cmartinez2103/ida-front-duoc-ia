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

   ///GRUPOS DE ACCIONES PARA LOS PROYECTOS, PASAR DE ETAPA O ASIGNAR EVALUADORES
   var selector = $('#select_action');
   selector.change(function() {
      if ($(this).val() == 'evaluadores') {
         $('.group-evaluadores').show();
         $('.group-etapa').hide();
      } else if ($(this).val() == 'etapa') {
         $('.group-etapa').show();
         $('.group-evaluadores').hide();
      } else {
         $('.group-etapa').hide();
         $('.group-evaluadores').hide();
      }
   });

   ///CHECK MASTER DE LA TABLE DE LOS PROYECTOS
   $('[name="master"]').on('change', function(ev) {
      var valor = $(ev.currentTarget).prop("checked");
      if (!valor) {
         $('[type="checkbox"]').prop("checked", false);
      }
      if (valor) {
         $('[type="checkbox"]').prop("checked", true);
      }
   });

   ///BOTÓN LOGIN
   $("#btn-login").click(function() {
      $(".module__login").toggle();
      console.log('TEST1');
   });


   ///REPEATER FORM DOCENTE Y ESTUDIANTE
   $('.repeater-docente ').repeater({
      initEmpty: false,
      show: function() {
         var selfRepeaterItem = this;
         $(selfRepeaterItem).slideDown();

         var repeaterItems = $(".repeatable-docente > [data-repeater-item]");
         console.log(repeaterItems);
         $(selfRepeaterItem).attr('data-index', repeaterItems.length - 1);
         $(selfRepeaterItem).find('[data-repeater-count]').text(repeaterItems.length);
      },
      hide: function() {
         $(this).slideUp();
      }
   });


   $('.repeater-estudiante ').repeater({
      initEmpty: false,
      show: function() {
         var selfRepeaterItem = this;
         $(selfRepeaterItem).slideDown();

         var repeaterItems = $(".repeatable-estudiante > [data-repeater-item]");
         console.log(repeaterItems);
         $(selfRepeaterItem).attr('data-index', repeaterItems.length - 1);
         $(selfRepeaterItem).find('[data-repeater-count]').text(repeaterItems.length);
      },
      hide: function() {
         $(this).slideUp();
      }
   });


});

$(document).ready(function(e) {
   function t(t) {
      e(t).bind("click", function(t) {
         t.preventDefault();
         e(this).parent().fadeOut()
      })
   }
   e(".dropdown-toggle").click(function() {
      var t = e(this).parents(".button__simple--select").children(".dropdown-menu").is(":hidden");
      e(".button__simple--select .dropdown-menu").hide();
      e(".button__simple--select .dropdown-toggle").removeClass("active");
      if (t) {
         e(this).parents(".button__simple--select").children(".dropdown-menu").toggle().parents(".button__simple--select").children(".dropdown-toggle").addClass("active")
      }
   });
   e(document).bind("click", function(t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button__simple--select")) e(".button__simple--select .dropdown-menu").hide();
   });
   e(document).bind("click", function(t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button__simple--select")) e(".button__simple--select .dropdown-toggle").removeClass("active");
   })
});
