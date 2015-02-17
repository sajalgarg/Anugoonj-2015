$(document).ready(function() {
    $.timeliner({});
});

//Active li items
var make_button_active = function()
{
  //Get item siblings
  var siblings =($(this).siblings());

  //Remove active class on all buttons
  siblings.each(function (index)
    {
      $(this).removeClass('active');
    }
  )

  //Add the clicked button class
  $(this).addClass('active');
}

//Attach events to menu
$(document).ready(
  function()
  {
    $(".buttons li").click(make_button_active);
    $(".event").hover(function() {
        $(this).find(".event-description").css("visibility","visible");
    },function(){
        $(".event-description").css("visibility","hidden");
    });
  }  
)
