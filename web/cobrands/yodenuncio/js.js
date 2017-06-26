// We do our own #geolocate_link setup in dom ready.
delete fixmystreet.set_up.report_geolocation;

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

    $('.js-geolocation-option').each(function(){
        if (!('geolocation' in navigator)) {
            $('#geolocate_link').hide();
            return;
        }

        var $form = $(this).parent();

        fixmystreet.geolocate.setup(function(pos) {
            var params = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                category: $form.find('[name="category"]:checked').val()
            };
            location.href = '/report/new?' + $.param(params);
        });
    });

    var $privacyAssurance = $('.js-privacy-assurance');
    if ( $privacyAssurance.length ) {
        if( $.cookie('has_dismissed_privacy_assurance') ){
            $privacyAssurance.remove();
        } else {
            var $close = $('<button class="privacy-assurance__close">');
            $close.text('Cerrar').on('click', function(){
                $.cookie('has_dismissed_privacy_assurance', 1, {expires: 30, path: '/'});
                $privacyAssurance.slideUp(250, function(){
                    $privacyAssurance.remove();
                });
            });
            $close.appendTo( $privacyAssurance.children('.container') );
        }
    }
});
