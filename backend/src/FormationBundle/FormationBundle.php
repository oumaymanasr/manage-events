<?php

namespace FormationBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class FormationBundle extends Bundle
{
    public function getParent()
    {

        return 'FOSUserBundle';
    }
}
