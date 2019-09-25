$('#name').on('change', function(){

    $('#name').val() != "" ? $('#name-label').addClass("hidden-behind") : $('#name-label').removeClass("hidden-behind");

    
    $('#email').val() != "" ? $('#email-label').addClass("hidden-behind") : $('#email-label').removeClass("hidden-behind");

    $('#password').val() != "" ? $('#password-label').addClass("hidden-behind") : $('#password-label')
    .removeClass("hidden-behind");

    $('#password-confirm').val() != "" ? $('#password-confirm-label').addClass("hidden-behind") : $('#password-confirm-label')
    .removeClass("hidden-behind");
  
})