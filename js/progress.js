$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

$( window ).scroll(function() {   
  if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow'); // every each progress-bar's actual value gets in variable
    $(this).width(each_bar_width + '%'); // and every singel progress-bar puts in action, and help with css action gets an smooth animation
  });
       
  }  
});