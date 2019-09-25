let is_hidden = true;

$('#abvDropdownMenuButton').on('click', function(evt){

    evt.preventDefault();

    is_hidden ? $('#abvDropdownMenu').removeClass('hidden') : $('#abvDropdownMenu').addClass('hidden');


    is_hidden ? is_hidden = false : is_hidden = true;
  
})







