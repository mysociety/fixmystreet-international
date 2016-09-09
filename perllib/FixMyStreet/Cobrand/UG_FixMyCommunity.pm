package FixMyStreet::Cobrand::UG_FixMyCommunity;
use parent 'FixMyStreet::Cobrand::Default';

use strict;
use warnings;

sub front_stats_data {
    my ( $self ) = @_;

    my $key = "recent_fixed:0";
    my $fixed = Memcached::get($key);
    unless ($fixed) {
        $fixed = $self->problems->search( {
            state => [ FixMyStreet::DB::Result::Problem->fixed_states() ],
        } )->count;
        Memcached::set($key, $fixed, 3600);
    }
    my $updates = $self->problems->number_comments();
    my $new = $self->problems->recent_new( '100 years' );

    my $stats = {
        fixed   => $fixed,
        updates => $updates,
        new     => $new,
    };

    return $stats;
}

1;

