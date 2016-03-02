<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 03/02/2016
 * Time: 12:11
 */

namespace AppBundle\WebService\BDD;


abstract class BDD
{
    public $webservice;

    public function __construct($webservice)
    {
        $this->webservice = $webservice;
    }
}