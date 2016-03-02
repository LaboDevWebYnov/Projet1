<?php

namespace AppBundle\WebService\Utils;

class Address
{
    public $postCode;
    public $city;
    public $country;
    public $line;

    public function __construct($postCode,
                                $city,
                                $country,
                                $line)
    {
        $this->postCode=$postCode;
        $this->city=$city;
        $this->country=$country;
        $this->line=$line;
    }

    public function __toString(){
        return $this->postCode." : ".$this->city." ".$this->country." ".$this->line;
    }

}