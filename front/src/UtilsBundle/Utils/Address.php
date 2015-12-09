<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 09/12/2015
 * Time: 12:15
 */

namespace UtilsBundle;


class Address
{
    public $postCode;
    public $city;
    public $country;
    public $line;
    public $created_at;
    public $updated_at;

    function Address($postCode,$city,$country,$line,$created_at,$updated_at){
        $this->postCode=$postCode;
        $this->city=$city;
        $this->country=$country;
        $this->line=$line;
        $this->created_at=$created_at;
        $this->updated_at=$updated_at;
    }
}
