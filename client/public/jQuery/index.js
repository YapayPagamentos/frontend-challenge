$( document ).ready(function() {
    jQuery('#name-user').keyup(function(){
    let word = jQuery(this).val().toLowerCase();

    jQuery('.users__list li').each(function(){
    let title = jQuery('.users__list-name', this).text();

        if(title.toLowerCase().indexOf(word) == -1){  
            jQuery(this).attr('aria-hidden', true);
            jQuery(this).addClass('removeItem');
        } else {              
            jQuery(this).attr('aria-hidden', false);
            jQuery(this).removeClass('removeItem');
        }
    });

    });

    jQuery('.cadastro__content .header__cadastro').on('click', function(){
        jQuery(this).parent().toggleClass('active__item');
    })
});