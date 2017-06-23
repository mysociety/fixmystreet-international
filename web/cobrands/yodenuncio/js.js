$(function(){
    $('.js-two-stage-frontpage-form').each(function(){
        var $form = $(this);
        var $fieldsets = $('fieldset', $form);

        $fieldsets.eq(0).on('change', function(){
            if( $fieldsets.eq(1).is(':hidden') ){
                $fieldsets.eq(1).slideDown(250, function(){
                    $fieldsets.eq(1).find('input[type="text"]').focus();
                });
            } else {
                $fieldsets.eq(1).find('input[type="text"]').focus();
            }
        });

        $fieldsets.eq(1).hide();
    });
});
