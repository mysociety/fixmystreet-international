package FixMyStreet::Cobrand::MakeMyIsland;
use base 'FixMyStreet::Cobrand::Default';

use strict;
use warnings;

sub country {
    return 'MV';
}

# allows Fonadhoo Island Council staff to hide reports
# currently there's only one council, id=1
sub council_id {
  return  1;
}

sub users_can_hide {
  return 1;
}

sub pin_colour {
    my ( $self, $p, $context ) = @_;
    return 'green' if $p->is_fixed || $p->is_closed;
    return 'red' if $p->state eq 'confirmed';
    return 'yellow';
}

1;

