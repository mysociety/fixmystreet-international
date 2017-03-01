package FixMyStreet::Cobrand::CuidoMiCiudad;
use base 'FixMyStreet::Cobrand::Default';

use strict;
use warnings;

sub country {
    return 'DO';
}

sub languages { [ 'es-do,Spanish,es_DO' ] }
sub language_override { 'es-do' }

1;
