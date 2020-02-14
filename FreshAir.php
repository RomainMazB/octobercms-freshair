<?php namespace RomainMazB\FreshAir;

use Backend;

use Backend\Classes\Skin;

/**
 * FreshAir skin information file.
 *
 * This skin uses the default paths always, there is no lookup required.
 *
 * @package romainmazb\freshair
 * @author Romain 'Maz' Billoir
 */

class FreshAir extends Skin
{
    public function skinDetails()
    {
        return [
            'name' => 'Fresh Air'
        ];
    }
}
