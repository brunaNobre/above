$('#email').on('change', function(){
    
    $('#email').val() != "" ? $('#email-label').text('') : $('#email-label').text('E-mail ou nome de usuário(a)')

    $('#password').val() != "" ? $('#password-label').text('') : $('#password-label')
    .text('Senha')

  
})

/* 

  if($('#email').val() != "") {
        $('#email-label').text('');
    } else if($('#password').val() != "") {
        $('#password-label').text('');
    }


*/