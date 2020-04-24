<?php namespace RomainMazB\LightSide;

use Backend;

use Backend\Classes\Skin;
use Backend\Widgets\Toolbar;
use Backend\Widgets\Form;
use BackendMenu;

/**
 * LightSide skin information file.
 *
 * This skin uses the default paths always, there is no lookup required.
 *
 * @package romainmazb\lightside
 * @author Romain 'Maz' Billoir
 */

class LightSide extends Skin
{
    public function skinDetails()
    {
        return [
            'name' => 'Light Side'
        ];
    }

    public function __construct(...$parameters) {
        parent::__construct(...$parameters);

        Toolbar::extend(function ($widget) {
            array_push($widget->cssClasses, 'tw-pt-6');
        });

        Form::extend(function ($widget) {
            $widget->addViewPath(plugins_path().'/romainmazb/lightside/lightside/widgets/form/partials/');
        });

        BackendMenu::registerContextSidenavPartial(
            'October.System',
            'system',
            plugins_path().'/romainmazb/lightside/system/partials/_system_sidebar.htm'
        );
    }
}
