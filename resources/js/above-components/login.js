$('#email').on('change', function(){
    
    $('#email').val() != "" ? $('#email-label').addClass("hidden-behind") : $('#email-label').removeClass("hidden-behind");

    $('#password').val() != "" ? $('#password-label').addClass("hidden-behind") : $('#password-label')
    .removeClass("hidden-behind");

  
})
